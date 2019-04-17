const injectableList = {
  Application: Symbol.for("Application"),
  TodoRepository: Symbol.for("TodoRepository"),
  UserRepository: Symbol.for("UserRepository"),
  AssignUserToTodoBusiness: Symbol.for("AssignUserToTodoBusiness"),
  ChangeDescriptionOfTodoBusiness: Symbol.for("ChangeDescriptionOfTodoBusiness"),
  ChangeIdBusiness: Symbol.for("ChangeIdBusiness"),
  ChangePwBusiness: Symbol.for("ChangePwBusiness"),
  CreateTodoBusiness: Symbol.for("CreateTodoBusiness"),
  CreateUserBusiness: Symbol.for("CreateUserBusiness"),
  GetTodoBusiness: Symbol.for("GetTodoBusiness"),
  GetUserBusiness: Symbol.for("GetUserBusiness"),
  IsValidUserBusiness: Symbol.for("IsValidUserBusiness"),
  RemoveAssignedUserFromTodoBusiness: Symbol.for("RemoveAssignedUserFromTodoBusiness"),
  RemoveTodoBusiness: Symbol.for("RemoveTodoBusiness"),
  RemoveUserBusiness: Symbol.for("RemoveUserBusiness"),
  AuthenticationRouter: Symbol.for("AuthenticationRouter"),
  LoginHandler: Symbol.for("LoginHandler"),
  JoinHandler: Symbol.for("JoinHandler")
};

export default injectableList;
