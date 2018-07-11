//## VARIABLES
//
// var
// let
// const

//## VAR

var a = 0,
  b = 0;

var z = y,
  y = 'A';

console.log(z + y); // undefinedA

console.log(typeof z); // undefined, since z doesn't exist yet

var l = 0; // l is declared global, then assigned a value of 0

function foo() {
  // when foo is called,
  var y = 2; // y is declared local to function foo, then assigned a value of 2

  console.log(l, y); // 0 2

  function bar() {
    // when bar is called
    l = 3; // assigns 3 to existing global l, doesn't create a new global var
    y = 4; // assigns 4 to existing outer y, doesn't create a new global var
    z = 5; // creates a new global variable z and assigns a value of 5.
  } // (Throws a ReferenceError in strict mode.)

  bar(); // calling bar creates z as a global variable
  console.log(l, y, z); // 3 4 5
}

foo(); // calling foo also calls bar
console.log(l, z); // 3 5
console.log(typeof y); // undefined as y is local to function foo

//# #HOISTING

function catName(name) {
  console.log("My cat's name is " + name);
}

catName('Tigger');
/*
The result of the code above is: "My cat's name is Tigger"
*/

dogName('Chloe');

function dogName(name) {
  console.log("My dog's name is " + name);
}
/*
The result of the code above is: "My dog's name is Chloe"
*/

num = 6;
num + 7;
var num;
/* gives no errors as long as num is declared*/

//JavaScript only hoists declarations, not initializations.
//If you are using a variable that is declared and initialized after using it, the value will be undefined.
//The below two examples demonstrate the same behavior.
var x = 1; // Initialize x
console.log(x + ' ' + y); // '1 undefined'
var y = 2;

// The following code will behave the same as the previous code:
var x = 1; // Initialize x
var y; // Declare y
console.log(x + ' ' + y); // '1 undefined'
y = 2; // Initialize y

// http://ignaciothayer.com/post/a-dangerous-example-of-javascript-hoisting/

//## LET
// The let statement declares a block scope local variable, optionally initializing it to a value.

var x = 'global';
let i = 'global';
console.log(this.x); // "global"
console.log(this.i); // undefined

/* In ECMAScript 2015, let bindings are not subject to Variable Hoisting, which means that let declarations do not move
   to the top of the current execution context.
   Referencing the variable in the block before the initialization results in a ReferenceError (contrary to a variable declared with var,
   which will just have the undefined value).
   The variable is in a "temporal dead zone" from the start of the block until the initialization is processed.
*/

function varTest() {
  var x = 1;
  if (true) {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
}

//## HOISTING reprise

function do_something() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2;
}

let j = 1;

switch (j) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // SyntaxError for redeclaration.
    break;
}

// However, it's important to point out that a block nested inside a case clause will create a new block scoped lexical environment,
// which will not produce the redeclaration errors shown above.
switch (j) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}

var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a); // 11
  console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2

//## CONST
// The const declaration creates a read-only reference to a value.
// It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned.
// For instance, in the case where the content is an object, this means the object's contents (e.g., its parameters) can be altered.

// NOTE: Constants can be declared with uppercase or lowercase, but a common
// convention is to use all-uppercase letters.

// define MY_FAV as a constant and give it the value 7
const MY_FAV = 7;

// this will throw an error - Uncaught TypeError: Assignment to constant variable.
MY_FAV = 20;

// MY_FAV is 7
console.log('my favorite number is: ' + MY_FAV);

// trying to redeclare a constant throws an error -  Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
const MY_FAV = 20;

// the name MY_FAV is reserved for constant above, so this will fail too
var MY_FAV = 20;

// this throws an error too
let MY_FAV = 20;

// it's important to note the nature of block scoping
if (MY_FAV === 7) {
    // this is fine and creates a block scoped MY_FAV variable
    // (works equally well with let to declare a block scoped non const variable)
    let MY_FAV = 20;

    // MY_FAV is now 20
    console.log('my favorite number is ' + MY_FAV);

    // this gets hoisted into the global context and throws an error
    var MY_FAV = 20;
}

// MY_FAV is still 7
console.log('my favorite number is ' + MY_FAV);

// throws an error - Uncaught SyntaxError: Missing initializer in const declaration
const FOO;

// const also works on objects
const MY_OBJECT = {'key': 'value'};

// Attempting to overwrite the object throws an error - Uncaught TypeError: Assignment to constant variable.
MY_OBJECT = {'OTHER_KEY': 'value'};

// However, object keys are not protected,
// so the following statement is executed without problem
MY_OBJECT.key = 'otherValue'; // Use Object.freeze() to make object immutable

// The same applies to arrays
const MY_ARRAY = [];
// It's possible to push items into the array
MY_ARRAY.push('A'); // ["A"]
// However, assigning a new array to the variable throws an error - Uncaught TypeError: Assignment to constant variable.
MY_ARRAY = ['B'];
