// # Objects &amp; Arrays

// In JavaScript it's important to understand our two main types of representing data

// The object and the array

// But, what's the difference? 

// ## Objects & Primitives

// An easy way to remember a primitive is that the word means an early stage of development. 

// So a primitive can be considered a "primitive object".

// There are 5 types of primitive:
// * undefined
// * null
// * boolean
// * string
// * number

// A primitive is kinda like it's object counterpart, but you just can't assign new properties to it. 

// ## Assigning data to an object

// ### Method 1: Dot notation

// By far the easiest way of assigning data to an object

const assignWithADot = {};
assignWithADot.name = "Im a dot assignment";
console.log(assignWithADot);
// **Output:** ```{ name: 'Im a dot assignment' }```

// ### Method 2: Bracketed notation

// Bracketed notation allows you to assign dynamic variables to an object

const bracketedNotation = {};
bracketedNotation['name' + 1] = "Im a dot assignment";
console.log(bracketedNotation);
// **Output:** ```{ name1: 'Im a dot assignment' }```

// ### Method 3: Computed property names

// But nicely, you can also do this with a shorthand.

// This is useful in functional programming and callbacks where you don't want to create an additional scope

const shortHandNotation = {
    ['name' + 2]: "Im a dot assignment"
};
console.log(shortHandNotation);
// **Output:** ```{ name2: 'Im a dot assignment' }```

// TODO: Literal vs Constructed form

// TODO: Using objects as modules

// TODO: Functions in arrays / objects

// TODO: Object inheritance 