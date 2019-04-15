import { injectable, inject } from "inversify";
import injectableList from "injectableList";
import { TodoRepository } from "./repository/Todo";
import { TodoID, Todo } from "entity/Todo";

@injectable()
export class GetTodoBusiness {
  public constructor(
    @inject(injectableList.TodoRepository) private todoRepository: TodoRepository
  ) {}

  public async getTodo(todoId: TodoID): Promise<Todo> {
    const todo = await this.todoRepository.getTodo(todoId);

    return todo;
  }
}
