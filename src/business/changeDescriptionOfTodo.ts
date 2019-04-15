import { injectable, inject } from "inversify";
import injectableList from "injectableList";
import { TodoRepository } from "./repository/Todo";
import { TodoID } from "entity/Todo";

@injectable()
export class ChangeDescriptionOfTodoBusiness {
  public constructor(
    @inject(injectableList.TodoRepository) private todoRepository: TodoRepository
  ) {}

  public async changeDescriptionOfTodo(todoId: TodoID, newDescription: string): Promise<void> {
    await this.todoRepository.changeDescriptionOfTodo(todoId, newDescription);
  }
}
