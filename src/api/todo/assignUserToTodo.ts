import { injectable, inject } from "inversify";
import injectableList from "../../injectableList";
import { AssignUserToTodoBusiness } from "../../business/assignUserToTodo";
import { Request, Response } from "express";
import { TodoID } from "../../entity/Todo";
import { UserID } from "../../entity/User";
import { Failure } from "../Error";

interface AssignUserToTodoParameter {
  todoId: TodoID;
}

interface AssignUserToTodoBody {
  users: UserID[];
}

function assignUserToTodoSuccess(res: Response) {
  res.status(200).send();
}

function assignUserToTodoFailure(res: Response, reason: string) {
  res.status(400).json({ reason } as Failure);
}

@injectable()
export class AssignUserToTodoHandler {
  public constructor(
    @inject(injectableList.AssignUserToTodoBusiness)
    private assignUserToTodo: AssignUserToTodoBusiness
  ) {}

  public async handler(req: Request, res: Response) {
    const { todoId }: AssignUserToTodoParameter = req.params;
    const { users }: AssignUserToTodoBody = req.body;

    try {
      await this.assignUserToTodo.assignUserToTodo(todoId, ...users);
      assignUserToTodoSuccess(res);
    } catch (e) {
      assignUserToTodoFailure(res, e.toString());
    }
  }
}
