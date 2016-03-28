
export function * iterate(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      yield { key, val: obj[key] };
    }
  }
}

export function values(obj) {
  const newArray = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newArray.push(key);
    }
  }
  return newArray;
}

export function keys(obj) {
  const newArray = [];
  for (const { key } of iterate(obj)) {
    newArray.push(key);
  }
  return newArray;
}

export function map(obj, cb) {
  const newObject = {};
  for (const { entry } of iterate(obj)) {
    if (cb) {
      const { key, val } = cb(entry);
      newObject[key] = val;
    }
  }
  return newObject;
}

export function clone(obj) {
  return Object.assign({}, obj);
}

export function isObject(obj) {
  return typeof obj === 'object' || obj instanceof Object || typeof obj === 'function';
}
