import { injectable, inject } from "inversify";
import injectableList from "../../injectableList";
import { CreateTodoBusiness } from "../../business/createTodo";
import { Request, Response } from "express";
import { CreateTodoInfo } from "../../business/repository/Todo";
import { TodoID } from "../../entity/Todo";
import { Omit } from "../../utility/Omit";

type CreateTodoRequest = Omit<CreateTodoInfo, "dueDate"> & { dueDate?: string };

interface CreateTodoSuccess {
  todoId: TodoID;
}

function createTodoSuccess(res: Response, todoId: TodoID) {
  res.status(201).json({ todoId } as CreateTodoSuccess);
}

function createTodoFailure(res: Response) {
  res.status(400);
}

@injectable()
export class CreateTodoHandler {
  public constructor(
    @inject(injectableList.CreateTodoBusiness) private createTodo: CreateTodoBusiness
  ) {}

  public async handler(req: Request, res: Response) {
    const createTodoRequest: CreateTodoRequest = req.body;
    let dueDate: Date | undefined;

    if (createTodoRequest.dueDate) {
      const { dueDate: dueDateString } = createTodoRequest;
      dueDate = new Date(dueDateString);
    }

    const createTodoInfo: CreateTodoInfo = {
      role: createTodoRequest.role,
      description: createTodoRequest.description,
      assigned: createTodoRequest.assigned,
      dueDate: dueDate
    };

    try {
      const todoId = await this.createTodo.createTodo(createTodoInfo);
      createTodoSuccess(res, todoId);
    } catch (e) {
      createTodoFailure(res);
    }
  }
}
