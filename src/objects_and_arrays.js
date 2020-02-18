// # Objects &amp; Arrays

// In JavaScript it's important to understand our two main types of representing data

// The object and the array

// ## Constructed vs Object Literal

// **Question:** What's the difference between

new Array();
new Object();

// and their counterpart:

[];
{
}

// **Answer:** Nothing, use the short version

// ## Objects vs Arrays

// **Question:** When would you use one over the other?

// **Answer:** Ordering. Arrays ensure order, Objects do not.

// ## Objects, a deep dive...

// ### Method 1: Dot notation

// By far the easiest way of assigning data to an object

const assignWithADot = {};
assignWithADot.name = 'Im a dot assignment';
console.log(assignWithADot);
// **Output:** ```{ name: 'Im a dot assignment' }```

// ### Method 2: Bracketed notation

// Bracketed notation allows you to assign dynamic variables to an object

const bracketedNotation = {};
bracketedNotation['name' + 1] = 'Im a dot assignment';
console.log(bracketedNotation);
// **Output:** ```{ name1: 'Im a dot assignment' }```

// ### Method 3: Computed property names

// But nicely, you can also do this with a shorthand.

// This is useful in functional programming and callbacks where you don't want to create an additional scope

const shortHandNotation = {
  ['name' + 2]: 'Im a dot assignment'
};
console.log(shortHandNotation);
// **Output:** ```{ name2: 'Im a dot assignment' }```

// ## Arrays, a deep dive...

// Arrays are actually implemented as types of objects, you can see this on it's prototype

// Which is why...

console.log(typeof new Array());

// But this doesn't matter too much, only when using `typeof` on an `Array`.

// ### Array Access

const horses = ['Arabian', 'Clydesdale', 'Shire', 'Shetland Pony'];

console.log(horses[1]);

console.log(horses[2]);
