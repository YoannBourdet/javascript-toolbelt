'use strict';

import * as arr from '../src/array';

const arrayToTest = [1, 2, 3, 4];

describe('getFirst', () => {
  it('the result is an array', () => {
    expect(arr.getFirst([])).toBeInstanceOf(Array);
  });

  it('the result is an array with the first item', () => {
    expect(arr.getFirst(arrayToTest)).toEqual([1]);
  });

  it('the result is an array with the two first items', () => {
    expect(arr.getFirst(arrayToTest, 2)).toEqual([1, 2]);
  });
});

describe('getLast', () => {
  it('the result is an array', () => {
    expect(arr.getLast([])).toBeInstanceOf(Array);
  });

  it('the result is an array with the last item', () => {
    expect(arr.getLast(arrayToTest)).toEqual([1]);
  });

  it('the result is an array with the two last items', () => {
    expect(arr.getLast(arrayToTest, 2)).toEqual([1, 2]);
  });
});

describe('ignoreLast', () => {
  it('the result is an array', () => {
    expect(arr.ignoreLast([])).toBeInstanceOf(Array);
  });

  it('the result is an copy of original array with limit equal to 0', () => {
    expect(arr.ignoreLast(arrayToTest, 0)).toEqual([1, 2, 3, 4]);
  });

  it('the result is an array without the last item, with negative limit =-1', () => {
    expect(arr.ignoreLast(arrayToTest, -1)).toEqual([1, 2, 3]);
  });

  it('the result is an array without the last item, with limit = 1', () => {
    expect(arr.ignoreLast(arrayToTest)).toEqual([1, 2, 3]);
  });

  it('the result is an array without the two last items, with negative limit = 2', () => {
    expect(arr.ignoreLast(arrayToTest, 2)).toEqual([1, 2]);
  });
});

describe('ignoreFirst', () => {
  it('the result is an array', () => {
    expect(arr.ignoreFirst([])).toBeInstanceOf(Array);
  });

  it('the result is an copy of original array with limit equal to 0', () => {
    expect(arr.ignoreFirst(arrayToTest, 0)).toEqual([1, 2, 3, 4]);
  });

  it('the result is an array without the last item, with negative limit =-1', () => {
    expect(arr.ignoreFirst(arrayToTest, -1)).toEqual([2, 3, 4]);
  });

  it('the result is an array without the last item, with limit = 1', () => {
    expect(arr.ignoreFirst(arrayToTest)).toEqual([2, 3, 4]);
  });

  it('the result is an array without the two last items, with negative limit = 2', () => {
    expect(arr.ignoreFirst(arrayToTest, 2)).toEqual([3, 4]);
  });
});

describe('compact', () => {
  it('the result is an array', () => {
    expect(arr.compact([])).toBeInstanceOf(Array);
  });

  it('the result is an array without undefined or null keys', () => {
    expect(arr.compact([1, null, 2, 3, undefined, 4, ''])).toEqual([1, 2, 3, 4]);
  });
});

describe('removeDoubleKeys', () => {
  it('the result is an array', () => {
    expect(arr.removeDoubleKeys([])).toBeInstanceOf(Array);
  });

  it('the result is an array without same keys', () => {
    expect(arr.removeDoubleKeys([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
  });
});
