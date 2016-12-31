function isCollection(item) {
  return item instanceof Object || item instanceof Array;
}

export default function toCamel(collection) {
  let ret;

  if (collection instanceof Array) {
    ret = [];
    collection.forEach(item => ret.push(isCollection(item) ? toCamel(item) : item));
  } else {
    ret = {};
    Object.keys(collection).forEach((key) => {
      const cameledKey = (key.charAt(0).toLowerCase() + key.slice(1) || key).toString();
      const value = collection[key];
      ret[cameledKey] = isCollection(value) ? toCamel(value) : value;
    });
  }
  return ret;
}
