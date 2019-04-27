import { TodoID, Todo } from "../entity/Todo";
import { injectable, inject } from "inversify";
import injectableList from "../injectableList";
import { TodoRepository, CreateTodoInfo } from "./repository/Todo";
import { UserID } from "../entity/User";

@injectable()
export class CreateTodoBusiness {
  public constructor(
    @inject(injectableList.TodoRepository)
    private todoRepository: TodoRepository
  ) {}

  public async createTodo(todo: CreateTodoInfo): Promise<TodoID> {
    const id = await this.todoRepository.createTodo(todo);

    return id;
  }
}
