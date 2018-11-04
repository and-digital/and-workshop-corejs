
// # Constructors

// A constructor is a tool for object creation. 

// Constructors in prototypal inheritance are what classes are in classical, instruction sets. 

// **Note:** You don't _need_ constructors it's really personal preference.

// ## Why?

// Using constructors can signify when you're doing something that pertains to object creation.

// This helps with "code signalling" (indications of what your code is doing)

// It's the same as why a `.map` is preferable to a `for` loop (read:a map implies the behaviour)

// As with all design patterns: 
// * Use them if you need
// * Don't overuse them
// * Don't needlessly apply them
// * Be conscious of your teams knowledge
// * Whatever you write, be prepared to teach

// ## What is a constructor?

// A constructor is a function that is a set of instructions used in object creation

// When a function is called as constructor (with the `new` keyword), it changes:

// * What the value of `this` is set to
// * What the default `return` value of the function is (because we want this new instance)
// * What the ```prototype``` object is referenced

// ## The new keyword

// A constructor is useless if you don't `new` it. 

// A constructor is instructions to create an object, so to use it, we should create our object. 

// ## Don't call constructors without new!

// When created, this object literal will be created with a few things happening to it:
// * A new object is created in memory
// * The function will return `undefined` by default
// * The value of `this` is set to global scope.
// * The prototype isn't set

// The following is an example of a function called without new...

function iAmNotAConstructor() {
    console.log(this);
}

console.log(iAmNotAConstructor());

// ## What happens when you new?

// * A new object is created in memory
// * The value of `this` is set to the object instance
// * The function will return `this` by default
// * The prototype will be set as the object it is copied from (the constructor function)

function IAmAConstructor() {
    console.log(this);
}

console.log(new IAmAConstructor());

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

// This now set `this` to be global, and our properties were all bound to global scope, new.