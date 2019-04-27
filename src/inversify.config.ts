import i from "./injectableList";
import { Container } from "inversify";
import { UserRepository } from "./business/repository/User";
import { InmemoryUserRepository } from "./repository/User";
import { TodoRepository } from "./business/repository/Todo";
import { InmemoryTodoRepository } from "./repository/Todo";
import { AssignUserToTodoBusiness } from "./business/assignUserToTodo";
import { ChangeDescriptionOfTodoBusiness } from "./business/changeDescriptionOfTodo";
import { ChangeIdBusiness } from "./business/changeId";
import { ChangePwBusiness } from "./business/changePw";
import { ChangeTodoRoleBusiness } from "./business/changeTodoRole";
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
import { GetTodoListBusiness } from "./business/getTodoList";
import { AssignUserToTodoHandler } from "./api/todo/assignUserToTodo";
import { ChangeDescriptionOfTodoHandler } from "./api/todo/changeDescriptionOfTodo";
import { CreateTodoHandler } from "./api/todo/createTodo";
import { GetTodoHandler } from "./api/todo/getTodo";
import { GetTodoListHandler } from "./api/todo/getTodoList";
import { SetTodoRoleHandler } from "./api/todo/setTodoRole";
import { TodoRouter } from "./api/todo";
import { RemoveAssignedUserFromTodoHandler } from "./api/todo/removeAssignedUserFromTodo";

const c = new Container();

c.bind<UserRepository>(i.UserRepository).to(InmemoryUserRepository);
c.bind<TodoRepository>(i.TodoRepository).to(InmemoryTodoRepository);
c.bind<AssignUserToTodoBusiness>(i.AssignUserToTodoBusiness).to(AssignUserToTodoBusiness);
c.bind<ChangeDescriptionOfTodoBusiness>(i.ChangeDescriptionOfTodoBusiness).to(
  ChangeDescriptionOfTodoBusiness
);
c.bind<ChangeIdBusiness>(i.ChangeIdBusiness).to(ChangeIdBusiness);
c.bind<ChangePwBusiness>(i.ChangePwBusiness).to(ChangePwBusiness);
c.bind<ChangeTodoRoleBusiness>(i.ChangeTodoRoleBusiness).to(ChangeTodoRoleBusiness);
c.bind<CreateTodoBusiness>(i.CreateTodoBusiness).to(CreateTodoBusiness);
c.bind<CreateUserBusiness>(i.CreateUserBusiness).to(CreateUserBusiness);
c.bind<GetTodoBusiness>(i.GetTodoBusiness).to(GetTodoBusiness);
c.bind<GetTodoListBusiness>(i.GetTodoListBusiness).to(GetTodoListBusiness);
c.bind<GetUserBusiness>(i.GetUserBusiness).to(GetUserBusiness);
c.bind<IsValidUserBusiness>(i.IsValidUserBusiness).to(IsValidUserBusiness);
c.bind<RemoveAssignedUserFromTodoBusiness>(i.RemoveAssignedUserFromTodoBusiness).to(
  RemoveAssignedUserFromTodoBusiness
);
c.bind<RemoveTodoBusiness>(i.RemoveTodoBusiness).to(RemoveTodoBusiness);
c.bind<RemoveUserBusiness>(i.RemoveUserBusiness).to(RemoveUserBusiness);
c.bind<AuthenticationRouter>(i.AuthenticationRouter).to(AuthenticationRouter);
c.bind<LoginHandler>(i.LoginHandler).to(LoginHandler);
c.bind<JoinHandler>(i.JoinHandler).to(JoinHandler);
c.bind<TodoRouter>(i.TodoRouter).to(TodoRouter);
c.bind<AssignUserToTodoHandler>(i.AssignUserToTodoHandler).to(AssignUserToTodoHandler);
c.bind<ChangeDescriptionOfTodoHandler>(i.ChangeDescriptionOfTodoHandler).to(
  ChangeDescriptionOfTodoHandler
);
c.bind<CreateTodoHandler>(i.CreateTodoHandler).to(CreateTodoHandler);
c.bind<GetTodoHandler>(i.GetTodoHandler).to(GetTodoHandler);
c.bind<GetTodoListHandler>(i.GetTodoListHandler).to(GetTodoListHandler);
c.bind<RemoveAssignedUserFromTodoHandler>(i.RemoveAssignedUserFromTodoHandler).to(
  RemoveAssignedUserFromTodoHandler
);
c.bind<SetTodoRoleHandler>(i.SetTodoRoleHandler).to(SetTodoRoleHandler);
c.bind<App>(i.Application).to(App);

export { c as container };
