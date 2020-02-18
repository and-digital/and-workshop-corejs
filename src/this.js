// # This

// This in Javascript is dynamic scoping.

// Dynamic scoping is code that can be understand only when the code _runs_ not when it is _written_.

// Lexical scope is the scope _we can see_ whereas dynamic scope might change, dependent on how a function is executed.

// Dynamic scoping creates impurity in our code as our function acts on data (objects) outside of it's own scope.

// ## Implicit Vs Explicit binding (THE 4 ways)

// Every function within JavaScript has a value of `this` whether you like it or not (sorry FP-ers #impurity).

// You can either tell JavaScript what you want a value of this to be explicitly, or you can leave it up to JavaScript to try and work out what you wanted it to do.

// In order to set the value explicitly, you could invoke the function with one of either: `call`, `bind` or `apply` (explicitly) or call it implicitly.

// This means, in total that there are **4** ways to set the value of this.

function whatIsThis() {
  return this;
}

// ### Implicit binding

// **Output:** ``` { clearInterval, clearTimeout ... } ```
console.log(whatIsThis());

// Basically, since we didn't tell the function what our value of `this` should be, it returned the global object.

// The golden rule is that JavaScript will assign the value of this to the object it is called on.

const contextualWrapper = {
  whatIsThis
};

// **Output:** ``` whatIsThis ```
console.log(contextualWrapper.whatIsThis());

// You **NEED** to understand the above 👆👆👆👆

// Learn the above because it causes 99% of the confusion in JavaScript.

// ### Explicit Binding

// **Output:** ```{ anEmptyObject: null }```
console.log(whatIsThis.call({ anEmptyObject: null }));

// Here, we've told the function _exactly_ what we want our value of `this` to be, so it sets it as so.

// We can also do this with a `.apply` or a `.bind` method.

// **Output:** ```{ anEmptyObject: null }```
console.log(whatIsThis.apply({ anEmptyObject: null }));

// _Note:_ The difference between `.apply` and `.call` is that `.apply` passes it's arguments as an array.

// **Output:** ```{ anEmptyObject: null }```
console.log(whatIsThis.bind({ anEmptyObject: null })());

// _Note:_ Bind returns a function, that is to be called,

// ## The golden rule of this

// > Whatever object is before the function invocation is the value that `this` is set to, if there is none, it's global.

// Re-read that quote a few times and "commit" it to memory 😜.

// Seriously though, it's important.

// ## this, by example...

// To understand it best, let's view an example

// Take this data object, that has a method `whatsTheirName` which allows us to return the value of the name on the object.
const person = {
  name: 'Charlie Sheen',
  whatsTheirName: function() {
    return this.name;
  }
};

// Let's ignore this `invoke` function for now (we'll discuss it later).
const invoke = function(func) {
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

// 🤔 Remember this is to do with the rule. Since there is no object reference before the function invocation the value is set to global scope.

// ----

// What if we explicitly bind the context?

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
console.log(invoke(person.whatsTheirName));

// The function is called _inside_ the invoke function, but again it's _not_ called with an adjoining object, so the value is set to the global scope.

// ----
