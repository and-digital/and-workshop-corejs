// # Truthy / Falsey

// ## The `!!` operator

// We sometimes see the double exclamation operator

// This simply coerces a value into either true/false, it's useful for turning values such as `undefined` or `null` or empty object into their boolean counterparts, for simplicity.

// ## What do you think the following will return?

console.log(!!{});

console.log(!![]);

console.log(!!'true');

console.log(!!'false');

console.log(!!'0');

console.log(!!1);

console.log(!!new Boolean(false));
console.log(!!false);

console.log(!!undefined);
console.log(!!-1);
console.log(!!null);

console.log(!!'');

console.log(!!0);

// **Question:** What's the difference between null and undefined?

// ## Loose, vs strict equality

// **Question:** What are the differences between:

console.log(0 == '0');
console.log(0 === '0');

// **Question:** What's the difference between `==` and `===`

// **Answer:** `==` is looser about type checking.

// **Question:** So which should you use?

// **Answer:** Always use `===` strict equality — just cast the types if you need, be explicit (and test)!
