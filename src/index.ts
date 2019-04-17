import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();

import { container } from "./inversify.config";
import injectableList from "./injectableList";
import { App } from "./api";

const app = container.get<App>(injectableList.Application);

app.listen(8080);
