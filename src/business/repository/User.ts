import { User, UserID } from "entity/User";

export type CreateUserInfo = User;

export interface UserRepository {
  createUser(createUserInfo: CreateUserInfo): Promise<void>;
  getUser(id: UserID): Promise<User>;
  changeId(oldId: UserID, newId: UserID): Promise<void>;
  changePw(id: UserID, newPw: string): Promise<void>;
  removeUser(id: UserID): Promise<void>;
  isValidUser(id: UserID, pw: string): Promise<boolean>;
}
