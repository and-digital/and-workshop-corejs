// Your first exercise is to build an assert library with the below methods.
// You cannot import any library - build it all yourself!

// ## Implement .toBeTruthy
// https://jestjs.io/docs/en/expect#tobetruthy

// ## Implement .toBe
// https://jestjs.io/docs/en/expect#tobevalue

// ## Implement .toEqual
// https://jestjs.io/docs/en/expect#toequalvalue

// ## Implement .toThrow
// https://jestjs.io/docs/en/expect#tothrowerror

// This is your assert library. Add your own implementation for each method
module.exports = function assert(actualValue) {
  return {
    toBeTruthy: () => {
      return false;
    },
    toBe: (expectedValue) => {
      return false;
    },
    toEqual: (expectedValue) => {
      return false;
    },
    toThrow: () => {
      return false;
    },
  };
};
