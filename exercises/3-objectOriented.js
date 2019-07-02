// Your third exercise is all about design patterns.
// Create a calculator object/constructor/class

// Your calculator should expose the following methods:
// * `sum`
// * `multiply`
// * `getValueOfPI`

// ## Part 1: Module
// Implement the above using a JS object module.

const moduleCalc = {
  sum: (numbers = []) => numbers.reduce((acc, curr) => acc + curr, 0),

  multiply: (numbers) =>
    numbers ? numbers.reduce((acc, curr) => acc * curr) : 0,

  getValueOfPI: () => Math.PI,
};

// ## Part 2: Constructor
// Implement the above using a Constructor

function ConstructorCalc() {
  (this.sum = (numbers = []) => numbers.reduce((acc, curr) => acc + curr, 0)),
    (this.multiply = (numbers) =>
      numbers ? numbers.reduce((acc, curr) => acc * curr) : 0),
    (this.getValueOfPI = () => Math.PI);
}

// ## Part 3: Class
// Implement the above using a Class
class ClassCalc {
  static sum(numbers = []) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  static multiply(numbers) {
    return numbers ? numbers.reduce((acc, curr) => acc * curr) : 0;
  }

  static getValueOfPI() {
    return Math.PI;
  }
}

// ## Part 4: Prototypes

// Modify your above example by using a Prototype

const PrototypeCalc = function () {};
PrototypeCalc.prototype = {
  sum: function (numbers = []) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  },

  multiply: function (numbers) {
    return numbers ? numbers.reduce((acc, curr) => acc * curr) : 0;
  },

  getValueOfPI: function () {
    return Math.PI;
  },
};

// Exporting so that the tests can use them
module.exports = {
  moduleCalc,
  ConstructorCalc,
  ClassCalc,
  PrototypeCalc,
};
