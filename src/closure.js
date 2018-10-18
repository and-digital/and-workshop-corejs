// Closure

// ## What is a closure?

// A closure is referring to JS function scoping

// When a function is created it has access to it's own function scope

// But it also has access to all of the function scopes it is nested in.

// For example using the function keyword:

const add = function(a){
    return function(b){
        return a + b;
    }
};

const parent = add(1);

console.log(parent(2));

// Or using fat arrow syntax:

const subtract = (a) => (b) => a - b;

console.log(subtract(10)(5))

// ## Why is this useful?

// Take this example ... a basic express implementation

const express = {
    routes: [],
    middlewares: [],
    use: (callback) => {
        express.middlewares.push( callback );
    },
    get: (path, callback) => {
        express.routes.push({ path, callback });
    },
    execute: (pathToMatch) => {
        const path = express.routes.find( (routes) => routes.path === pathToMatch );
        express.middlewares.map( (middleware) => middleware() )
        path.callback();
    }
};

const middleware = (req, res) => {
    console.log('middleware!');
};

express.use(middleware)

express.get('/status', () => { 
    console.log('get status!');
});

express.execute('/status');