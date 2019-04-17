import { injectable, inject } from "inversify";
import injectableList from "../injectableList";
import { TodoRepository } from "./repository/Todo";
import { TodoID } from "../entity/Todo";
import { UserID } from "../entity/User";

@injectable()
export class AssignUserToTodoBusiness {
  public constructor(
    @inject(injectableList.TodoRepository) private todoRepository: TodoRepository
  ) {}

  public async assignUserToTodo(todoId: TodoID, ...users: UserID[]): Promise<void> {
    for (const user of users) {
      await this.todoRepository.assignUserToTodo(todoId, user);
    }
  }
}
