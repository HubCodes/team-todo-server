import { injectable, inject } from "inversify";
import injectableList from "../injectableList";
import { TodoRepository } from "./repository/Todo";
import { TodoID } from "../entity/Todo";
import { UserID } from "../entity/User";

@injectable()
export class RemoveAssignedUserFromTodoBusiness {
  public constructor(
    @inject(injectableList.TodoRepository) private todoRepository: TodoRepository
  ) {}

  public async removeAssignedUserFromTodo(todoId: TodoID, ...users: UserID[]): Promise<void> {
    for (const user of users) {
      await this.todoRepository.removeAssignedUserFromTodo(todoId, user);
    }
  }
}
