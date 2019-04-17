import { UserID, User } from "../entity/User";
import { PersistentMap } from "../utility/PersistentMap";

export const todoStore: PersistentMap<UserID, User> = new PersistentMap("./Todo.json");
