import { injectable, inject } from "inversify";
import injectableList from "../injectableList";
import { UserRepository } from "./repository/User";
import { UserID } from "../entity/User";

@injectable()
export class ChangePwBusiness {
  public constructor(
    @inject(injectableList.UserRepository) private userRepository: UserRepository
  ) {}

  public async changePw(id: UserID, newPw: string): Promise<void> {
    await this.userRepository.changePw(id, newPw);
  }
}
