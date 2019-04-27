import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import injectableList from "../../injectableList";
import { IsValidUserBusiness } from "../../business/isValidUser";
import jwt from "jsonwebtoken";
import { ApiError } from "../../api/Error";
import { secretKey, jwtSignAlgorithm } from "../../config";

interface LoginRequest {
  id: string;
  pw: string;
}

interface LoginSuccessResponse {
  accessToken: string;
}

interface LoginFailureResponse {
  reason: string;
}

function makeAccessToken() {
  const token = jwt.sign({ dummy: "dummy" }, secretKey, {
    algorithm: jwtSignAlgorithm,
    expiresIn: "1h"
  });

  return token;
}

function loginSuccess(res: Response) {
  res.status(200).json({ accessToken: makeAccessToken() } as LoginSuccessResponse);
}

function loginFailure(res: Response, reason: string) {
  res.status(401).json({ reason } as LoginFailureResponse);
}

@injectable()
export class LoginHandler {
  public constructor(
    @inject(injectableList.IsValidUserBusiness) private isValidUserBusiness: IsValidUserBusiness
  ) {}

  public async handler(req: Request, res: Response): Promise<void> {
    const { id, pw }: LoginRequest = req.body;

    try {
      const isValidUser = await this.isValidUserBusiness.isValidUser(id, pw);

      if (isValidUser) {
        loginSuccess(res);
      } else {
        loginFailure(res, ApiError.NO_MATCH_ID_OR_PW_FOUND);
      }
    } catch (e) {
      loginFailure(res, e.toString());
    }
  }
}
