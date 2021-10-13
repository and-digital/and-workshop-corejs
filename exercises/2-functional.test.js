// Your second exercise is to rebuild the lodash utility with the below methods.
// You cannot import lodash - build it all yourself!

// Tests have been written for you to test your lodash utility
// Run these tests using the command `jest --watch exercises/2-functional.test`


// ## Implement .reduce
// Should take an array of values and apply the callback
// **Bonus Point:** Do this with recursion
// (https://lodash.com/docs/4.17.10#reduce)

// ## Implement .map
// Now, implement .map
// **Bonus Point:** Do this whilst _using reduce_
// (https://lodash.com/docs/4.17.10#map)

// ## Implement .defaults
// Takes two arguments, an original object and a set of defaults
// Returns the amalgamation of both
// (https://lodash.com/docs/4.17.10#defaults)

// ####################################################################
// ###  Extension - Implement the below methods and relevant tests  ###
// ####################################################################

// ## Implement .pick
// **Bonus Point:** Do this whilst _using reduce_
// Implement a pick function that creates an object composed of the picked properties
// (https://lodash.com/docs/4.17.10#pick)

// ## Implement .throttle
// Implement a throttle (that doesn't queue, but drops if the previous throttle is running)
// (https://lodash.com/docs/4.17.10#throttle)

// ## Implement .memoize
// Should pick a property from an object
// (https://lodash.com/docs/4.17.10#memoize)


// This is your lodash library. Add your own implementation for each method
const _ = {
    reduce: undefined, 
    map: undefined,
    defaults: undefined,
    pick: undefined,
    throttle: undefined,
    memoize: undefined
}

// These are the unit tests written to test your lodash utility. 
// You will not need to touch these.
describe('_.reduce', () => {
  test('Reduces an array without a default', () => {
    const result = _.reduce([{ age: 12 }, { age: 13 }], (prev, item) => {
      prev = prev + item.age;
      return prev;
    });
    expect(result).toEqual(25);
  });

  test('Reduces an array, starting with 10', () => {
    const result = _.reduce(
      [{ age: 12 }, { age: 13 }],
      (prev, item) => {
        prev = prev + item.age;
        return prev;
      },
      10
    );
    expect(result).toEqual(35);
  });

  test('Does not mutate original array', () => {
    const original = [{ age: 12 }, { age: 13 }];
    const start = 0;
    const result = _.reduce(
      original,
      (prev, item) => {
        prev = prev + item.age;
        return prev;
      },
      start
    );

    expect(original).toEqual([{ age: 12 }, { age: 13 }]);
    expect(result).toEqual(25);
    expect(start).toEqual(0);
  });
});

describe('_.map', () => {
  test('Can concatenate a string as part of a map', () => {
    expect(_.map(['Graham', 'Sarah', 'Bob'], name => `The ${name}`)).toEqual([
      'The Graham',
      'The Sarah',
      'The Bob'
    ]);
  });
  test('Can map an array with data objects', () => {
    expect(_.map([{ name: 'Lou' }], person => person.name)).toEqual(['Lou']);
  });
  test('does not mutate', () => {
    const originalValues = ['Graham', 'Sarah', 'Bob'];
    expect(_.map(originalValues, name => `The ${name}`)).toEqual([
      'The Graham',
      'The Sarah',
      'The Bob'
    ]);
    expect(originalValues).toEqual(['Graham', 'Sarah', 'Bob']);
  });
});

describe('_.defaults', () => {
  test('Returns an object', () => {
    const result = _.defaults({}, {});
    expect(result).toEqual({});
  });
  test('Does not mutate original value', () => {
    const original = {};
    const result = _.defaults(original, {});
    expect(result).not.toBe(original);
  });
  test('Gives precedence to the original object, not default', () => {
    const result = _.defaults({ a: 1 }, { a: 2 });
    expect(result).toEqual({ a: 1 });
  });
});

describe('_.pick', () => { 
  test('Returns the correct value, with one chosen property', () => {
    const testObject = {
      firstArg: 'first',
      secondArg: 'second'
    }

    expect(_.pick(testObject,['secondArg'])).toEqual({ secondArg: 'second' })
  })

  test('Returns the correct values, when more than one property is chosen', () => {
    const testObject = {
      firstArg: 'first',
      secondArg: 'second',
      thirdArg: 'third'
    }

    expect(_.pick(testObject,['secondArg','thirdArg'])).toEqual({ secondArg: 'second',thirdArg: 'third' })
  })

  test('Returns an empty object if property does not exist', () => {
    const testObject = {
      firstArg: 'first',
      secondArg: 'second',
      thirdArg: 'third'
    }

    expect(_.pick(testObject,['tenthArg'])).toStrictEqual({})
  })
})

describe('_.throttle', () => {
  test('Returns correct result, twice', done => {
    const click = jest.fn().mockReturnValue(3);
    const throttledClick = _.throttle(click, 100);

    expect(throttledClick()).toBe(3);
    expect(click).toHaveBeenCalledTimes(1);

    expect(throttledClick()).toBe(undefined);
    expect(click).toHaveBeenCalledTimes(1);

    setTimeout(() => {
      expect(throttledClick()).toBe(3);
      expect(click).toHaveBeenCalledTimes(2);
      done();
    }, 500);
  });
});

describe('_.memoize', () => {
  test('Returns correct result, twice', () => {
    const testObject = {
      add: (first, second) => first + second
    };

    const spy = jest.spyOn(testObject, 'add');
    const memoizedFunction = _.memoize(spy);

    expect(memoizedFunction(2, 2)).toEqual(4);
    expect(spy).toHaveBeenCalledTimes(1);

    expect(memoizedFunction(2, 2)).toEqual(4);
    expect(spy).toHaveBeenCalledTimes(1);

    expect(spy).not.toHaveBeenCalledTimes(2);
  });
});