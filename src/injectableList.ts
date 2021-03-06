const injectableList = {
  Application: Symbol.for("Application"),
  TodoRepository: Symbol.for("TodoRepository"),
  UserRepository: Symbol.for("UserRepository"),
  AssignUserToTodoBusiness: Symbol.for("AssignUserToTodoBusiness"),
  ChangeDescriptionOfTodoBusiness: Symbol.for("ChangeDescriptionOfTodoBusiness"),
  ChangeIdBusiness: Symbol.for("ChangeIdBusiness"),
  ChangePwBusiness: Symbol.for("ChangePwBusiness"),
  ChangeTodoRoleBusiness: Symbol.for("ChangeTodoRoleBusiness"),
  CreateTodoBusiness: Symbol.for("CreateTodoBusiness"),
  CreateUserBusiness: Symbol.for("CreateUserBusiness"),
  GetTodoBusiness: Symbol.for("GetTodoBusiness"),
  GetTodoListBusiness: Symbol.for("GetTodoListBusiness"),
  GetUserBusiness: Symbol.for("GetUserBusiness"),
  IsValidUserBusiness: Symbol.for("IsValidUserBusiness"),
  RemoveAssignedUserFromTodoBusiness: Symbol.for("RemoveAssignedUserFromTodoBusiness"),
  RemoveTodoBusiness: Symbol.for("RemoveTodoBusiness"),
  RemoveUserBusiness: Symbol.for("RemoveUserBusiness"),
  AuthenticationRouter: Symbol.for("AuthenticationRouter"),
  LoginHandler: Symbol.for("LoginHandler"),
  JoinHandler: Symbol.for("JoinHandler"),
  TodoRouter: Symbol.for("TodoRouter"),
  AssignUserToTodoHandler: Symbol.for("AssignUserToTodoHandler"),
  ChangeDescriptionOfTodoHandler: Symbol.for("ChangeDescriptionOfTodoHandler"),
  CreateTodoHandler: Symbol.for("CreateTodoHandler"),
  GetTodoHandler: Symbol.for("GetTodoHandler"),
  GetTodoListHandler: Symbol.for("GetTodoListHandler"),
  RemoveAssignedUserFromTodoHandler: Symbol.for("RemoveAssignedUserFromTodoHandler"),
  SetTodoRoleHandler: Symbol.for("SetTodoRoleHandler")
};

export default injectableList;
