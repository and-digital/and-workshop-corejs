const _ = require("../2-functional");

describe("_.reduce", () => {
  test("Reduces an array without a default", () => {
    const result = _.reduce([{ age: 12 }, { age: 13 }], (prev, item) => {
      prev = prev + item.age;
      return prev;
    });
    expect(result).toEqual(25);
  });

  test("Reduces an array, starting with 10", () => {
    const result = _.reduce(
      [{ age: 12 }, { age: 13 }],
      (prev, item) => {
        prev = prev + item.age;
        return prev;
      },
      10
    );
    expect(result).toEqual(35);
  });

  test("Does not mutate original array", () => {
    const original = [{ age: 12 }, { age: 13 }];
    const start = 0;
    const result = _.reduce(
      original,
      (prev, item) => {
        prev = prev + item.age;
        return prev;
      },
      start
    );

    expect(original).toEqual([{ age: 12 }, { age: 13 }]);
    expect(result).toEqual(25);
    expect(start).toEqual(0);
  });
});

describe("_.map", () => {
  test("Can concatenate a string as part of a map", () => {
    expect(_.map(["Graham", "Sarah", "Bob"], (name) => `The ${name}`)).toEqual([
      "The Graham",
      "The Sarah",
      "The Bob",
    ]);
  });
  test("Can map an array with data objects", () => {
    expect(_.map([{ name: "Lou" }], (person) => person.name)).toEqual(["Lou"]);
  });
  test("does not mutate", () => {
    const originalValues = ["Graham", "Sarah", "Bob"];
    expect(_.map(originalValues, (name) => `The ${name}`)).toEqual([
      "The Graham",
      "The Sarah",
      "The Bob",
    ]);
    expect(originalValues).toEqual(["Graham", "Sarah", "Bob"]);
  });
});

describe("_.defaults", () => {
  test("Returns an object", () => {
    const result = _.defaults({}, {});
    expect(result).toEqual({});
  });
  test("Does not mutate original value", () => {
    const original = {};
    const result = _.defaults(original, {});
    expect(result).not.toBe(original);
  });
  test("Gives precedence to the original object, not default", () => {
    const result = _.defaults({ a: 1 }, { a: 2 });
    expect(result).toEqual({ a: 1 });
  });
});
