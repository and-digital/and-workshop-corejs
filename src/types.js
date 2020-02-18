// ## Types

// Types are metadata for values, in that _types tell us something about the value we're operating on_.

// ## Primitives vs Objects

// Okay, so where do primitives come into it? What is a primitive?

// A primitive is basically anything that's _not_ an object.

// The following are _not_ objects (and therefore don't have properties / methods).

// * **number** for numbers of any kind: integer or floating-point.
// * **string** for strings.
// * **boolean** for true/false.
// * **null** for unknown values
// * **undefined** for unassigned values – a standalone type that has a single value undefined.
// * **symbol** for unique identifiers.

// And then of course, you have...

// * **object** for more complex data structures.

// **Question:** Where is `Array`, and `Function` though?

// ## Type differences

// Types are important when it comes to operators, too.

// For instance...

console.log('1' + '1');

console.log(1 + 1);

// Here, you can see the operator on a string or a boolean is _fundamentally different_.

// ## type coercion

// In JavaScript, primitives can still have methods, though.

// For instance:

console.log('hello'.length);

// This works as JavaScript wraps the primitive in an object `String` temporarily at run time.

// This is quite confusing, but worth discussing as when you use the object over the primitive as you make a trade off:

// You can assign values to a non-primitive object, but _you lose_ the ability to know what type of value the item is, without first calling `valueOf` first.

// ## typeof

// We can use the `typeof` operator to tell the difference between data types. This allows us to implement error handling and/or different behaviour dependent on type

// **Question:** Should you always check data types inside functions?

// **Answer:** _Maybe_... it's up to you. Sometimes a defensive guard statement is enough.

const myFunction = value => {
  if (typeof value != 'string') {
    throw new Error('boom');
  }

  console.log('We good, we good');
};

myFunction('Hey');

try {
  myFunction(0);
} catch (e) {
  console.log(e);
}

// ## Discrepancies in the typeof system

// Unfortunately, `typeof` cannot always be "trusted".

console.log(typeof []);
console.log(typeof {});
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 'test');
console.log(typeof true);
console.log(typeof 0);
console.log(typeof Number);
console.log(typeof new Number(0));

// `null` returning `"object"` is actually a bug...

// **Question:** Why is array an "object"? How do we type check an array then?

// **Answer:** Arrays are a child of the object prototype, but with methods overwritten.

// **Note:** Because of these heavy discrepancies, I can strongly recommend using something like Lodash's utilities, for instance: [_.isObject](https://lodash.com/docs/4.17.11#isObject) or at least rolling your own (And use TDD, of course).
