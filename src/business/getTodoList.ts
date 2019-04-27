import { injectable, inject } from "inversify";
import injectableList from "../injectableList";
import { TodoRepository } from "./repository/Todo";

@injectable()
export class GetTodoListBusiness {
  public constructor(
    @inject(injectableList.TodoRepository) private todoRepository: TodoRepository
  ) {}

  public async getTodoList() {
    const todoList = await this.todoRepository.getTodoList();

    return todoList;
  }
}
