//## functions

let aFunction = function() {
  /* logic */
};

/*
One of the benefit of creating a named function expression is that in case we encounted an error, 
the stack trace will contain the name of the function, making it easier to find the origin of the error.
*/

function namedFunction() {
  /* logic */
}

(function() {
  /* logic */
})();

/* a function can return anoter function */
function foo() {
  return function() {
    console.log('function bar called!\n');
  };
}

const a = foo();
a();

/* a function can receive another function as argument(s) */
function baz(anotherFunction) {
  console.log('baz invoking anotherFunction');
  anotherFunction();
}

/* if you don't specify a return statemnet, the function call will implicitly return 'undefined' */
const returnedValueFromBaz = baz(a);
console.log(`returned value from calling baz is: ${returnedValueFromBaz}\n`);

/* you can specify any number of argurments to a function
  BUT as a caller you are not force to pass all of them
*/

function doS(firstArgument, secondArgument, thirdArgument) {
  console.log('Function doS called');
  console.log('firstArgument:', firstArgument);
  console.log('secondArgument:', secondArgument);
  console.log('thirdArgument:', thirdArgument);
  /* a special variable is available internally to all functions */
  console.log('arguments:', arguments, '\n');
}

doS(1, 'ciao', function() {
  return 42;
});

doS(1, 'ciao');

doS();

doS(
  1,
  'ciao',
  function() {
    return 42;
  },
  'a fourth param passed'
);

/* you can also have nested function calls */

function first(param) {
  return param;
}

function second(param) {
  return param;
}

function third(param) {
  console.log(`third function param is ${param}`);
}

third(second(first(42)));

/* you can also have chained function calls based on the return value 
  for example Array, String and Number have their own functions
*/

const lastArrayStringElement = [':)', 'hello', 'world'].pop();
console.log('lastArrayStringElement:', lastArrayStringElement);
let stringToUppercase = console.log(
  'stringToUppercase',
  lastArrayStringElement.toUpperCase()
);

/* you can do it in one line */
stringToUppercase = [':)', 'hello', 'world'].pop().toUpperCase();

console.log('stringToUppercase in a single line:', stringToUppercase);

/* you can return a function from a function
  the inner function (closure) will memoize the parameters
*/

//curry example 1
function addPrefix(prefix) {
  return function(str) {
    let prefixedStr = `prefix is : ${prefix} and string is  ${str}`;
    return prefixedStr;
  };
}

const prefixWithAwesome = addPrefix('AWESOME');
let prefixedJob = prefixWithAwesome('job');
let prefixedYOU = prefixWithAwesome('YOU!');

console.log('prefixedJob:', prefixedJob);
console.log('prefixedYOU:', prefixedYOU, '\n');

const prefixWithSmilingFaceWithSunglasses = addPrefix('😎');
prefixedJob = prefixWithSmilingFaceWithSunglasses(' job');
prefixedYOU = prefixWithSmilingFaceWithSunglasses(' YOU!');

console.log('prefixedJob:', prefixedJob);
console.log('prefixedYOU:', prefixedYOU, '\n');

//curry example 2
const candidates = [
  { skill: 'JS', name: 'Jane' },
  { skill: 'JS', name: 'Mario' },
  { skill: 'PHP', name: 'Mel' },
  { skill: 'CSS', name: 'Lorna' },
  { skill: 'JAVA', name: 'Lorna' }
];

const hasSkill = function(skill) {
  return function(candidate) {
    return candidate.skill == skill;
  };
};

let filteredCandidates = candidates.filter(hasSkill('JS'));

// curry example 3
let convert = function(from, to) {
  let rate = 1.2; // some http request to an external service that gives you back the exchange rate
  return function(amount) {
    return amount * rate;
  };
};
let convertGBPEUR = convert('GBP', 'EUR');

convertGBPEUR(100);
convertGBPEUR(3000);
