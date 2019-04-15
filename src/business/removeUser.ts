import { injectable, inject } from "inversify";
import injectableList from "injectableList";
import { UserRepository } from "./repository/User";
import { UserID } from "entity/User";

@injectable()
export class RemoveUserBusiness {
  public constructor(
    @inject(injectableList.UserRepository) private userRepository: UserRepository
  ) {}

  public async removeUser(id: UserID): Promise<void> {
    await this.userRepository.removeUser(id);
  }
}
