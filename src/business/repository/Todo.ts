import { TodoID, Todo } from "../../entity/Todo";
import { Omit } from "../../utility/Omit";
import { UserID } from "../../entity/User";

export type CreateTodoInfo = Omit<Todo, "id">;

export interface TodoRepository {
  createTodo(createTodoInfo: CreateTodoInfo): Promise<TodoID>;
  getTodo(todoId: TodoID): Promise<Todo>;
  getTodoList(): Promise<Todo[]>;
  assignUserToTodo(todoId: TodoID, userId: UserID): Promise<void>;
  removeAssignedUserFromTodo(todoId: TodoID, userId: UserID): Promise<void>;
  changeDescriptionOfTodo(todoId: TodoID, description: string): Promise<void>;
  changeTodoRole(todoId: TodoID, role: string): Promise<void>;
  changeDueDateOfTodo(todoId: TodoID, dueDate: Date): Promise<void>;
  removeTodo(todoId: TodoID): Promise<void>;
}
