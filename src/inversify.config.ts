import injectableList from "injectableList";
import { Container } from "inversify";
import { UserRepository } from "business/repository/User";
import { InmemoryUserRepository } from "repository/User";
import { TodoRepository } from "business/repository/Todo";
import { InmemoryTodoRepository } from "repository/Todo";

const container = new Container();
container
  .bind<UserRepository>(injectableList.UserRepository)
  .to(InmemoryUserRepository);
container
  .bind<TodoRepository>(injectableList.TodoRepository)
  .to(InmemoryTodoRepository);

export { container };
