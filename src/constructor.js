
// # Constructors

// A constructor is a design pattern

// It's simply a way of instantiating an object

// You don't _need_ constructors, it's really personal preference

// As with all design patterns: 
// * Use them if you need
// * Don't overuse them
// * Don't needlessly apply them
// * Be conscious of your teams knowledge

// ## What's different about a Constructor? 

// When a function is called as constructor (with the `new` keyword), it changes:

// * What the value of `this` is
// * What the default `return` value is

// ## Regular functions vs Constructor functions

// The following is an example of a regular function...

function iAmNotAConstructor() {
    console.log(this);
}

console.log(iAmNotAConstructor());

// Regular functions will return `undefined` and the value of `this` is set to global scope

// The following is an example of a constructor function...

function IAmAConstructor() {
    console.log(this);
}

console.log(new IAmAConstructor());

// Constructor functions will return the constructor object itself, and the this value will be the constructor object

// ## Calling a Constructor without new

// But what happens if you call a constructor function without new?

// Unexpected things happen

function Person(name) {
    this.name = name;
}

console.log(global.name)
console.log(new Person("Lou"))
/* Uncomment this line: console.log(Person("Lou")) */
console.log(global.name);

// This now set `this` to be global, and our properties were all bound to global scope, ew. 

// **Exercise: Implement the promise API with a constructor function**