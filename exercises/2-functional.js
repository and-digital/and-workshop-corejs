// Your second exercise is to build some object manipulation functions

// ## Implement .reduce
// Accepts an array of values, a callback and an optional initial value
// Should apply the callback to each item in the array of values and return the output from the final call
// The callback accepts the output from the previous call (or the initial value), and the item from the array
// If the initial value isn't defined, then the first item from the array of values should be used

// ## Implement .map
// Accepts an array of values and a callback
// Should apply the callback to each item in the array of values and return a new array with the results of each of those calls
// The callback accepts the current item from the array

// ## Implement .defaults
// Takes two arguments, an input object and a set of defaults
// Should return a new object with the values from both objects merged together
// If both objects have an item for the same key, the value from the input object should take precidence

// This is your lodash library. Add your own implementation for each method
module.exports = {
  reduce: (inputArray, callback, initialValue) => {},
  map: (inputArray, callback) => {},
  defaults: (inputObject, defaults) => {},
};
