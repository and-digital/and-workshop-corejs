const R = require('ramda');

// # Syncronous Ramda 

// Take the following set of data

// Imagine you want to sum the ages of all the teenagers in the dataset

const names = [
    {
        age: 2,
        firstName: 'Stewie',
        lastName: 'Griffin'
    }, 
    {
        age: 10,
        firstName: 'Homer',
        lastName: 'Simpson'
    }, 
    {
        age: 14,
        firstName: 'Robert',
        lastName: 'Paulson'
    }, 
    {
        age: 15,
        firstName: 'Willie',
        lastName: 'Nelson'
    }
];

// ## Imperative

// ... This was hard to write 😭

const example1 = (names) => {
    let result = [];
    let total = 0;
    
    for(let i = 0; i < names.length; i++) {
        if(names[i].age > 12 && names[i].age < 20) {
            result.push(names[i])
        }
    }

    for(let i = 0; i < result.length; i++) {
        total = total + result[i].age;
    }

    return total;
}

console.log(example1(names));

// ## Semi Functional

// Not that functional since the data is blended in, as is the notion of the age property.

const example2 = (names) => 
    names.filter(({ age }) => age > 12 && age < 20)
        .map((name) => name.age)
        .reduce( (prev, curr) => prev + curr)

console.log(example2(names))

// ## Point Free Functional

// Now our function doesn't know anything at all about the data, it's all behaviour.
    
const example3 = (prop) => 
    R.compose(
        R.reduce(R.add, 0),
        R.filter(R.both(R.lt(12), R.gt(20))),
        R.map(R.prop(prop))
    );
console.log(example3('age')(names));


// # asyncronous Ramda 

const promiseOne = new Promise((resolve)=> {
    setTimeout(function(){
        resolve(20);
    }, 200)
});

const promiseTwo = new Promise((resolve)=> {
    setTimeout(function(){
        resolve(20);
    }, 200)
});

(async ()=> {
    const result = await Promise.all([ 
        promiseOne, 
        promiseTwo, 
        promiseTwo 
    ])
    console.log(R.sum(result))
})()

