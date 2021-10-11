// Your first exercise is to build an assert library with the below methods.
// You cannot import any library - build it all yourself!
// Run these tests using the command `jest --watch exercises/1-theBasics.test`

// ## Implement .toBeTruthy
// https://jestjs.io/docs/en/expect#tobetruthy

// ## Implement .toBe
// https://jestjs.io/docs/en/expect#tobevalue

// ## Implement .toEqual
// https://jestjs.io/docs/en/expect#toequalvalue

// ## Implement .toThrow
// https://jestjs.io/docs/en/expect#tothrowerror

// fill this in with your own implementation of each method
const assert = expectedValue => (
  {
    toBeTruthy: undefined, 
    toBe: undefined,
    toEqual: undefined,
    toThrow: undefined,
  }
)

describe('.toBeTruthy', () => {
  test('Will show true as equal to true', () => {
    expect(assert(true).toBeTruthy()).toEqual(true);

    // An empty string is false
    expect(assert('').toBeTruthy()).not.toEqual(true);

    // An string is true
    expect(assert('populated').toBeTruthy()).toEqual(true);

    // An empty object is truthy
    expect(assert({}).toBeTruthy()).toEqual(true);

    // An empty array is truthy
    expect(assert([]).toBeTruthy()).toEqual(true);
  });
});

describe('.toBe', () => {
  test('Works for boolean', () => {
    expect(assert(true).toBe(true)).toEqual(true);
    expect(assert(false).toBe(false)).toEqual(true);
  });
  test('Works for strings', () => {
    const stringReference = 'testing';
    expect(assert(stringReference).toBe(stringReference)).toBe(true);
  });
  test('Ensures that two references in memory are not the same', () => {
    const oneObject = {};
    const twoObject = {};
    expect(assert(oneObject).toBe(twoObject)).toBe(false);
  });
  test('Ensures the same reference in memory is true', () => {
    const oneObject = {};
    expect(assert(oneObject).toBe(oneObject)).toBe(true);
  });
});

describe('.toEqual', () => {
  test('Different objects with the same contents are equal', () => {
    const objectOne = { adam: 'Hello' };
    const objectTwo = { adam: 'Hello' };
    expect(assert(objectOne).toEqual(objectTwo)).toEqual(true);
  });
  test('Different objects with different keys are not equal', () => {
    const objectOne = { adam: 'Hello' };
    const objectTwo = { adam: 'Hello', age: 21 };
    expect(assert(objectOne).toEqual(objectTwo)).toEqual(false);
  });
  test('Different objects with same keys but different values are not equal', () => {
    const objectOne = { adam: 'Hello' };
    const objectTwo = { adam: 'Hi' };
    expect(assert(objectOne).toEqual(objectTwo)).toEqual(false);
  });
});

describe('.toThrow', () => {
  test('Will not show true as equal to true', () => {
    expect(
      assert(() => {
        throw new Error();
      }).toThrow()
    ).toEqual(true);
    expect(assert(() => {}).toThrow()).toEqual(false);
  });
});
