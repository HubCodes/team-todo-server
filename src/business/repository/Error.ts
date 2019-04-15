export function makeUserNotFoundError(userId: string) {
  return new Error(`User ${userId} not found.`);
}

export function makeTodoNotFoundError() {
  return new Error("Todo not found.");
}

export function makeUserAlreadyAssignedError(userId: string) {
  return new Error(`User ${userId} has already assigned.`);
}

export function makeTodoHasNotAssignedAnyUser() {
  return new Error("Todo hasn't assigned any user.");
}
