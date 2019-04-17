import { Router } from "express";
import { injectable, inject } from "inversify";
import injectableList from "../../injectableList";
import { LoginHandler } from "./login";
import { JoinHandler } from "./join";

@injectable()
export class AuthenticationRouter {
  private authenticator: Router;

  public constructor(
    @inject(injectableList.LoginHandler) private loginHandler: LoginHandler,
    @inject(injectableList.JoinHandler) private joinHandler: JoinHandler
  ) {
    this.authenticator = Router();
    this.configure();
  }

  public getExpressRouter() {
    return this.authenticator;
  }

  private configure() {
    this.joinConfigure();
    this.loginConfigure();
  }

  private joinConfigure() {
    const handlerThis = this.joinHandler;
    const handler = handlerThis.handler.bind(handlerThis);

    this.authenticator.post("/join", handler);
  }

  private loginConfigure() {
    const handlerThis = this.loginHandler;
    const handler = handlerThis.handler.bind(handlerThis);

    this.authenticator.post("/login", handler);
  }
}
