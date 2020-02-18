//  # Function

// A function is the encapsulation of behaviours

// Here, we'll discuss probably the most important part of JavaScript: Understanding functions.

// ## Function characteristics

// * Functions can take an infinite number of arguments
// * A function implicitly returns undefined
// * A function is a first-class object
// * A function is an object, with behaviour

// ## Function Signatures

// A function signature is the pattern the function expects you to implement.

// I introduce this word as it's useful when discussing functions, you should constantly think of your function signature.

// Design by function signature is an essential part of TDD... "How do you want your code to look"

// Where possible: **Design your API upfront**

// Thinking deeply about function signatures and your API's will help you construct more readable code. This is where TDD can also help us. It often makes more sense to define your behaviours and function signatures before you start coding.

// For instance, the following function signature is:
// * Expects a single parameter
// * If no parameter is passed, the assumed default value for the cat is ```Miggins```

// This is a somewhat trite example, but you want to think deeply about the arguments you expect and the responses you want to send

// Things to consider:
// * Should we throw an error if the type is wrong?
// * What do we do with additional arguments?
// * Do we always want to return an object?

const getAllTheCats = function(name = 'Miggins') {
  return {
    name
  };
};

// ## Functions are objects

// Functions in JavaScript are what is known as: _first class objects_.

// That means anything we can do with an object, we can do with a function.

// In this way... functions are like objects but with superpowers.

// Execution of a function is actually a shorthand for it's `call` method ... (but more on this later)

// ## Args vs Params

// What's the difference?

// Arguments are the values _passed in_ to a function, parameters are what the function _receives_.

// Making the distinction allows us to discuss code more easily.

// The number of arguments a function requires is called it's _arity_.

// A function that only takes a single argument is a unary function.

const unary = x => x;

// **Question:** What is the purpose of the above function?

// **Answer:** It _drops_ additional arguments, this is useful when passing only a few arguments to a function.

// ## Function definitions vs expressions

// What's the difference between the following:

try {
  console.log(iAmADeclaration);
  console.log(iAmAnExpression);
} catch (e) {
  console.log(e);
}

function iAmADeclaration() {}

const iAmAnExpression = () => {};

// Only declarations are hoisted, expressions are interpreted when they need to be

// **Question:** Which should you use?

// **Answer:** Declarations, since they are explicitly named

// ## Anonymous functions

// Functions, when written as a declaration have a `name` property applied

// This name property is then used later in the "call stack"

// Take this declaration:

function iHaveAName() {}

// The name property is set
console.log(iHaveAName.name);
console.log(iHaveAName.toString());

// But in the following, we have an `anonymous function` assigned to a variable
// **Important:** These two _are not the same_.
const anon = () => {};
console.log(anon.name);

// **Question:** What will be the output of the following:

const anon2 = function named() {};
console.log(anon2.name);

// **Answer:** The function is given the function name, not the variable name

// This is the name used in your "call stack"

// ## Passing extra arguments

// Given...

const myFunctionSignature = (a, b) => {
  return [a, b];
};

// **Question:** What will happen with the third argument?

console.log(myFunctionSignature(1, 2, 3));

// **Answer:** Nothing, it's lost into the ether.

// **Note:** No error, but you could throw one if you wanted to ensure the arguments are as you expect...

// ## Function Returning

// **Question:** What happens if a function has no `return` keyword?

// **Answer:** A function returns `undefined` by default

const undefinedReturn = () => {};

console.log(undefinedReturn());
