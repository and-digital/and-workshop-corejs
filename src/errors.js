// An error is where a computer program has reached a state of execution that is unexpected and the resolution is not explicitly known.

// Which is why we have errors, and error handling.

// ## So, when should we throw an error?

// You should try and handle all errors in your code, throw an explicit error for all errors you might "expect"

// ## Common error scenarios

// Because of loose typing, type errors are very common:

// ### Common error 1: X is not a function

// Calling values as functions, that are not functions

// This is common when you're using functions dynamically (functional programming)

try {
  const fakeFunc = 'I am a string';
  fakeFunc();
} catch (e) {
  console.log(e);
}

// ### Common error 2: Cannot read property of undefined

// When an object doesn't have the property you're trying to access

// Common in data stores with deep nested properties

try {
  const shallowThing = {};
  const pick = shallowThing.oneLayer.twoLayers;
} catch (e) {
  console.log(e);
}

// A common 'trick' is to use lazy evaluation to avoid computing the second property

const shallowThing = {};
const pick = !!(shallowThing.oneLayer && shallowThing.oneLayer.twoLayers);
console.log(pick);

// **Questions:**
// * Why does this work?
// * Why doesn't the second part execute?
// * What will the return value be if both are true?
// * An empty object is true/false?
// * Could you make a helper function that does a deep pick?

// Further reading: [_.get](https://lodash.com/docs/4.17.11#get)

// ## JavaScript and error objects

// You typically see the following syntax for errors...

try {
  throw new Error('oops!');
} catch (e) {
  console.log(e);
}

// There are three things happening here: `throw`, `new` and `Error`.

// So let's break these three parts down...

// **Note:** We'll cover new in more depth later.

// ### Part 1: Throw

// The throw keyword halts the current execution.

// It then traverses up the call stack to the nearest try/catch block.

// Throw, can take any argument, a string or a boolean, but it's typically used with an object (the inbuilt `Error` constructor).

try {
  throw 'Just a string...';
} catch (e) {
  console.log(e);
}

// Using the in-built error object is preferred as it's going to make all error handling code consistent throughout your application.

// ## Part 2: New

// We're going to leave the new keyword for later...

// ## Part 3: Error

// Error is a function that takes a single argument, a message and is usually called as a constructor.

// ## Nesting try/catch

// Errors can also be thrown in catch statements and handled by a parent try catch

try {
  try {
    throw new Error(`1`);
  } catch (e) {
    throw new Error(e.message + `, ${2}`);
  }
} catch (e) {
  console.log(e);
}

// This is useful in cases, such as: if you want to check whether an error is one that you threw, or an unknown one.

// ## Summary
// - Try to handle all unknown errors in your system
// - Think about testing for unknown errors
