const {
  moduleCalc,
  ConstructorCalc,
  ClassCalc,
  PrototypeCalc,
} = require("../3-objectOriented");

describe.each([
  { name: "Module", calc: moduleCalc },
  { name: "Constructor", calc: new ConstructorCalc() },
  { name: "Class", calc: ClassCalc },
  { name: "Prototype", calc: new PrototypeCalc() },
])("$name", ({ calc }) => {
  describe("Sum", () => {
    test("Returns 0 when no numbers given", () => {
      const result = calc.sum();
      expect(result).toEqual(0);
    });

    test("Adds two numbers together", () => {
      const result = calc.sum([1, 2]);
      expect(result).toEqual(3);
    });

    test("Adds three numbers together", () => {
      const result = calc.sum([1, 2, 3]);
      expect(result).toEqual(6);
    });
  });

  describe("Multiply", () => {
    test("Returns 0 when no numbers given", () => {
      const result = calc.multiply();
      expect(result).toEqual(0);
    });

    test("Adds two numbers together", () => {
      const result = calc.multiply([1, 2]);
      expect(result).toEqual(2);
    });

    test("Adds three numbers together", () => {
      const result = calc.multiply([1, 2, 3]);
      expect(result).toEqual(6);
    });
  });

  describe("PI", () => {
    test("Returns value of PI", () => {
      const result = calc.getValueOfPI();
      expect(result).toEqual(Math.PI);
    });
  });
});
