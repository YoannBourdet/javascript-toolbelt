/* eslint no-unused-vars: 0 */

export const iterate = function * iterate(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      yield { key, val: obj[key] };
    }
  }
};

export const getValues = (obj) => {
  const newArray = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newArray.push(key);
    }
  }
  return newArray;
};

export const getKeys = (obj) => {
  const newArray = [];
  for (const { key } of iterate(obj)) {
    newArray.push(key);
  }
  return newArray;
};

export const filter = (obj, cb) => {
  const newObj = {};
  for (const { key, val } of iterate(obj)) {
    if (cb({ key, val })) {
      newObj[key] = val;
    }
  }
  return newObj;
};

export const map = (obj, cb) => {
  const newObject = {};
  for (const entry of iterate(obj)) {
    if (cb) {
      const { key, val } = cb(entry);
      newObject[key] = val;
    }
  }
  return newObject;
};

export const invert = (obj) => {
  const newObject = {};
  for (const { key, val } of iterate(obj)) {
    newObject[val] = key;
  }
  return newObject;
};

export const pick = (obj, ...keys) => {
  const newObject = {};
  keys.forEach((key) => {
    if (typeof obj[key] !== 'undefined') {
      newObject[key] = obj[key];
    }
  });
  return newObject;
};

export const omit = (obj, ...keys) => {
  const newObject = {};
  for (const { key, val } of iterate(obj)) {
    if (!keys.includes(key)) {
      newObject[key] = val;
    }
  }
  return newObject;
};

export const hasKey = (obj, key) => {
  let bool = false;
  for (const k in obj) {
    if (k === key) {
      bool = true;
    }
  }
  return bool;
};

export const hasProperty = (obj, property) => {
  let bool = false;
  for (const val of obj) {
    if (val === property) {
      bool = true;
    }
  }
  return bool;
};

export const isMatch = (obj, properties) => {
  let bool = false;
  for (const { key, val } of iterate(obj)) {
    if (properties[key] === val) {
      bool = true;
    }
  }
  return bool;
};

export const clone = (obj) => Object.assign({}, obj);

export const extend = (destination, source) =>
Object.assign({}, destination, source);

export const extendOwn = (destination, source) => {
  const newObject = {};
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      newObject[key] = source[key];
    }
  }
  return Object.assign({}, destination, newObject);
};

export const fillObject = (defaultObj, obj) =>
Object.assign({}, obj, defaultObj);

export const isObject = (obj) =>
typeof obj === 'object' || obj instanceof Object || typeof obj === 'function';
