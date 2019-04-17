import { UserID, User } from "../entity/User";
import { PersistentMap } from "../utility/PersistentMap";

export const userStore: PersistentMap<UserID, User> = new PersistentMap("./User.json");
