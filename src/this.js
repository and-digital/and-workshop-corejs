// # This

// This is dynamic scope in Javascript, meaning that it is defined when the code _runs_ not when it is _written_. 

// ## Implict Vs Explicit this binding

// You can either tell JavaScript what you want a value of this to be explicitly, or you can leave it up to JavaScript to try and work out what you wanted it to do.

// In order to set the value explicitly, you could invoke the function with one of either: `call`, `bind` or `apply`.

function aFunctionForThis(){
    return this;
}

// ### Implicit binding

// **Output:** ``` { clearInterval, clearTimeout ... } ```
console.log(aFunctionForThis());

// Basically, since we didn't tell the function what our value of `this` should be, it returned the global object. 

// ### Explicit Binding

// **Output:** ```{ anEmptyObject: null }```
console.log(aFunctionForThis.call({ anEmptyObject: null }));

// Here, we've told the function _exactly_ what we want our value of `this` to be, so it sets it as so. 

// We can also do this with a `.apply` or a `.bind` method. 

// **Output:** ```{ anEmptyObject: null }```
console.log(aFunctionForThis.apply({ anEmptyObject: null }));

// _Note:_ The difference between `.apply` and `.call` is that `.apply` passes it's arguments as an array. 

// **Output:** ```{ anEmptyObject: null }```
console.log(aFunctionForThis.bind({ anEmptyObject: null })());

// _Note:_ Bind returns a function, that is to be called, 

// ## Remember the simple rule

// > Whatever object is before the function invokation is the value that `this` is set to, if there is none, it's global. 

// Re-read that quote a few times and "commit" it to memory 😜. Seriously though, it's important. 

// ## An Example...

// To understand it best, let's view an example

// Take this data object, that has a method `whatsTheirName` which allows us to return the value of the name on the object. 
const person = {
    name: "Charlie Sheen",
    whatsTheirName: function () {
        return this.name;
    }
};

// Let's ignore this `invoke` function for now (we'll discuss it later).
const invoke = function (func)  {
    return func();
};

// ## Understanding how the value of this is applied

// Okay, first lets call the `whatsTheirName` function. 

// What's the result? 

// **Output:** Charlie Sheen
console.log(person.whatsTheirName());

// Okay, that's what we expect.

// ----

// What about if we move that function to a variable?

// **Output:** `undefined`
let cacheFunctionInVariable = person.whatsTheirName;
console.log(cacheFunctionInVariable());

// 🤔 Remember this is to do with the rule. Since there is no object reference before the function invokation the value is set to global scope. 

// ----

// What if we explictly bind the context? 

// **Output:** `Charlie Sheen`
console.log(cacheFunctionInVariable.bind(person)());

// Here we're explicitly setting the value, so it's what we'd expect

// ----

// But does that modify the original variable?

// **Output:** `undefined`
console.log(cacheFunctionInVariable());

// No, it doesn't. Bind is non-mutating. 

// ----

// Okay, what about this?
cacheFunctionInVariable = person.whatsTheirName.bind(person);

// **Output:** `Charlie Sheen`
console.log(cacheFunctionInVariable());

// So we've now ensured every time the `cacheFunctionInVariable` is called it's called with the right context, because we used `bind`. Nice! 🎉

// ----

// Oh, but wait there's more...

// What about a function that takes a callback?

// **Output:** `undefined`
console.log(invoke(person.whatsTheirName))

// The function is called _inside_ the invoke function, but again it's _not_ called with an ajoining object, so the value is set to the global scope.

// ----

// TODO: Useful for chained methods such as reduce where you don't explicitly pass the value

// TODO: Add React example for classes that bind the this value

// TODO: Add exercise to implement the React component API

// TODO: Caching a this variable

// TODO: Dynamic scope allows us to do `super` call type behaviour with regular 

// ## Sub Classing

var Person = function( firstName, lastName ){
 
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = "male";
   
  };

// a new instance of Person can then easily be created as follows:
var clark = new Person( "Clark", "Kent" );
 
// Define a subclass constructor for for "Superhero":
var Superhero = function( firstName, lastName, powers ){
 
    // Invoke the superclass constructor on the new object
    // then use .call() to invoke the constructor as a method of
    // the object to be initialized.
 
    Person.call( this, firstName, lastName );
 
    // Finally, store their powers, a new array of traits not found in a normal "Person"
    this.powers = powers;
};
 
Superhero.prototype = Object.create( Person.prototype );
var superman = new Superhero( "Clark", "Kent", ["flight","heat-vision"] );
console.log( superman );
 
// Outputs Person attributes as well as powers