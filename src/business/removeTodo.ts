import { inject, injectable } from "inversify";
import injectableList from "injectableList";
import { TodoRepository } from "./repository/Todo";
import { TodoID } from "entity/Todo";

@injectable()
export class RemoveTodoBusiness {
  public constructor(
    @inject(injectableList.TodoRepository) private todoRepository: TodoRepository
  ) {}

  public async removeTodo(todoId: TodoID): Promise<void> {
    await this.todoRepository.removeTodo(todoId);
  }
}
