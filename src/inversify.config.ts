import injectableList from "./injectableList";
import { Container } from "inversify";
import { UserRepository } from "./business/repository/User";
import { InmemoryUserRepository } from "./repository/User";
import { TodoRepository } from "./business/repository/Todo";
import { InmemoryTodoRepository } from "./repository/Todo";
import { AssignUserToTodoBusiness } from "./business/assignUserToTodo";
import { ChangeDescriptionOfTodoBusiness } from "./business/changeDescriptionOfTodo";
import { ChangeIdBusiness } from "./business/changeId";
import { ChangePwBusiness } from "./business/changePw";
import { CreateTodoBusiness } from "./business/createTodo";
import { CreateUserBusiness } from "./business/createUser";
import { GetTodoBusiness } from "./business/getTodo";
import { GetUserBusiness } from "./business/getUser";
import { IsValidUserBusiness } from "./business/isValidUser";
import { RemoveAssignedUserFromTodoBusiness } from "./business/removeAssignedUserFromTodo";
import { RemoveTodoBusiness } from "./business/removeTodo";
import { RemoveUserBusiness } from "./business/removeUser";
import { LoginHandler } from "./api/authentication/login";
import { JoinHandler } from "./api/authentication/join";
import { AuthenticationRouter } from "./api/authentication";
import { App } from "./api";

const container = new Container();

container.bind<UserRepository>(injectableList.UserRepository).to(InmemoryUserRepository);
container.bind<TodoRepository>(injectableList.TodoRepository).to(InmemoryTodoRepository);
container
  .bind<AssignUserToTodoBusiness>(injectableList.AssignUserToTodoBusiness)
  .to(AssignUserToTodoBusiness);
container
  .bind<ChangeDescriptionOfTodoBusiness>(injectableList.ChangeDescriptionOfTodoBusiness)
  .to(ChangeDescriptionOfTodoBusiness);
container.bind<ChangeIdBusiness>(injectableList.ChangeIdBusiness).to(ChangeIdBusiness);
container.bind<ChangePwBusiness>(injectableList.ChangePwBusiness).to(ChangePwBusiness);
container.bind<CreateTodoBusiness>(injectableList.CreateTodoBusiness).to(CreateTodoBusiness);
container.bind<CreateUserBusiness>(injectableList.CreateUserBusiness).to(CreateUserBusiness);
container.bind<GetTodoBusiness>(injectableList.GetTodoBusiness).to(GetTodoBusiness);
container.bind<GetUserBusiness>(injectableList.GetUserBusiness).to(GetUserBusiness);
container.bind<IsValidUserBusiness>(injectableList.IsValidUserBusiness).to(IsValidUserBusiness);
container
  .bind<RemoveAssignedUserFromTodoBusiness>(injectableList.RemoveAssignedUserFromTodoBusiness)
  .to(RemoveAssignedUserFromTodoBusiness);
container.bind<RemoveTodoBusiness>(injectableList.RemoveTodoBusiness).to(RemoveTodoBusiness);
container.bind<RemoveUserBusiness>(injectableList.RemoveUserBusiness).to(RemoveUserBusiness);
container.bind<AuthenticationRouter>(injectableList.AuthenticationRouter).to(AuthenticationRouter);
container.bind<LoginHandler>(injectableList.LoginHandler).to(LoginHandler);
container.bind<JoinHandler>(injectableList.JoinHandler).to(JoinHandler);
container.bind<App>(injectableList.Application).to(App);

export { container };
