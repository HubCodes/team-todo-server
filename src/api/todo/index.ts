import { injectable, inject } from "inversify";
import { Router, Request, Response } from "express";
import injectableList from "../../injectableList";
import { AssignUserToTodoHandler } from "./assignUserToTodo";
import { ChangeDescriptionOfTodoHandler } from "./changeDescriptionOfTodo";
import { CreateTodoHandler } from "./createTodo";
import { GetTodoHandler } from "./getTodo";
import { GetTodoListHandler } from "./getTodoList";
import { SetTodoRoleHandler } from "./setTodoRole";
import { NextFunction } from "connect";
import jwt from "jsonwebtoken";
import { secretKey, jwtSignAlgorithm } from "../../config";
import { RemoveAssignedUserFromTodoHandler } from "./removeAssignedUserFromTodo";

@injectable()
export class TodoRouter {
  private todoHandler: Router;

  public constructor(
    @inject(injectableList.AssignUserToTodoHandler)
    private assignUserToTodoHandler: AssignUserToTodoHandler,
    @inject(injectableList.ChangeDescriptionOfTodoHandler)
    private changeDescriptionOfTodoHandler: ChangeDescriptionOfTodoHandler,
    @inject(injectableList.CreateTodoHandler) private createTodoHandler: CreateTodoHandler,
    @inject(injectableList.GetTodoHandler) private getTodoHandler: GetTodoHandler,
    @inject(injectableList.GetTodoListHandler) private getTodoListHandler: GetTodoListHandler,
    @inject(injectableList.RemoveAssignedUserFromTodoHandler)
    private removeAssignedUserFromTodoHandler: RemoveAssignedUserFromTodoHandler,
    @inject(injectableList.SetTodoRoleHandler) private setTodoRoleHandler: SetTodoRoleHandler
  ) {
    this.todoHandler = Router();
    this.configure();
  }

  public getExpressRouter() {
    return this.todoHandler;
  }

  private configure() {
    this.todoHandler.use((req: Request, res: Response, next: NextFunction) => {
      const token = req.header("auth");

      if (!token) {
        res.status(401).send();

        return;
      }

      try {
        jwt.verify(token, secretKey, { algorithms: [jwtSignAlgorithm] });
      } catch (e) {
        res.status(401).send();

        return;
      }

      next();
    });
    this.assignUserToTodoConfigure();
    this.changeDescriptionOfTodoConfigure();
    this.createTodoConfigure();
    this.getTodoConfigure();
    this.getTodoListConfigure();
    this.removeAssignedUserFromTodoConfigure();
    this.setTodoRoleConfigure();
  }

  private assignUserToTodoConfigure() {
    const handlerThis = this.assignUserToTodoHandler;
    const handler = handlerThis.handler.bind(handlerThis);

    this.todoHandler.post("/:todoId/assign-user", handler);
  }

  private changeDescriptionOfTodoConfigure() {
    const handlerThis = this.changeDescriptionOfTodoHandler;
    const handler = handlerThis.handler.bind(handlerThis);

    this.todoHandler.patch("/:todoId/description", handler);
  }

  private createTodoConfigure() {
    const handlerThis = this.createTodoHandler;
    const handler = handlerThis.handler.bind(handlerThis);

    this.todoHandler.post("/", handler);
  }

  private getTodoConfigure() {
    const handlerThis = this.getTodoHandler;
    const handler = handlerThis.handler.bind(handlerThis);

    this.todoHandler.get("/:todoId", handler);
  }

  private getTodoListConfigure() {
    const handlerThis = this.getTodoListHandler;
    const handler = handlerThis.handler.bind(handlerThis);

    this.todoHandler.get("/", handler);
  }

  private removeAssignedUserFromTodoConfigure() {
    const handlerThis = this.removeAssignedUserFromTodoHandler;
    const handler = handlerThis.handler.bind(handlerThis);

    this.todoHandler.delete("/:todoId/assign-user", handler);
  }

  private setTodoRoleConfigure() {
    const handlerThis = this.setTodoRoleHandler;
    const handler = handlerThis.handler.bind(handlerThis);

    this.todoHandler.patch("/:todoId/role", handler);
  }
}
