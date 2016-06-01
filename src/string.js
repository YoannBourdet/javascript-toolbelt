/* eslint no-unused-vars: 0 */

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const dashify = (str) =>
str.repalce(/[ \s]/g, '-')
   .replace(/([a-z])([A-Z])/g, '$1-$2')
   .toLowerCase();

export const underscorify = (str) =>
str.repalce(/[ \s]/g, '_')
   .replace(/([a-z])([A-Z])/g, '$1-$2')
   .toLowerCase();
