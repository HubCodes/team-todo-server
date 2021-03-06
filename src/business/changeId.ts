import { injectable, inject } from "inversify";
import injectableList from "../injectableList";
import { UserRepository } from "./repository/User";
import { UserID } from "../entity/User";

@injectable()
export class ChangeIdBusiness {
  public constructor(
    @inject(injectableList.UserRepository) private userRepository: UserRepository
  ) {}

  public async changeId(oldId: UserID, newId: UserID): Promise<void> {
    await this.userRepository.changeId(oldId, newId);
  }
}
