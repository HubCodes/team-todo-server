import { injectable, inject } from "inversify";
import injectableList from "../../injectableList";
import { GetTodoListBusiness } from "../../business/getTodoList";
import { Request, Response } from "express";
import { Todo } from "../../entity/Todo";
import { Failure } from "../Error";

function getTodoListSuccess(res: Response, todoList: Todo[]) {
  res.status(200).json(todoList);
}

function getTodoListFailure(res: Response, reason: string) {
  res.status(400).json({ reason } as Failure);
}

@injectable()
export class GetTodoListHandler {
  public constructor(
    @inject(injectableList.GetTodoListBusiness) private getTodoList: GetTodoListBusiness
  ) {}

  public async handler(req: Request, res: Response) {
    try {
      const todoList = await this.getTodoList.getTodoList();
      getTodoListSuccess(res, todoList);
    } catch (e) {
      getTodoListFailure(res, e.toString());
    }
  }
}
