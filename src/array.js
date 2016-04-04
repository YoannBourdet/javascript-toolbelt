/*
  eslint
  no-unused-vars: 0
*/

export const getFirst = (arr, n = 1) => {
  const newArr = n < 0 ? arr.slice(0, n) : arr.slice(0, Math.abs(n));
  return newArr;
};

export const getLast = (arr, n = 1) => {
  const newArr = n < 0 ? arr.slice(+`-${n}`) : arr.slice(0, n);
  return newArr;
};

export const ignoreLast = (arr, n = 1) => {
  const newArr = n < 0 ? arr.slice(0, +`-${n}`) : arr.slice(0, n);
  return newArr;
};

export const ignoreFirst = (arr, n = 1) => {
  const newArr = n < 0 ? arr.slice(n) : arr.slice(Math.abs(n));
  return newArr;
};

export const compact = (arr) => {
  const newArr = [];
  arr.forEach((el) => {
    if (el) {
      newArr.push(el);
    }
  });
  return newArr;
};

export const removeDoubleKeys = (arr) => {
  const newArr = [];
  arr.forEach((el) => {
    if (!newArr.includes(el)) {
      newArr.push(el);
    }
  });
  return newArr;
};
