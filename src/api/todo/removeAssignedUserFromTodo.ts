import { injectable, inject } from "inversify";
import injectableList from "../../injectableList";
import { RemoveAssignedUserFromTodoBusiness } from "../../business/removeAssignedUserFromTodo";
import { Request, Response } from "express";
import { TodoID } from "../../entity/Todo";
import { UserID } from "../../entity/User";
import { Failure } from "../Error";

interface RemoveAssignedUserFromTodoParam {
  todoId: TodoID;
}

interface RemoveAssignedUserFromTodoBody {
  userId: UserID;
}

function removeAssignedUserFromTodoSuccess(res: Response) {
  res.sendStatus(200);
}

function removeAssignedUserFromTodoFailure(res: Response, reason: string) {
  res.status(400).json({ reason } as Failure);
}

@injectable()
export class RemoveAssignedUserFromTodoHandler {
  public constructor(
    @inject(injectableList.RemoveAssignedUserFromTodoBusiness)
    private removeAssignedUser: RemoveAssignedUserFromTodoBusiness
  ) {}

  public async handler(req: Request, res: Response) {
    const { todoId }: RemoveAssignedUserFromTodoParam = req.params;
    const { userId }: RemoveAssignedUserFromTodoBody = req.body;

    try {
      await this.removeAssignedUser.removeAssignedUserFromTodo(todoId, userId);
      removeAssignedUserFromTodoSuccess(res);
    } catch (e) {
      removeAssignedUserFromTodoFailure(res, e.toString());
    }
  }
}
