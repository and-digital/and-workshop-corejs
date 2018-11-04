
//  ## Classical vs functional

// A class in JavaScript is simply a fancy 💁 way of defining a constructor function. Using classes helps us to mimic code style of classical languages (but JS is not a classical language).

// When we write either a class or a constructor the convention is to uppercase the first letter. 

// Which is why we have the following objects like these...

// ```new Object();```

// ```new Promise()```

// TODO: How is a class related to a prototype?

// ## Classes are _sugar_

// A class is simply a fancy constructor

function PromiseAsConstructor () {
    this.whatAmI = "A constructed Promise!"
}

// **Output:** ```A constructed Promise!```
console.log((new PromiseAsConstructor()).whatAmI);

class PromiseAsClass {
    constructor() {
        this.whatAmI = "A classical Promise!"
    }
}

// **Output:** ```A classical Promise!```
console.log((new PromiseAsClass()).whatAmI);

// TODO: You must _new_ a class to get it's methods, unless you want it's static methods. Make reference to: (Array.isNumber)

// TODO: Class linking and constructors

// TODO: Example of creating a constructor chain with raw constructors and prototypes
