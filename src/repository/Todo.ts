import { TodoRepository, CreateTodoInfo } from "../business/repository/Todo";
import { TodoID, Todo } from "../entity/Todo";
import uuid from "uuid/v4";
import {
  makeTodoNotFoundError,
  makeUserAlreadyAssignedError,
  makeTodoHasNotAssignedAnyUser
} from "../business/repository/Error";
import { UserID } from "../entity/User";
import { injectable, inject } from "inversify";
import injectableList from "../injectableList";
import { UserRepository } from "../business/repository/User";
import { reject } from "lodash";
import { todoStore } from "./TodoKeyValueStore";

@injectable()
export class InmemoryTodoRepository implements TodoRepository {
  private keyValue: Map<TodoID, Todo>;

  public constructor(
    @inject(injectableList.UserRepository)
    private userRepository: UserRepository
  ) {
    this.keyValue = todoStore;
  }

  public async createTodo(createTodoInfo: CreateTodoInfo): Promise<TodoID> {
    const id: TodoID = uuid();
    const todo: Todo = { ...createTodoInfo, id };

    this.keyValue.set(id, todo);

    return id;
  }

  public async getTodo(todoId: TodoID): Promise<Todo> {
    const todo = this.keyValue.get(todoId);
    if (!todo) {
      throw makeTodoNotFoundError();
    }

    return todo;
  }

  public async assignUserToTodo(todoId: TodoID, userId: UserID): Promise<void> {
    const todo = this.keyValue.get(todoId);
    if (!todo) {
      throw makeTodoNotFoundError();
    }

    if (!todo.assigned) {
      todo.assigned = [];
    }

    for (const assignee of todo.assigned) {
      if (assignee.id === userId) {
        throw makeUserAlreadyAssignedError(userId);
      }
    }

    todo.assigned.push(await this.userRepository.getUser(userId));
  }

  public async removeAssignedUserFromTodo(todoId: TodoID, userId: UserID): Promise<void> {
    const todo = this.keyValue.get(todoId);
    if (!todo) {
      throw makeTodoNotFoundError();
    }

    if (!todo.assigned) {
      throw makeTodoHasNotAssignedAnyUser();
    }

    todo.assigned = reject(todo.assigned, { id: userId });
  }

  public async changeDescriptionOfTodo(todoId: TodoID, description: string): Promise<void> {
    const todo = this.keyValue.get(todoId);
    if (!todo) {
      throw makeTodoNotFoundError();
    }

    todo.description = description;
  }

  public async changeTodoRole(todoId: TodoID, role: string): Promise<void> {
    const todo = this.keyValue.get(todoId);
    if (!todo) {
      throw makeTodoNotFoundError();
    }

    todo.role = role;
  }

  public async changeDueDateOfTodo(todoId: TodoID, dueDate: Date): Promise<void> {
    const todo = this.keyValue.get(todoId);
    if (!todo) {
      throw makeTodoNotFoundError();
    }

    todo.dueDate = dueDate;
  }

  public async removeTodo(todoId: TodoID): Promise<void> {
    if (this.keyValue.has(todoId)) {
      this.keyValue.delete(todoId);
    } else {
      throw makeTodoNotFoundError();
    }
  }
}
