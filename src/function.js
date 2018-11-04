//  # Function

// A function is the encapsulation of behaviours

// ## Function definitions vs expressions

// * Only declarations are hoisted, expressions are interpreted when they need to be

// ## Function Signatures

// A function signature is the pattern the function expects you to implement.

// I introduce this word as it's useful when discussing functions, you should constantly think of your function signature. 

// Thinking deeply about function signatures and your API's will help you construct more readable code. This is where TDD can also help us. It often makes more sense to define your behaviours and function signatures before you start coding. 

// For instance, the following function signature is: 
// * Expects a single parameter
// * If no parameter is passed, the assumed default value for the cat is ```Miggins```

const getAllTheCats = function(name = "Miggins") {
    return {
        name
    }
};

// ## Args vs Params

// What's the difference? 

// Arguments are the values _passed in_ to a function, parameters are what the function _receives_.

// Making the distinction allows us to discuss code more easily. 

// The number of arguments a function requires is called it's _arity_. 

// A function that only takes a single argument is a unary function. 

const unary = x => x;

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

// TODO: Anonymous vs named functions (variable definition is not the same as function definition)

// TODO: Regular call is sugar for `.call`

// TODO: Function invocation (.call, .apply, .bind, with parenthesis)

// TODO: Anonymous functions and the call stack

// TODO: Memoize, throttle and debounce as curried functions

// TODO: Public and Private methods (maybe covered in design patterns?)

// TODO: Difference in method vs function

// TODO: Default function parameters

// TODO: Functions that don't take extra properties

// TODO: Recursive functions

// TODO: Partial application

// TODO: Best practices with functions

// ### Curried functions

// A curried function is one that takes a function and returns a function

// Currying breaks down the idea that all arguments of a function must be supplied at once, this makes for expressive code.

const prefix = (prefix) => (name) => `${prefix} ${name}`;

const mr = prefix('Mr');
const mrs = prefix('Mrs');
console.log(mr('John Brooks'))
console.log(mrs('Sarah Baker'))