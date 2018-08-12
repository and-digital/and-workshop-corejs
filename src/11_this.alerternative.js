const anExampleObject = {
    name: "A string attached to the object!",
    methodThatReturnsThisName: function () {
        return this.name;
    }
};

const invoke = function (func)  {
    return func();
}

// Just call the function as part of the object
console.log(anExampleObject.methodThatReturnsThisName());

// What about if we move that function to a variable
let cacheFunctionInVariable = anExampleObject.methodThatReturnsThisName;
console.log(cacheFunctionInVariable());

// What if we explictly bind the context? 
console.log(cacheFunctionInVariable.bind(anExampleObject)());

// Does that modify the original variable?
console.log(cacheFunctionInVariable());

// Okay, what about this?
cacheFunctionInVariable = anExampleObject.methodThatReturnsThisName.bind(anExampleObject);
console.log(cacheFunctionInVariable());

// But what about a function that takes a callback?
console.log(invoke(anExampleObject.methodThatReturnsThisName))