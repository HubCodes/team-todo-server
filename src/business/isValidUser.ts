import { injectable, inject } from "inversify";
import injectableList from "injectableList";
import { UserRepository } from "./repository/User";
import { UserID } from "entity/User";

@injectable()
export class IsValidUserBusiness {
  public constructor(
    @inject(injectableList.UserRepository) private userRepository: UserRepository
  ) {}

  public async removeUser(id: UserID, pw: string): Promise<boolean> {
    return await this.userRepository.isValidUser(id, pw);
  }
}
