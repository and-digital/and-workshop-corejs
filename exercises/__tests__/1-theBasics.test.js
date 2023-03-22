const assert = require("../1-theBasics");

describe(".toBeTruthy", () => {
  test("Will show true as equal to true", () => {
    expect(assert(true).toBeTruthy()).toEqual(true);
    expect(assert("").toBeTruthy()).not.toEqual(true);
    expect(assert("populated").toBeTruthy()).toEqual(true);
    expect(assert({}).toBeTruthy()).toEqual(true);
    expect(assert([]).toBeTruthy()).toEqual(true);
  });
});

describe(".toBe", () => {
  test("Works for boolean", () => {
    expect(assert(true).toBe(true)).toEqual(true);
    expect(assert(false).toBe(false)).toEqual(true);
  });
  test("Works for strings", () => {
    const stringReference = "testing";
    expect(assert(stringReference).toBe(stringReference)).toBe(true);
  });
  test("Ensures that two references in memory are not the same", () => {
    const oneObject = {};
    const twoObject = {};
    expect(assert(oneObject).toBe(twoObject)).toBe(false);
  });
  test("Ensures the same reference in memory is true", () => {
    const oneObject = {};
    expect(assert(oneObject).toBe(oneObject)).toBe(true);
  });
});

describe(".toEqual", () => {
  test("Different objects with the same contents are equal", () => {
    const objectOne = { adam: "Hello" };
    const objectTwo = { adam: "Hello" };
    expect(assert(objectOne).toEqual(objectTwo)).toEqual(true);
  });
  test("Different objects with different keys are not equal", () => {
    const objectOne = { adam: "Hello" };
    const objectTwo = { adam: "Hello", age: 21 };
    expect(assert(objectOne).toEqual(objectTwo)).toEqual(false);
  });
  test("Different objects with same keys but different values are not equal", () => {
    const objectOne = { adam: "Hello" };
    const objectTwo = { adam: "Hi" };
    expect(assert(objectOne).toEqual(objectTwo)).toEqual(false);
  });
});

describe(".toThrow", () => {
  test("Will not show true as equal to true", () => {
    expect(
      assert(() => {
        throw new Error();
      }).toThrow()
    ).toEqual(true);
    expect(assert(() => {}).toThrow()).toEqual(false);
  });
});
