import { injectable } from "inversify";
import { UserRepository, CreateUserInfo } from "../business/repository/User";
import { User, UserID } from "../entity/User";
import { makeUserNotFoundError } from "../business/repository/Error";
import { userStore } from "./UserKeyValueStore";

@injectable()
export class InmemoryUserRepository implements UserRepository {
  private keyValue: Map<UserID, User>;

  public constructor() {
    this.keyValue = userStore;
  }

  public async createUser(createUserInfo: CreateUserInfo): Promise<void> {
    const { id } = createUserInfo;
    this.keyValue.set(id, createUserInfo as User);
  }

  public async getUser(id: UserID): Promise<User> {
    const user = this.keyValue.get(id);
    if (!user) {
      throw makeUserNotFoundError(id);
    }

    return user;
  }

  public async changeId(oldId: UserID, newId: UserID): Promise<void> {
    const user = this.keyValue.get(oldId);
    if (!user) {
      throw makeUserNotFoundError(oldId);
    }

    user.id = newId;
    this.keyValue.delete(oldId);
    this.keyValue.set(newId, user);
  }

  public async changePw(id: UserID, newPw: string): Promise<void> {
    const user = this.keyValue.get(id);
    if (!user) {
      throw makeUserNotFoundError(id);
    }

    user.pw = newPw;
    this.keyValue.set(id, user);
  }

  public async removeUser(id: UserID): Promise<void> {
    if (this.keyValue.has(id)) {
      this.keyValue.delete(id);
    }
  }

  public async isValidUser(id: UserID, pw: string): Promise<boolean> {
    const user = this.keyValue.get(id);
    if (!user) {
      throw makeUserNotFoundError(id);
    }

    return user.pw === pw;
  }
}
