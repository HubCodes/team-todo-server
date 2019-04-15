import { injectable, inject } from "inversify";
import injectableList from "injectableList";
import { UserRepository } from "./repository/User";
import { UserID, User } from "entity/User";

@injectable()
export class GetUserBusiness {
  public constructor(
    @inject(injectableList.UserRepository) private userRepository: UserRepository
  ) {}

  public async getUser(id: UserID): Promise<User> {
    return await this.userRepository.getUser(id);
  }
}
