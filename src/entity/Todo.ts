import { User } from "./User";

export type TodoID = string;

export interface Todo {
  id: TodoID;
  role?: string;
  description?: string;
  assigned?: User[];
  dueDate?: Date;
}
