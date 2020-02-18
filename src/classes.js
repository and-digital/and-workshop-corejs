//  ## Classical vs functional

// A class in JavaScript is simply a fancy 💁 way of defining a constructor function. Using classes helps us to mimic code style of classical languages (but JS is not a classical language).

// When we write either a class or a constructor the convention is to upper case the first letter.

// Which is why we have the following objects like these...

// ```new Object();```

// ```new Promise()```

// ## Classes are _sugar_

// A class is simply a fancy constructor function (instruction set for an object).

// A constructor can have static methods by applying them to a function

// ## Understanding static methods

// A function is an object (object instance) so can have properties

// These properties are it's "static" methods.

// They are static because they don't require you to call `new`.

// They don't require you to call `new` because they're on the function itself.

// ## Constructor vs Class example

// Lets take a look at writing the same code in two different ways

// First with a constructor, then with a class.

// Same same, but different.

function PromiseAsConstructor() {
  this.whatAmI = 'A constructed Promise!';
}

PromiseAsConstructor.staticMethod = () => 'static constructor';

// **Output:** ```static constructor```
console.log(PromiseAsConstructor.staticMethod());
// **Output:** ```A constructed Promise!```
console.log(new PromiseAsConstructor().whatAmI);

class PromiseAsClass {
  constructor() {
    this.whatAmI = 'A classical Promise!';
  }

  static staticMethod() {
    return 'static class';
  }
}

// **Output:** ```static class```
console.log(PromiseAsClass.staticMethod());
// **Output:** ```A classical Promise!```
console.log(new PromiseAsClass().whatAmI);

// ## Instance vs Prototypes in raw JS

// Now you should start to understand why we have the following:

console.log(Array.isArray([]));

// The `isArray` is a _static_ method of the Array object. We couldn't call `"test".isArray()`

// Why? Because as that would mean ALL of our objects in JavaScript would require an `isArray` function ... not realistic.
