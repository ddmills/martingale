export default class ArrayUtilities {
  static hasNestedProperty(object, ...keys) {
    if (keys.length === 0) return true;

    const key = keys.shift();

    if (key in object) {
      return ArrayUtilities.hasNestedProperty(object[key], ...keys);
    }

    return false;
  }
}
