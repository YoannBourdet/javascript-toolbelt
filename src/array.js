/* eslint no-unused-vars: 0 */

export const getFirst = (arr, n = 1) => {
  const newArr = n < 0 ? arr.slice(0, n) : arr.slice(0, Math.abs(n));
  return newArr;
};

export const getLast = (arr, n = 1) => {
  const newArr = n < 0 ? arr.slice(+`-${n}`) : arr.slice(0, n);
  return newArr;
};

export const ignoreLast = (arr, n = 1) => {
  const newArr = n === 0 ? arr : arr.slice(0, +`-${Math.abs(n)}`);
  return newArr;
};

export const ignoreFirst = (arr, n = 1) => {
  const newArr = n === 0 ? arr : arr.slice(Math.abs(n));
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

/*
 * transform array to string
 * separate word by ',' and the two last by '&',
 * you can overide this default behavoir
 */
export const sentencify = (arr, {
  join = ' , ',
  last = ' & ',
} = {}) => (
  arr.reduce((agg, x, i) => {
    switch (i) {
      case 0:
        return `${agg}${x}`;
      case arr.length - 1:
        return `${agg}${last}${x}`;
      default:
        return `${agg}${join}${x}`;
    }
  }, '')
);
