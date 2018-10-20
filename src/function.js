//  # Function

// A function is the encapsulation of behaviours

// ## Function definitions vs expressions

// * Only declarations are hoisted, expressions are interpreted when they need to be

// ## Function Signatures

// A function signature is the pattern the function expects you to implement
// For instance, the following function signature is: 
// * Expects a single parameter
// * If no parameter is passed, the assumed default value for the cat is ```Miggins```
const getAllTheCats = function(name = "Miggins") {
    return {
        name
    }
};

// ## Function Returning 

// A function returns `undefined` by default

const undefinedReturn = () => { }

console.log(undefinedReturn());

// ## Common function signatures

// The common interfaces that functions expose

// ### Infinite Arguments

// The following function signature takes infinite arguments

// This can be useful if you don't know how many arguments you are going to recieve

const add = (...args) => {
    return args.reduce( (prev, curr) => prev + curr );
};

// **Note:** Use this over the previous `arguments` property

console.log(add(1, 2, 3, 4))
console.log(add(1, 2))

// ### Object API (With defaults)

// This takes an object and extends the object with defaults

const setupToast = (options) => {
    defaults = {
        time: 1000,
        color: 'red'
    }

    return {
        ...defaults,
        ...options
    };
};

console.log(setupToast({ time: 1000 }))

// ### Curried functions

// A curried function is one that takes a function and returns a function

const prefix = (prefix) => (name) => `${prefix} ${name}`;

const mr = prefix('Mr');
const mrs = prefix('Mrs');
console.log(mr('John Brooks'))
console.log(mrs('Sarah Baker'))

// TODO: Anonymous vs named functions (variable definition is not the same as function definition)

// TODO: Anonymous functions and the call stack

// TODO: Memoize, throttle and debounce as curried functions

// TODO: Public and Private methods (maybe covered in design patterns?)

// TODO: Default function parameters

// TODO: Functions that don't take extra properties

// TODO: Recursive functions

// TODO: Partial application

// TODO: Best practices with functions