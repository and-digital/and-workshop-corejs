// Your third exercise is all about design patterns.
// Create a calculator object/constructor/class

// Your calculator should expose the following methods: 
// * `sum`
// * `multiply`
// * `getValueOfPI`

// ## Part 1: Module
// Implement the above using a JS object module.

const moduleCalc = {}

// ## Part 2: Constructor
// Implement the above using a Constructor

function ConstructorCalc() {}

// ## Part 3: Class
// Implement the above using a Class

class ClassCalc{}

// ## Part 4: Prototypes
// Modify your above example by using a Prototype

const PrototypeCalc = function() {};


// Exporting so that the tests can use them
module.exports = {
  moduleCalc,
  ConstructorCalc,
  ClassCalc,
  PrototypeCalc
}
