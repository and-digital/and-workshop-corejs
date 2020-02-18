// Rest/ Spread (sometimes called gather) is a powerful way of either unpacking an array, or spreading an array as function arguments.

// The _interesting_ part about rest/spread though is the fact that it always _copies_ the object and never mutates.

// The non-mutating nature of the rest/spread operator means our code will be less buggy and less prone to errors.

// Let's look at a few use-cases...

// ## Use case 1: Infinite arguments

// This is called a variadic function

const sum = (...args) => args.reduce((agg, curr) => agg + curr);

// **Output:** ```10```
console.log(sum(1, 2, 3, 4));

// ## Use case 2: Merging two objects

// Lets say we have a library module that takes a default configuration object.

// We'll want to "merge" or "blend" that object with the default options to create the options of the library.

// We can do this elegantly with our spread operator.

const library = params => {
  const defaultParams = {
    color: 'red',
    height: 10
  };
  const options = {
    ...defaultParams,
    ...params
  };

  return {
    options
  };
};

// **Output:** ```{ options: { color: 'blue', height: 10 } }```
console.log(library({ color: 'blue' }));

// ## Use case 3: Flattening two arrays

// If the item is an array, recursively call flatten, else append to the end

const flatten = arr =>
  arr.reduce(
    (flat, i) => (Array.isArray(i) ? [...flat, ...flatten(i)] : [...flat, i]),
    []
  );

// **Output:** ```[1, 2, 3, 4, 5, 6]```
console.log(flatten([1, 2, 3, [4, 5, 6]]));

// ## Use case 4: Get the "rest" of an array

// Taking an array and putting them into scope using destructuring.

const parseData = ([tom, dick, harry, ...numbers]) => ({
  tom,
  dick,
  harry,
  numbers
});

// **Output:** ```{ tom: 'tom', dick: 'dick', harry: 'harry', numbers: [1, 2, 3] }```
console.log(parseData(['tom', 'dick', 'harry', 1, 2, 3]));
