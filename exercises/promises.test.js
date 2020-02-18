//## Part 1: A basic promise
// Implement a `myFirstPromise` function which returns a promise
//If its successful the response should be "Yay!"
//If unsuccessful the response should be "Boo :("

//## Part 2: .Then
//Implement the function `rainbowConverter` which resolves  an array of colours
//Then loop over the colours, converting each colour from a string to an object
//The object should contain a 'colour' key and an 'id' key which is its index in the array
const colours = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet'
];

//## Part 3: Caught Promises
//Implement the function `caughtPromise` which rejects with an error object
//containing the message 'The promise rejected'

//## Part 4: Do it all again... with async/await!
//Implement `myFirstAsyncAwait`, `asyncAwaitRainbowConverter` and `caughtAsyncAwait`

describe('myFirstPromise', () => {
  test('should return "Yay!" if the promise resolves', async () => {
    const result = await myFirstPromise();
    expect(result).toEqual('Yay!');
  });

  test('should return "Boo :(" if the promise rejects', async () => {
    let error = false;
    try {
      await myFirstPromise();
    } catch (e) {
      error = e;
    }
    expect(error).toBeTruthy();
  });
});

describe('rainbowConverter', () => {
  test('should return an array of objects with id and colour', async () => {
    const result = await rainbowConverter();
    const expected = [
      { id: 0, colour: 'red' },
      { id: 1, colour: 'orange' },
      { id: 2, colour: 'yellow' },
      { id: 3, colour: 'green' },
      { id: 4, colour: 'blue' },
      { id: 5, colour: 'indigo' },
      { id: 6, colour: 'violet' }
    ];
    expect(result).toEqual(expected);
  });
});

describe('caughtPromise', () => {
  test('should throw an error with the message "The promise rejected"', async () => {
    try {
      await caughtPromise();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual('The promise rejected');
    }
  });
});

describe('myFirstAsyncAwait', () => {
  test('should return "Yay!" if the promise resolves', async () => {
    const result = await myFirstAsyncAwait();
    expect(result).toEqual('Yay!');
  });

  test('should return "Boo :(" if the promise rejects', async () => {
    let error = false;
    try {
      await myFirstAsyncAwait();
    } catch (e) {
      error = e;
    }
    expect(error).toBeTruthy();
  });
});

describe('asyncAwaitRainbowConverter', () => {
  test('should return an array of objects with id and colour', async () => {
    const result = await asyncAwaitRainbowConverter();
    const expected = [
      { id: 0, colour: 'red' },
      { id: 1, colour: 'orange' },
      { id: 2, colour: 'yellow' },
      { id: 3, colour: 'green' },
      { id: 4, colour: 'blue' },
      { id: 5, colour: 'indigo' },
      { id: 6, colour: 'violet' }
    ];
    expect(result).toEqual(expected);
  });
});

describe('caughtAsyncAwait', () => {
  test('should throw an error with the message "The promise rejected"', async () => {
    try {
      await caughtAsyncAwait();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual('The promise rejected');
    }
  });
});
