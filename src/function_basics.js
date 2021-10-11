//  # Function

// A function is the encapsulation of behaviours

// Here, we'll discuss probably the most important part of JavaScript: Functions.

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

// This is a silly example, but you want to think deeply about the arguments you expect and the responses you want to send

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

// ## Hoisting

// What's the difference between the following:

try {
  console.log(iAmADeclaration);
  console.log(iAmAnExpression);
} catch (e) {
  console.log(e);
}

function iAmADeclaration() {}

const iAmAnExpression = () => {};

// Functions and variable declarations are taken to the top of the functions they are executing in. 
// If there is no parent function present, then they are hoisted to the top of the global scope.

// The code gets 'rearranged' to 

function iAmADeclaration() {}

try {
  console.log(iAmADeclaration);
  console.log(iAmAnExpressionn);
} catch (e) {
  console.log(e);
}

const iAmAnExpressionn = () => {};


// Hoisting happens because of how our code is interpreted and executed by the JavaScript interpreter.
// During run time, javascript code is interpreted in a minimum of 2 cycles:

// * During 1st run, the interpreter goes through the code line by line while looking only for functions or variable declarations. Wherever it encounters a declaration, it moves it to the top. (This is how the interpreter will get an idea about which functions and variables are going to be used in the current context, also how much approximate memory it will be needing to execute the current function)

// * During 2nd run, the compiler starts the execution of output from the previous run. Now it will start compiling the code in a normal way i.e. assigning values, executing function calls, reassignment of values, etc.

// **Question:** What will the following code result in?
var studentName = "Frank";
console.log(studentName); // Frank

var studentName;
console.log(studentName); // ?


// **Question:** What will the following code result in?
var greeting;

function greeting() {
    console.log("Hello!");
}

var greeting;
console.log(typeof greeting);        // ?
var greeting = "Hello!";
console.log(typeof greeting);        // ?

// **Question:** Do you get the same result if you use `let` or `const` instead of `var`?


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

// Implicit Returns

// **Question:** What will be logged results be?

const functionOne = () => 'hello';
const functionTwo = () => {'hello'};

console.log(functionOne())
console.log(functionTwo())


// **Question:** What will be logged results be?

const functionThree = () => 'hello' + ' world';
const functionFour = () => {
  'hello';
  'hello' + 'world'
}

console.log(functionThree())
console.log(functionFour())



