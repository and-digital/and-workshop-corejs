
// When performing iterations / loops you can choose between an imperative loop and a declarative functional method

// ## Functional vs Imperative

// What's the difference? 

// **Imperative** = Telling the code what to do and how to do it
// **Declarative** = Telling the code what to do

// ##  Functional methods > Imperative

// Functional methods are immutable. 

// Functional methods and their style indicate to the reader what type of operation is being performed. 

// A `map` indicates a type of operation, whereas a `for loop` must be read first, before we understand the type of operation and return value. 

// **Note:** I consider `.each` a code smell, it indicates that a function has side effects. 

// ## The premise of functional methods

// All functional methods try to adhere to a few rules

// They are performed on the dataset they are given

// They are passed a function, which is then executed on the data set in different ways

// This is a fundamentally different paradigm than most of us are used to as the function passed is executed somewhere else in the code. 

// ## The main functional methods

// The main three functional methods are: `map`, `filter`, and `reduce`. 

// ## .map

// Callback is applied to each item in the collection.

// Will return a data structure of the same type and size.

// Good for use cases, such as modifying a data collection.

// Useful if you need a function that returns the collection as the same length

const people = [{ name: 'Akram', age: 21 }, { name: 'Jinesh', age: 39 }];

const names = people.map((person) => person.name );

console.log(names);

// ## .filter

// Will return a data type of the same or smaller length

// The function is applied to each item, if the function returns true, the item is removed

const numbers = [1, 2, 3, 4, 5];
const isEven = (val) => val % 2 === 0;

const even = numbers.filter(isEven);
console.log(even);

const isOdd = (val) => !isEven(val);
const odd = numbers.filter(isOdd);
console.log(odd);

// Note how with functional methods we can use re-use our predicate function, this is the real value: Function composition! ❤️

// ## .reduce

// A reduce is fundamentally different as it preserves state as you iterate through your collection

// The return value of the function at each point is passed to the next

// This means you can create an aggregate value

// Sometimes referred to as `fold`

// We take each value and fold it onto / with the next one

const sumEven = numbers.reduce( 
    
    // Here, we're checking if it's even
    (agg, curr) => isEven(curr) 
        
    // If it is, we aggregate
        ? agg + curr 
        
        // If not we return the original
        : agg, 
0);

console.log(sumEven);