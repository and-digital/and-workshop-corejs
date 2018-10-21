// # Pass by reference / pass by value 

// ## What's the difference? 

// Pass by reference is when a reference to an original object in memory is given to a function.

// Pass by value is when a value is passed to a function as a copy, not as a pointer to the original in memory value.

// **Example:** A function that mutates the original data object.
const updateAge = (person) => {
    person.age = person.age + 1;
    return person;
};

// Let's create an object in memory.
const sandra = { name: 'sandra', age: 22 };

// And then let's pass the object to our update function.
updateAge(sandra);

// **Output:** ```{ name: 'sandra', age: 23 }```
console.log(sandra);

// As you can see, the original object itself was modified. 

// **Example:** Ensuring immutability
const updateAgeImmutable = (person) => {
    const copy = { ...person };
    copy.age = copy.age + 1;
    return copy;
};

// Let's create an object in memory.
const dorianGray = { name: 'dorianGray', age: 50 };

// And then let's pass the object to our update function.
updateAgeImmutable(dorianGray);

// **Output:** ```{ name: 'dorianGray', age: 50 }```
console.log(dorianGray);

// Here, we can see the value of the object hasn't changed, that's because we've created a new reference in memory.

// TODO —> Mutating functions 

// Read through this —> https://doesitmutate.xyz/