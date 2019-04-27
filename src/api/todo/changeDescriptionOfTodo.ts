import { injectable, inject } from "inversify";
import injectableList from "../../injectableList";
import { ChangeDescriptionOfTodoBusiness } from "../../business/changeDescriptionOfTodo";
import { Request, Response } from "express";
import { TodoID } from "../../entity/Todo";
import { Failure } from "../Error";

interface ChangeDescriptionParam {
  todoId: TodoID;
}

interface ChangeDescriptionBody {
  description: string;
}

function changeDescriptionSuccess(res: Response) {
  res.status(200).send();
}

function changeDescriptionFailure(res: Response, reason: string) {
  res.status(400).json({ reason } as Failure);
}

@injectable()
export class ChangeDescriptionOfTodoHandler {
  public constructor(
    @inject(injectableList.ChangeDescriptionOfTodoBusiness)
    private changeDescription: ChangeDescriptionOfTodoBusiness
  ) {}

  public async handler(req: Request, res: Response) {
    const { todoId }: ChangeDescriptionParam = req.params;
    const { description }: ChangeDescriptionBody = req.body;

    try {
      await this.changeDescription.changeDescriptionOfTodo(todoId, description);
      changeDescriptionSuccess(res);
    } catch (e) {
      changeDescriptionFailure(res, e.toString());
    }
  }
}
