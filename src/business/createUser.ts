import { injectable, inject } from "inversify";
import injectableList from "injectableList";
import { UserRepository, CreateUserInfo } from "./repository/User";

@injectable()
export class CreateUserBusiness {
  public constructor(
    @inject(injectableList.UserRepository) private userRepository: UserRepository
  ) {}

  public async createUser(createUserInfo: CreateUserInfo): Promise<void> {
    await this.userRepository.createUser(createUserInfo);
  }
}
