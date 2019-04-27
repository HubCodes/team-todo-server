import { injectable, inject } from "inversify";
import injectableList from "../../injectableList";
import { Request, Response } from "express";
import { ChangeTodoRoleBusiness } from "../../business/changeTodoRole";
import { TodoID } from "../../entity/Todo";
import { Failure } from "../Error";

interface ChangeTodoRoleParam {
  todoId: TodoID;
}

interface ChangeTodoRoleBody {
  role: string;
}

function setTodoRoleSuccess(res: Response) {
  res.status(200).send();
}

function setTodoRoleFailure(res: Response, reason: string) {
  res.status(400).json({ reason } as Failure);
}

@injectable()
export class SetTodoRoleHandler {
  public constructor(
    @inject(injectableList.ChangeTodoRoleBusiness) private changeTodoRole: ChangeTodoRoleBusiness
  ) {}

  public async handler(req: Request, res: Response) {
    const { todoId }: ChangeTodoRoleParam = req.params;
    const { role }: ChangeTodoRoleBody = req.body;

    try {
      await this.changeTodoRole.changeTodoRole(todoId, role);
      setTodoRoleSuccess(res);
    } catch (e) {
      setTodoRoleFailure(res, e.toString());
    }
  }
}
