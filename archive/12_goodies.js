//# DESTRUCTURING

function getData() {
  return {
    message: 'product list',
    products: [
      {
        name: 'car'
      },
      {
        name: 'bycicle'
      },
      {
        name: 'boat'
      },
      {
        name: 'plane'
      }
    ]
  };
}

let message1 = getData().message;
let products1 = getData().products;

let { message, products } = getData();
console.log(message);
console.log(products);

let [fruit1, fruit2, fruit3] = 'banana, strawberry, lemon'.split('\n');

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

//# SPREAD
/*
Spread syntax allows an iterable such as an array expression or string to be expanded 
in places where zero or more arguments (for function calls) or elements (for array literals) are expected, 
or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
function myFunction(x, y, z) {}
*/

function myFunction(x, y, z) {}

let arr = [0, 1, 2];
myFunction.apply(null, arr);

myFunction(...arr);

const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);

const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];

const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // like arr.slice()
arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected

const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];

//Object literals
/* Shallow-cloning (excluding prototype) or merging of objects is now possible 
using a shorter syntax than Object.assign(). */

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }

//# DEFAULT
function doSmth(a, b = 1, c) {}

//# REST
// Before rest parameters, the following could be found:
function f(a, b) {
  var args = Array.prototype.slice.call(arguments, f.length);
}

//Now:
function f(a, b, ...args) {}

// combining all of them
function map([head, ...tail], fn) {
  if (head === undefined && !tail.length) return [];

  if (tail.length === 0) {
    return [fn(head)];
  }

  return [fn(head)].concat(map(tail, fn));
}

let newArray = map([1, 2, 3], e => e + 1);

console.log(newArray); // [ 2, 3, 4 ]
