import { injectable, inject } from "inversify";
import injectableList from "../injectableList";
import { TodoRepository } from "./repository/Todo";
import { TodoID } from "../entity/Todo";

@injectable()
export class ChangeTodoRoleBusiness {
  public constructor(
    @inject(injectableList.TodoRepository) private todoRepository: TodoRepository
  ) {}

  public async changeTodoRole(todoId: TodoID, role: string) {
    await this.todoRepository.changeTodoRole(todoId, role);
  }
}
