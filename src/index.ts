import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();

import { container } from "./inversify.config";
import injectableList from "./injectableList";
import { App } from "./api";
import { todoStore } from "./repository/TodoKeyValueStore";
import { userStore } from "./repository/UserKeyValueStore";

const app = container.get<App>(injectableList.Application);

app.listen(8080);

function onExit() {
  todoStore.save();
  userStore.save();

  process.exit();
}

process.on("exit", onExit);
process.on("SIGINT", onExit);
process.on("SIGUSR1", onExit);
process.on("SIGUSR2", onExit);
process.on("uncaughtException", onExit);
