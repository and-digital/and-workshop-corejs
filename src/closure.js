// Closure

// ## What is a closure?

// A closure is related to scoping within JS (functional scope)

// When a function is _created_ it has access to it's own function scope.

// It _also_ has access to all of the function scopes it is nested in.

// The following is an example of a closure using the function keyword

const add = function(a) {
  return function(b) {
    return a + b;
  };
};

const parent = add(1);

console.log(parent(2));

// And this is the same(ish) function, but with fat arrow syntax

const subtract = a => b => a - b;

console.log(subtract(10)(5));

// Okay, but this is a _little_ abstract, right?

// So let's look at a real world application of closures

// ## Why is this useful?

// Take this example ... a secret handler 

function Person(name) {
  var secret = "secret!"
  this.name = name
  this.setName = (newName) => { this.name = newName }
  this.setNameToFoo = () => { this.name = foo }
  this.getSecret = () => { return secret }
}

var a = new Person("Max")

console.log(a.name)
a.setName("Oliver")
console.log(a.name) 
a.setNameToFoo() 

var foo = "Foo"
a.setNameToFoo()
console.log(a.name)

console.log(a.secret)
console.log(a.getSecret())


// ## The quintessential closure example

// What will this return?

const getFunctions = function() {
  let funcs = [];

  for (var i = 0; i < 3; i++) {
    funcs[i] = function() {
      return `I am index ${i}!`;
    };
  }
  return funcs;
};

const funcs = getFunctions();
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());

// Why does this happen?

// Because a function stores it's closure when it's _created_
