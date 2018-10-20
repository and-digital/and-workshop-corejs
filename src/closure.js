// Closure

// ## What is a closure?

// A closure is related to scoping within JS (functional scope)

// When a function is _created_ it has access to it's own function scope.

// It _also_ has access to all of the function scopes it is nested in.

// The following is an example of a closure using the function keyword

const add = function(a){
    return function(b){
        return a + b;
    }
};

const parent = add(1);

console.log(parent(2));

// And this is the same(ish) function, but with fat arrow syntax

const subtract = (a) => (b) => a - b;

console.log(subtract(10)(5))

// Okay, but this is a _little_ abstract, right?

// So let's look at a real world application of closures

// ## Why is this useful?

// Take this example ... a basic express-like implementation

// Express is a simple HTTP server wrapper for node.js

// The following is a small mock implementation of express (with some details omitted for simplicity)

const express = {
    routes: [],
    use: (callback) => {
        express.middlewares.push( callback );
    },
    get: (path, callback) => {
        express.routes.push({ path, callback });
    },
    execute: (pathToMatch, body) => {
        const req = { pathToMatch, body };
        const path = express.routes.find( (routes) => routes.path === pathToMatch );
        return path.callback(req);
    }
};

// So, lets go ahead and implement an express endpoint...

// ### Attempt 1

// **Question:** What do you think could be improved in this code?

express.get('/login', (req) => {

    const allowedUsers = ["Tamar"];

    if(allowedUsers.includes(req.body.username)) {
        return 'Awesome, youre in!';
    } else {
        return 'Get lost!';
    }

});

console.log(
    express.execute('/login', { username: "Tamar" }),
    express.execute('/login', { username: "NotTamar" })
);

// **Answer:** 
// - If you ever want to move away from REST / HTTP, your login function is heavily coupled to express
// - We're not abstracting away our login function

// ### Attempt 2

// Now, rather than passing a function directly to our express implementation we're using an interim function `createHTTPEndpoint` that inverts the control of our function and abstracts away the HTTP element of our server

// This is advantageous as it would allow us to easily move away from HTTP as our server, and use some other service integration pattern.

const login = (username) => {

    const allowedUsers = ["Tamar"];

    if(allowedUsers.includes(username)) {
        return 'Awesome, youre in!';
    } else {
        return 'Get lost!';
    }

};

const createHTTPEndpoint = ({ businessLogic, inputMap }) => {
    return (req) => {
        const inputMapOutcome = inputMap(req);
        return businessLogic(inputMapOutcome);
    }
};

const inputMap = (req) => req.body.username;

express.get('/login2', createHTTPEndpoint({ 
    businessLogic: login, 
    inputMap
}));

const request1 = express.execute('/login2', { username: "Tamar" });
console.log(request1);

const request2 = express.execute('/login2', { username: "NotTamar" });
console.log(request2);


// Now you can see our login function only takes username, it doesn't know about a request object (HTTP specific).

// If we moved away from HTTP, we could shift our login function easily, and re-implement a new input mapper.

// ## The quintessential closure example

// What will this return?

const getFunctions = function() {
    let funcs = [];
   
    for (var i = 0; i < 3; i++) {
      funcs[i] = function() {
        return `I am index ${i}!`;
      };
    }
    return funcs;
};
   
const funcs = getFunctions();
console.log(funcs[0]())
console.log(funcs[1]())
console.log(funcs[2]())

// Why does this happen? 

// Because a function stores it's closure when it's _created_