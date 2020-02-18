// A prototype is how javascript allows shared functionality.

// Every object in javascript has a prototype "link" (this can be seen as \_\_proto\_\_ or [[prototype]] in your browser)

// These \_\_proto\_\_ links eventually end up back at the parent Object type.

// ## Classes vs Prototypes

// Classes are inert, they don't really do anything and can't be modified.

// This is where prototypal inheritance differs... in prototypal inheritance we have objects that are chained together (BUT, and it's a big BUT 🍑) these objects _can_ be manipulated (at runtime!).

// Therefore, prototypal inheritance can be seen as a sort of (dynamic inheritance), inheritance that can be modified / changed.

// **Note:** JavaScript does not have multiple inheritance (inheriting from two objects at the same time)

// ## Using constructors for inheritance

// Using constructors in JavaScript allows us to do inheritance, but it's a two step process.

// **Step 1:** Create a set of instructions for the new object we're creating (the constructor)

// **Step 2:** Tell it which prototype to inherit from (assigning the function a prototype object)

// Note: You cannot (except using __proto__ 🙄) edit an objects prototype reference after it is created.

// ## Using Constructors for Object creation

// Below is an example of using prototypes for inheritance on objects.

// We'll do this by defining 3 sets of instructions (3 constructor functions)
// And then we'll chain them all together using prototypal inheritance

// **Step 1:** Create our first set of instructions (for object Animal)
function Animal() {
  this.animal = true;
}

// **Step 2:** Create our second set of instructions (this time, for object Mammal)

// Except, this time we'll explicitly say we want object one to be the parent of any objects created from this set of instructions.
function Mammal() {
  this.mammal = true;
}
Mammal.prototype = new Animal();

// **Step 3:** Create our third(!) set of instructions (this time, for object Cat)

// Note, we've not yet made any _objects_ only _functions_ (read: instruction sets)
function Cat(name) {
  this.cat = true;
  this.name = name;
}
Cat.prototype = new Mammal();

// **Step 4:** Create our third(!) set of instructions (this time, for object Cat)

// Up until now, we've only created instruction sets, now we're going to set it all in stone and create! yipee!

const migginsInstance = new Cat('Miggins!');
console.log(migginsInstance.name);
console.log(migginsInstance.cat);
console.log(migginsInstance.animal);
console.log(migginsInstance.mammal);

const mammalInstance = new Mammal();
console.log(mammalInstance.name);
console.log(mammalInstance.cat);
console.log(mammalInstance.animal);
console.log(mammalInstance.mammal);

// ## The nature of prototypes

// Since prototypes are references to an object, if you mutate the object instance that is the parent of your object, you'll _dynamically_ update the prototype.

// **Step 1:** Let's create some instructions for house building

// Let's assume that by default a house has two floors
function House() {
  this.roof = true;
  this.walls = 4;
  this.floors = 2;
}

// **Step 2:** Let's create some instructions for building a bungalow

// Let's now assume that a bungalow is the same as a house, but it only has one floor, so we create a bungalow constructor

// But don't forget to link it to our house function!

function Bungalow() {
  this.floors = 1;
}
const houseInstance = new House();
Bungalow.prototype = houseInstance;

// **Step 3:** Let's now create a bungalow, but let's modify the parent of our bungalow

const bungalowInstanceOne = new Bungalow();
houseInstance.walls = null;

// Oh no, now our bungalow has no walls!

// That's because we've modified the object that our bungalow was referencing... damn.

// ## Beware updating global prototypes

// It's for the reason above that we should avoid modifying our base prototypes.

// For instance, what if I modify the `.toLowerCase` method to actually convert strings to upper case! muahaha 😈

String.prototype.toLowerCase = function() {
  return this.toUpperCase();
};

// Oh poop 💩 now all of our strings that reference this prototype object are now returning weird stuff! Uh-oh!

console.log('test'.toLowerCase());

// ## Okay, but why? Just WHY?

// Prototypes allow us to have a single object in memory and reference just that single object

// This _was_ useful years ago when memory was scarce, now ... who really cares.

// That said, prototypes allow us to implement inheritance and therefore implement different design patterns

// Design patterns appear not to be useful in small code bases, but they can make all the difference in larger ones (especially in libraries)
