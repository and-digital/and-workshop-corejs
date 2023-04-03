const {
  myFirstPromise,
  arrayConverter,
  caughtPromise,
} = require("../4-promises");

describe("myFirstPromise", () => {
  test('should return "Yarrr!" if the promise resolves', () => {
    return expect(myFirstPromise(true)).resolves.toBe("Yarrr!");
  });

  test('should return "Narrr!" if the promise rejects', () => {
    return expect(myFirstPromise(false)).rejects.toBe("Narrr!");
  });
});

describe("arrayConverter", () => {
  test("should return an array of colour objects with id and value", () => {
    const colours = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];

    const expected = [
      { id: 0, value: "red" },
      { id: 1, value: "orange" },
      { id: 2, value: "yellow" },
      { id: 3, value: "green" },
      { id: 4, value: "blue" },
      { id: 5, value: "indigo" },
      { id: 6, value: "violet" },
    ];

    return expect(arrayConverter(Promise.resolve(colours))).resolves.toEqual(
      expected
    );
  });

  test("should return an array of salad objects with id and value", () => {
    const salad = [
      "tomatoes",
      "lettuce",
      "celery",
      "sweetcorn",
      "cheese",
      "ham",
      "peppers",
    ];

    const expected = [
      { id: 0, value: "tomatoes" },
      { id: 1, value: "lettuce" },
      { id: 2, value: "celery" },
      { id: 3, value: "sweetcorn" },
      { id: 4, value: "cheese" },
      { id: 5, value: "ham" },
      { id: 6, value: "peppers" },
    ];

    return expect(arrayConverter(Promise.resolve(salad))).resolves.toEqual(
      expected
    );
  });
});

describe("caughtPromise", () => {
  test('should throw an error with the message "Promise rejected: Needs more cowbell"', () => {
    return expect(
      caughtPromise(Promise.reject("Needs more cowbell"))
    ).rejects.toThrow("Promise rejected: Needs more cowbell");
  });

  test('should throw an error with the message "Promise rejected: 418 I\'m a teapot"', () => {
    return expect(
      caughtPromise(Promise.reject("418 I'm a teapot"))
    ).rejects.toThrow("Promise rejected: 418 I'm a teapot");
  });
});
