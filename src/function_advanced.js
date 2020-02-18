// ### Infinite Arguments

// The following function signature takes infinite arguments

// This can be useful if you don't know how many arguments you are going to receive

const add = (...args) => {
  return args.reduce((prev, curr) => prev + curr);
};

// **Note:** Use this over the previous `arguments` property

console.log(add(1, 2, 3, 4));
console.log(add(1, 2));

// ### Object API (With defaults)

// This takes an object and extends the object with defaults

const setupToast = options => {
  defaults = {
    time: 1000,
    color: 'red'
  };

  return {
    ...defaults,
    ...options
  };
};

console.log(setupToast({ time: 1000 }));

// ### Curried functions

// A curried function is one that takes a function and returns a function

// Currying breaks down the idea that all arguments of a function must be supplied at once, this makes for expressive code.

const prefix = prefix => name => `${prefix} ${name}`;

const mr = prefix('Mr');
const mrs = prefix('Mrs');
console.log(mr('John Brooks'));
console.log(mrs('Sarah Baker'));
