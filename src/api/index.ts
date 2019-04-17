import express from "express";
import http from "http";
import { injectable, inject } from "inversify";
import injectableList from "../injectableList";
import { AuthenticationRouter } from "./authentication";

@injectable()
export class App {
  private app: express.Express;
  private server: http.Server;

  public constructor(
    @inject(injectableList.AuthenticationRouter) private authenticationRouter: AuthenticationRouter
  ) {
    this.app = express();
    this.server = http.createServer(this.app);
    this.app.use(express.json());
    this.app.use("/", this.authenticationRouter.getExpressRouter());
  }

  public listen(port: number | string) {
    this.server.listen(port, () => {
      console.info(`[INFO] Server listening at ${port}`);
    });
  }
}
