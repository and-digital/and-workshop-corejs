// Variables

// Hint: Run me in [Quokka](https://quokkajs.com/)

// ## The three types of variables

// `var`
var a = 0;

// `let`
let b = 0;

// and `const`
const c = 1;

// ## But, what's the difference?
// ### Difference 1: Scoping

// JavaScript as a whole has what's known as "function scoping"

// This means that variables, when declared are "scoped" to that function

var a = 0;

// **Example:** Functions and their scopes

(function outer() {
  var a = 1;

  (function inner() {
    var a = 2;

    // **Output:** 2
    console.log(a);
  })();

  // **Output:** 1
  console.log(a);
})();

// As you can see, we're not overwriting the outer variable. We have two, one in the inner function, one in the outer function.

// ----

// `var` is function scoped, `const` and `let` are _block scoped_

// But what does that mean?

// **Example:** var, let and const outside an if block

var var_variable = 1;
let let_variable = 2;
const const_variable = 3;

if (true) {
  var var_variable = true;
  let let_variable = true;
  const const_variable = true;
}

// **Output:** ```true 2 3```
console.log(var_variable, let_variable, const_variable);
// **Explanation:** It overrides the `var` but not the `let` or `const`

// ### Difference 2: Immutability

// A `var` and a `let` declaration _can_ be overwritten

// A `const` cannot. And if you attempt to... an error will be thrown.

// Note: By "overwritten" we mean reassigned a new space in memory

// **Example:** Changing a `const` and `let` variable

const NAME = 'Louis';
let age = 12;

// **Output:** ```Louis is 12 years old```
console.log(`${NAME} is ${age} years old`);

// Note: We need to use a try/catch otherwise the assignment to `NAME` would throw an error (and stop the execution of the file)
try {
  age = age + 1;
  NAME = 'woo';
} catch (e) {
  // **Output:** ```Assignment to constant variable.```
  console.log(e);
}

// **Output:** ```Louis is 13 years old```
console.log(`${NAME} is ${age} years old`);

// As you can see, `age` can be updated as it's a `let` whereas `NAME` cannot as it's a `const`. However, you _can_ update the properties of an object or an array if it's a const.

// -----

// **Example:** Updating an object or an array.

const NAMES = ['Mo', 'Jo'];

// Let's try pushing to the previously created array.
NAMES.push('JoJo');

// **Output:** ```['Mo', 'Jo', 'JoJo']```
console.log(NAMES);

// How is this possible? Because a `const` says that the in memory reference cannot be changed, but the properties can.

// Note: This is similar to how JS handles "pass by reference" and "pass by value".

// ## What if you don't add the var, let, const?

// **Example:** A variable without a `var`, `let` or `const` keyword...

(function nameMyCat() {
  cat = 'Molly';
})();

// **Output:** ```Molly```
console.log(cat);
// **Explanation:** Now Molly is bound to the global scope

// ## A note on convention

// In JavaScript there are no strict "naming standards", however there are some conventions.

// One of those is to [put your const variables as upper case](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const#Examples)

// Like this...
const PERSON = 'Mo';

// This just makes it easier to see when you cannot overwrite a value.
