import { injectable, inject } from "inversify";
import injectableList from "../../injectableList";
import { GetTodoBusiness } from "../../business/getTodo";
import { Request, Response } from "express";
import { TodoID, Todo } from "../../entity/Todo";
import { Failure } from "../Error";

interface GetTodo {
  todoId: TodoID;
}

function getTodoSuccess(res: Response, todo: Todo) {
  res.status(200).json(todo);
}

function getTodoFailure(res: Response, reason: string) {
  res.status(404).send({ reason } as Failure);
}

@injectable()
export class GetTodoHandler {
  public constructor(@inject(injectableList.GetTodoBusiness) private getTodo: GetTodoBusiness) {}

  public async handler(req: Request, res: Response) {
    const { todoId }: GetTodo = req.params;

    try {
      const todo = await this.getTodo.getTodo(todoId);
      getTodoSuccess(res, todo);
    } catch (e) {
      getTodoFailure(res, e.toString());
    }
  }
}
