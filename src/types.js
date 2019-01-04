
// ## Types

// Types are metadata for values, they help us understand the behaviour of the value and what we can do with it.

// Types have different behaviours

// For instance...

console.log("1" + "1");

console.log(1 + 1);

// The operator on a string or a boolean is _fundamentally different_.

// ## What is a primitive type?

// These are not objects and have no methods

// * **number** for numbers of any kind: integer or floating-point.
// * **string** for strings. 
// * **boolean** for true/false.
// * **null** for unknown values 
// * **undefined** for unassigned values – a standalone type that has a single value undefined.
// * **symbol** for unique identifiers.
// * **object** for more complex data structures.

// But, where is the array type? What about function?

// ## typeof 

// We can use the `typeof` operator to tell the difference between data types

// This allows us to implement error handling and/or different behaviour dependent on type

// **Question:** Should you always check data types inside functions? 

// **Answer:** Maybe, it's up to you. Sometimes a defensive guard statement is enough

const myFunction = (value) => {
    if((typeof value) != "string") {
        throw new Error('boom');
    }

    console.log("We good, we good");
};

myFunction("Hey");

try {
    myFunction(0);
} catch(e) {
    console.log(e);
}

// TODO: Explain why arrays are objects

// TODO: Coercion and primitive types

// TODO: Using types to ensure predictable code

// TODO: Types and the value / importance of testing