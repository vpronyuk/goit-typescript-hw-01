function merge<T extends object, W extends object>(objA: T, objB: W) {
  return Object.assign(objA, objB);
}
