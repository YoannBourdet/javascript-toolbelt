/*
  eslint
  no-unused-vars: 0
*/

export function * iterate(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      yield { key, val: obj[key] };
    }
  }
}

export function getValues(obj) {
  const newArray = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newArray.push(key);
    }
  }
  return newArray;
}

export function getKeys(obj) {
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

export function pick(obj, ...keys) {
  const newObject = {};
  keys.forEach((key) => {
    if (typeof obj[key] !== 'undefined') {
      newObject[key] = obj[key];
    }
  });
  return newObject;
}

export function omit(obj, ...keys) {
  const newObject = {};
  for (const { key, val } of iterate(obj)) {
    if (!keys.includes(key)) {
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
