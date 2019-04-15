const injectableList = {
  TodoRepository: Symbol.for("TodoRepository"),
  UserRepository: Symbol.for("UserRepository")
};

export default injectableList;
