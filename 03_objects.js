//## OBJECT

let myObj = {
  key: 'value'
  // ...
};

myObj = new Object();
myObj.key = 'value';

//## STRING

let strPrimitive = 'I am a string';
typeof strPrimitive; // "string"
strPrimitive instanceof String; // false

console.log(strPrimitive.length); // 13
console.log(strPrimitive.charAt(3)); // "m"
console.log(strPrimitive.includes('a')); // true

let strObject = new String('I am a string');
typeof strObject; // "object"
strObject instanceof String; // true

// it's a primitive literal and immutable value.
// To perform operations on it, such as checking its length, accessing its individual character contents, etc, a String object is required.
// the language automatically coerces a "string" primitive to a String object when necessary, which means you almost never need to explicitly create the Object form.
// It is strongly preferred by the majority of the JS community to use the literal form for a value, where possible, rather than the constructed object form.

//## NUMBERS

let numPrimitive = 5;
typeof numPrimitive; // "number"
numPrimitive instanceof Number; // false

let numObject = new Number(5);
typeof numObject; // "object"
numObject instanceof Number; // true

console.log(numPrimitive.toString()); // "5"

// null and undefined have no object wrapper form, only their primitive values.
// By contrast, Date values can only be created with their constructed object form, as they have no literal form counter-part.

//## OBJECT PROPERTY ACCESS

/* In objects, property names are always strings. 
If you use any other value besides a string (primitive) as the property, it will first be converted to a string. 

This even includes numbers, which are commonly used as array indexes, so be careful not to confuse the use of numbers between objects and arrays. 

To access the value at the location a in myObject, we need to use either the . operator or the [ ] operator. 

The .a syntax is usually referred to as "property" access, whereas the ["a"] syntax is usually referred to as "key" access. 

In reality, they both access the same location, and will pull out the same value, 2, so the terms can be used interchangeably. We will use the most common term, "property access" from here on.

The main difference between the two syntaxes is that the . operator requires an Identifier compatible property name after it, whereas the [".."] syntax can take basically any UTF-8/unicode compatible string as the name for the property. 
To reference a property of the name "Super-Fun!", for instance, you would have to use the ["Super-Fun!"] access syntax, as Super-Fun! is not a valid Identifier property name.

With [..] you can have computed property name
*/

myObject = {
  a: 2
};

myObject.a; // 2

myObject['a']; // 2

/*
//## Property vs. Method
Some developers like to make a distinction when talking about a property access on an object, if the value being accessed happens to be a function. 
Because it's tempting to think of the function as belonging to the object, 
and in other languages, functions which belong to objects (aka, "classes") are referred to as "methods", it's not uncommon to hear, "method access" as opposed to "property access".
The specification makes this same distinction, interestingly.
Technically, functions never "belong" to objects, so saying that a function that just happens to be accessed on an object reference is automatically a "method" seems a bit of a stretch of semantics.
It is true that some functions have this references in them, and that sometimes these this references refer to the object reference at the call-site. 
But this usage really does not make that function any more a "method" than any other function, as this is dynamically bound at run-time, at the call-site, and thus its relationship to the object is indirect, at best.
Every time you access a property on an object, that is a property access, regardless of the type of value you get back. If you happen to get a function from that property access, it's not magically a "method" at that point. 
There's nothing special (outside of possible implicit this binding as explained earlier) about a function that comes from a property access.


The safest conclusion is probably that "function" and "method" are interchangeable in JavaScript.

*/

function foo() {
  console.log('foo');
}

const someFoo = foo; // variable reference to `foo`

const myObject = {
  someFoo: foo
};

foo; // function foo(){..}

someFoo; // function foo(){..}

myObject.someFoo; // function foo(){..}

function Person(name, lastname, age) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
}

const josh = new Person('josh', 'smith', 24);

console.log(josh); // Person { name: 'josh', lastname: 'smith', age: 24 }
console.log(josh.name); //josh
console.log(typeof josh); //object
console.log(josh instanceof Person); //true

console.log(Person.toString()); //function Person(name, lastname, age) { this.name = name; this.lastname = lastname; this.age = age;}
console.log(typeof Person); // function
console.log(Person instanceof Function); // true

//## PROPERTY DESCRIPTORS

var myObject = {};

Object.defineProperty(myObject, 'a', {
  value: 2,
  writable: true, //cannot change
  configurable: true, // can chenge this settings
  enumerable: true // for..in allowed or not
});

myObject.a; // 2

//## Objects examples

const baz = {
  x: 2,
  y: 'ciao',
  //a function!
  log: function() {
    console.log('baz');
  },
  // another object literal!
  bar: {
    x: 2,
    z: 'brill'
  }
};
