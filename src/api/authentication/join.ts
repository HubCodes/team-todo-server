import { injectable, inject } from "inversify";
import injectableList from "../../injectableList";
import { CreateUserBusiness } from "../../business/createUser";
import { Request, Response } from "express";
import { CreateUserInfo } from "../../business/repository/User";
import { Failure } from "../Error";

function joinSuccess(res: Response) {
  res.status(201).send();
}

function joinFailure(res: Response, reason: string) {
  res.status(409).send({ reason } as Failure);
}

@injectable()
export class JoinHandler {
  public constructor(
    @inject(injectableList.CreateUserBusiness) private createUser: CreateUserBusiness
  ) {}

  public async handler(req: Request, res: Response): Promise<void> {
    const createUserInfo: CreateUserInfo = req.body;

    try {
      await this.createUser.createUser(createUserInfo);
      joinSuccess(res);
    } catch (e) {
      joinFailure(res, e.toString());
    }
  }
}
