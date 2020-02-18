// # Promises

// Promises are a way to handle asynchronous behaviour in JavaScript

// Promises themselves are constructor functions

// So they're _just_ an object

// But, they have specific control flow, that makes them useful

// Understanding Promises is a pre-cursor to understanding `async/await`

// ## How to create a Promise

// A promise can be created in two ways

// **Example:** Creating a long-hand Promise.

// Long hand, like so:

// The promise constructor is passed a function
// That function has two parameters (callbacks, actually)
// When `resolve` is called, the promise is resolved
// When `reject` is called, the promise is rejected
const queen = new Promise(function(resolve, reject) {
  resolve('Im just a poor boy, I need no sympathy');
});

// ---

// **Example:** Creating a short-hand Promise.

// Or short hand...

// This promise is immediately resolved
const king = Promise.resolve('Easy come, easy go');

// This promise is immediately rejected
try {
  // Rejected promises with throw an error.
  const king = Promise.reject('Easy come, easy go');
} catch (e) {
  // **Output:** ```Easy come, easy go.```
  console.log(e);
}

// Note: When resolving or rejecting a promise, you can _only_ pass one value.

// Pass an array if you like (you can spread it back out), but you can only return one value and one value only.

// ## .then

// The only way to get a resolved value out of a promise is to "chain" a `.then` onto it.

// A `.then` function takes a callback, which can **only** have one parameter.

// **Example:** Getting data out of a promise

// Let's imagine we've called an API which returns a promise of some data.
const gitHubData = Promise.resolve([
  {
    commit: '123csj43',
    author: '@codesMcGee'
  },
  {
    commit: '123csj43',
    author: '@codesMcGee'
  }
]);

// The only way to get it out is to chain a `.then` onto it.
gitHubData.then(data => {
  // **Output:** ```[{commit ... }]```
  console.log(data);
});

// Notice how the `.then` has a single returned parameter `data` in this instance.

// ---

// **Example:** A promise with the callback stored in a variable.

// Remember, callbacks don't have to be anonymous, you can also assign them to variables.
const doSomething = data => console.log(data);

// **Output:** ```[{commit ... }]```
gitHubData.then(doSomething);

// A `.then` always wraps the result in a `new Promise` so that you can call `.then` forever on this result. But, it's a new Promise.

// ## Promise return values

// Promises work heavily with return values, this is a *very common gotcha*

// A consuming function _must_ have access to the Promise in order to understand when it is returned.

// This is common to fail to recognise this when a function expects a promise, such as in a jest test.

// **Question:** Will the following work?

test('Calls the server', () => {
  axios.get('/users/:123').then(data => {
    expect(data.user).toEqual('Trevor');
  });
});

// **Answer:** Probably not, it could work intermittently.

// ## Promise Spec

// There are some differences in Promises specifications.

// There is a standard [Promise spec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) but not all libraries will implement the same behaviour.

// Some Promise libraries, will swallow unhandled exceptions, unless a `.catch` is provided.

// ## .catch

// Errors that are thrown in a Promise will go down the Promise 'chain'. If no `.catch` is provided the Promise usually throws an unhandled exception.

// It is generally best practice to always add a `.catch` to your promises.

// ## Promisification

// If you're working with a callback library you can easily convert it to a Promise

// You can just wrap the callback

return new Promise(function(resolve, reject) {
  callback(param, function(err, data) {
    if (err !== null) reject(err);
    else resolve(data);
  });
});

// Alternatively, node for instance has it's own Promisification utility

const util = require('util');
const fs = require('fs');
const stat = util.promisify(fs.stat);
