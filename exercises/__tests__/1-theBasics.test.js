const assert = require("../1-theBasics");

describe(".toBeTruthy", () => {
  test("Will show true as equal to true", () => {
    expect(assert(true).toBeTruthy()).toEqual(true);
    expect(assert("populated").toBeTruthy()).toEqual(true);
    expect(assert({}).toBeTruthy()).toEqual(true);
    expect(assert([]).toBeTruthy()).toEqual(true);
  });

  test("Will show false as not equal to true", () => {
    expect(assert(null).toBeTruthy()).toEqual(false);
    expect(assert(undefined).toBeTruthy()).toEqual(false);
    expect(assert(false).toBeTruthy()).toEqual(false);
    expect(assert(NaN).toBeTruthy()).toEqual(false);
    expect(assert(0).toBeTruthy()).toEqual(false);
    expect(assert(-0).toBeTruthy()).toEqual(false);
    expect(assert(0n).toBeTruthy()).toEqual(false);
    expect(assert("").toBeTruthy()).toEqual(false);
  });
});

describe(".toBeUndefined", () => {
  test("Will show undefined as undefined", () => {
    expect(assert(undefined).toBeUndefined()).toEqual(true);
    expect(assert(void 0).toBeUndefined()).toEqual(true);
    expect(assert().toBeUndefined()).toEqual(true);
  });

  test("Will not show defined values as undefined", () => {
    expect(assert("").toBeUndefined()).toEqual(false);
    expect(assert(0).toBeUndefined()).toEqual(false);
    expect(assert(-1).toBeUndefined()).toEqual(false);
    expect(assert(false).toBeUndefined()).toEqual(false);
    expect(assert(null).toBeUndefined()).toEqual(false);
  });
});

describe(".toBeArray", () => {
  test("Will show arrays as arrays", () => {
    expect(assert([]).toBeArray()).toEqual(true);
    expect(assert(new Array()).toBeArray()).toEqual(true);
  });

  test("Will not show non-arrays as arrays", () => {
    expect(assert({}).toBeArray()).toEqual(false);
    expect(assert(new Uint8Array()).toBeArray()).toEqual(false);
    expect(assert(new ArrayBuffer()).toBeArray()).toEqual(false);
    expect(assert("test").toBeArray()).toEqual(false);
  });
});

describe(".toBe", () => {
  test("Works for boolean", () => {
    expect(assert(true).toBe(true)).toEqual(true);
    expect(assert(false).toBe(false)).toEqual(true);
  });
  test("Works for strings", () => {
    expect(assert("testing").toBe("testing")).toBe(true);
  });
  test("Ensures that types are not coerced", () => {
    expect(assert("1").toBe(1)).toBe(false);
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

describe(".toThrow", () => {
  test("Will return true if the function throws an error", () => {
    expect(
      assert(() => {
        throw new Error();
      }).toThrow()
    ).toEqual(true);
  });

  test("Will return false if the function doesn't throw an error", () => {
    expect(assert(() => {}).toThrow()).toEqual(true);
  });
});
