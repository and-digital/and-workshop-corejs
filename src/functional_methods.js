
// When performing iterations / loops you can choose between an imperative loop and a declarative functional method

// **Imperative** = Telling the code what to do and how to do it
// **Declarative** = Telling the code what to do

// ## Why functional methods are superior

// Functional methods are immutable

// Functional methods utilise closures instead of temporary variables (less chance of pollution)

// **Note:** `.each` is a code smell, it indicates that a function has side effects

// TODO explain immutability 

// TODO When to choose functional over imperative

// TODO explain .map

// ## .map

// Callback is applied to each item in the collection

// Good for use cases, such as modifying a data collection

// Useful if you need a function that returns the collection as the same length

const people = [{ name: 'Akram', age: 21 }, { name: 'Jinesh', age: 39 }];

const names = people.map((person) => person.name );

console.log(names);

// ## .filter

// TODO explain .filter

// ## .reduce

// TODO explain .reduce