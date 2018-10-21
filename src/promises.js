// # Promises 

// Promises are a way to handle asyncronous behaviour in JavaScript

// Promises themselves are constructor functions

// So they're _just_ an object

// But, they have specific control flow, that makes them useful

// Understanding Promises is a pre-cursor to understanding `async/await`

// ## How to create a Promise

// A promise can be created in two ways

// **Example:** Creating a long-hand Promise.

// Long hand, like so:

// The promise constructuor is passed a function
// That function has two parameters (callbacks, actually)
// When `resolve` is called, the promise is resolved
// When `reject` is called, the promise is rejected
const queen = new Promise(function(resolve, reject){
    resolve('Im just a poor boy, I need no sympathy');
});

// ---

// **Example:** Creating a short-hand Promise.

// Or short hand...

// This promise is immediately resolved
const king = Promise.resolve("Easy come, easy go");

// This promise is immediately rejected
try {
    // Rejected promises with throw an error.
    const king = Promise.reject("Easy come, easy go");
} catch(e){
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
const gitHubData = Promise.resolve([{
    commit: "123csj43",
    author: "@codesMcGee"
}, {
    commit: "123csj43",
    author: "@codesMcGee"
}])

// The only way to get it out is to chain a `.then` onto it. 
gitHubData
    .then(data => {
        // **Output:** ```[{commit ... }]```
        console.log(data);
    });

// Notice how the `.then` has a single returned parameter `data` in this instance. 

// ---

// **Example:** A promise with the callback stored in a variable.

// Remember, callbacks don't have to be anonymous, you can also assign them to variables.
const doSomething = data => console.log(data);    

// **Output:** ```[{commit ... }]```
gitHubData
    .then(doSomething);

// TODO: Promise `.then` returning a (new) Promise

// TODO: Promise alternative methods `.finally`

// TODO: Promise exceptions with `.catch`

// TODO: Promise exceptions

// TODO: Promise libraries

// TODO: How to spot a promise

// TODO: Converting callbacks to promises

// TODO: The 3 states of promises (pending, fulfilled, rejected)