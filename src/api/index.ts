import express from "express";
import http from "http";
import winston from "winston";
import expressWinston from "express-winston";
import { injectable, inject } from "inversify";
import injectableList from "../injectableList";
import { AuthenticationRouter } from "./authentication";
import { TodoRouter } from "./todo";

@injectable()
export class App {
  private app: express.Express;
  private server: http.Server;

  public constructor(
    @inject(injectableList.AuthenticationRouter) private authenticationRouter: AuthenticationRouter,
    @inject(injectableList.TodoRouter) private todoRouter: TodoRouter
  ) {
    this.app = express();
    this.server = http.createServer(this.app);
    this.app.use(express.json());
    this.app.use(
      expressWinston.logger({
        transports: [new winston.transports.Console()]
      })
    );
    this.app.use("/auth", this.authenticationRouter.getExpressRouter());
    this.app.use("/todo", this.todoRouter.getExpressRouter());
  }

  public listen(port: number | string) {
    this.server.listen(port, () => {
      console.info(`[INFO] Server listening at ${port}`);
    });
  }
}
