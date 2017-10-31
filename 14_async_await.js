//## GENERATOR
//a new type of function that does’t not behave with the run-to-completion behaviour

function* foo() {
  let x = 1;

  yield;

  return x;
}

const g = foo();

let n = g.next();
console.log(n); // { value: undefined, done: false }

n = g.next();
console.log(n); // { value: 1, done: true }

function* bar() {
  let x = 14;

  let y = (yield) * x;

  return y;
}

const g1 = bar();

let n1 = g1.next();
console.log(n1); // { value: undefined, done: false }

n1 = g1.next(3);
console.log(n1); // { value: 42, done: true }

//## GENERATOR + PROMISES

/* the iterator should listen for the promise to resolve (or reject)

then either resume the generator with the 
fulfilment message 

or throw an error into the generator with the rejection reason) */

function* getTotal() {
  let total = 0;

  try {
    const userInfo = yield loadUserInfo();
    const cartItems = yield loadCartItems();
    const exr = yield retrieveExchangeRates();
    total = calculateTotal(userInfo, cartItems, exr);
  } catch (error) {}

  return total;
}

//## ASYNC/AWAIT

const makeRequestP1 = () =>
  getJSON().then(data => {
    console.log(data);
    return 'done';
  });

const makeRequestA1 = async () => {
  console.log(await getJSON());
  return 'done';
};

/*
1 - Our function has the keyword async before it. 
The await keyword can only be used inside functions defined with async.
 Any async function returns a promise implicitly, and the resolve value of the promise will be whatever you return from the function (which is the string "done" in our case).

 await getJSON() means that the console.log call will wait until getJSON() promise resolves and print it value.
*/

const makeRequestP2 = () => {
  return getJSON().then(data => {
    if (data.needsAnotherRequest) {
      return makeAnotherRequest(data).then(moreData => {
        console.log(moreData);
        return moreData;
      });
    } else {
      console.log(data);
      return data;
    }
  });
};

const makeRequestA2 = async () => {
  const data = await getJSON();
  if (data.needsAnotherRequest) {
    const moreData = await makeAnotherRequest(data);
    console.log(moreData);
    return moreData;
  } else {
    console.log(data);
    return data;
  }
};

/*
You have probably found yourself in a situation where you call a promise1 and then use what it returns to call promise2, 
then use the results of both promises to call a promise3. 
Your code most likely looked like this
*/
const makeRequestP3 = () => {
  return promise1().then(value1 => {
    // do something
    return promise2(value1).then(value2 => {
      // do something
      return promise3(value1, value2);
    });
  });
};

const makeRequestA3 = async () => {
  const value1 = await promise1();
  const value2 = await promise2(value1);
  return promise3(value1, value2);
};
