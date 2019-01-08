
const _ = {
    reduce: function (data, operation, start = 0) {
        // ## Implement .reduce
        // Should take an array of values and apply the callback
        // **Bonus Point:** Do this with recursion
        // (https://lodash.com/docs/4.17.10#reduce)

        let result = start;

        for (let i = 0; i < data.length; i++) {
            result = operation(result, data[i]);
        }

        return result;
    },
    map: function (collection, callback) {
        // ## Implement .map
        // Now, implement .map
        // **Bonus Point:** Do this whilst _using reduce_
        // (https://lodash.com/docs/4.17.10#map)

        return _.reduce(collection, (prev, ...args) => ([...prev, callback(...args)]), []);
    },
    pick: function (object, prop) {
        // ## Implement .pick
        // Should pick a property from an object
        // (https://lodash.com/docs/4.17.10#pick)

        return object[prop];
    },

    partialRight: function (func, ...partialRightArgs) {
        // ## Implement .partialRight
        // Should apply the arguments to the right of the original function
        // (https://lodash.com/docs/4.17.10#partialRight)

        return (...originalArgs) => func(...originalArgs, ...partialRightArgs);
    },

    memoize: function (func) {
        // ## Implement .memoize
        // Should pick a property from an object
        // (https://lodash.com/docs/4.17.10#memoize)

        const store = [];
        const cacheResult = (args, result) => { store.push({ args, result }); return result; };
        const findInStore = (props) => store.find(entry => entry.args.every((arg, index) => arg == props[index]));

        return (...props) => findInStore(props) ? findInStore(props).result : cacheResult(props, func(...props))
    },

    defaults: function(original, defaults){
        // ## Implement .defaults
        // Takes two arguments, an original object and a set of defaults
        // Returns the amalgamation of both
        // (https://lodash.com/docs/4.17.10#defaults)

        return {
            ...defaults,
            ...original,
        }
    },

    throttle: function(fn, delay){
        // ## Implement .throttle
        // Implement a throttle (that doesn't queue, but drops if the previous throttle is running)
        // (https://lodash.com/docs/4.17.10#throttle)

        let lastCall = 0;
        return (...args) => {
          const now = (new Date).getTime();
          if (now - lastCall < delay) return;
          lastCall = now;
          return fn(...args);
        }
    },

    curry: function curry (f){
        // ## Implement .curry
        // Implement a function that curries the function given to it
        // (https://lodash.com/docs/4.17.10#curry)
        
        return function currify(...args) {
            return args.length >= f.length ?
              f.apply(null, args) :
              currify.bind(null, ...args)
          }
    }
};

describe('_.map', () => {
    test('Can concatenate a string as part of a map', () => {
        expect(
            _.map(['Graham', 'Sarah', 'Bob'], (name) => `The ${name}`)
        ).toEqual(
            ['The Graham', 'The Sarah', 'The Bob']
        );
    });
    test('Can map an array with data objects', () => {
        expect(
            _.map([{ name: 'Lou' }], (person) => person.name)
        ).toEqual(
            ['Lou']
        );
    });
    test('does not mutate', () => {
        const originalValues = ['Graham', 'Sarah', 'Bob'];
        expect(_.map(originalValues, (name) => `The ${name}`)).toEqual(['The Graham', 'The Sarah', 'The Bob']);
        expect(originalValues).toEqual(['Graham', 'Sarah', 'Bob']);
    });
});

describe('_.reduce', () => {

    test('Reduces an array without a default', () => {

        // The default initial value of reduce is ... 0
        const result = _.reduce([{ age: 12 }, { age: 13 }], (prev, item) => { prev = prev + item.age; return prev; });
        expect(result).toEqual(25);
    });

    test('Reduces an array, starting with 10', () => {

        // But, we can override the default
        const result = _.reduce([{ age: 12 }, { age: 13 }], (prev, item) => { prev = prev + item.age; return prev; }, 10);
        expect(result).toEqual(35);
    });

    test('Does not mutate original array', () => {
        const original = [{ age: 12 }, { age: 13 }];
        const start = 0;
        const result = _.reduce(original, (prev, item) => { prev = prev + item.age; return prev; }, start);

        // And, as always, reduce should be non-mutating
        expect(original).toEqual([{ age: 12 }, { age: 13 }]);
        expect(result).toEqual(25);
        expect(start).toEqual(0);
    });
});

describe('_.pick', () => {
    test('Can pick from a mapped array', () => {
        expect(

            // Now, we'll remove our callback logic, in favour of a generic pick method
            _.map([{ name: 'Lou' }], (person) => _.pick(person, 'name'))

        ).toEqual(
            ['Lou']
        );
    });
});

describe('_.partialRight', () => {
    test('Can partially apply to the right of a function', () => {
        expect(

            // Now, we'll remove our anonymous function completely
            _.map([{ name: 'Lou' }], _.partialRight(_.pick, 'name'))

        ).toEqual(
            ['Lou']
        );
    });
});

describe('_.memoize', () => {
    test('Returns correct result, twice', () => {

        // Store this as an object, so that jest can mock it
        const testObject = {
            add: (first, second) => first + second
        };

        // Now intercept the function with a spy, so we can check how often it's called
        const spy = jest.spyOn(testObject, 'add');
        const memoizedFunction = _.memoize(spy);

        // This is the first call of the function, so the mock _will_ be called.
        expect(memoizedFunction(2, 2)).toEqual(4);
        expect(spy).toHaveBeenCalledTimes(1);

        // We expect it to be the same result, but this time, it'll be from cache.
        expect(memoizedFunction(2, 2)).toEqual(4);
        expect(spy).toHaveBeenCalledTimes(1);

        // It won't be called twice, now that it's memoized.
        expect(spy).not.toHaveBeenCalledTimes(2);
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
        const result = _.defaults({ a : 1 }, { a: 2 });
        expect(result).toEqual({ a: 1 });
    });
});

describe('_.throttle', () => {
    test('Returns correct result, twice', (done) => {
        const click = jest.fn().mockReturnValue(3);
        const throttledClick = _.throttle(click, 100);
    
        // If we run the throttle, it should return and the mock is called
        expect(throttledClick()).toBe(3);
        expect(click).toHaveBeenCalledTimes(1);

        // Function won't be called, so we won't compute and the return is undefined
        expect(throttledClick()).toBe(undefined);
        expect(click).toHaveBeenCalledTimes(1);

        // If we want and call again in the future, it should work
        setTimeout(() => {
            expect(throttledClick()).toBe(3);
            expect(click).toHaveBeenCalledTimes(2);
            done();
        }, 500);
    });
});

describe('_.curry', () => {
    test('Currys a one argument function', () => {
        
        // Setup the test
        const inner = jest.fn();
        const outer = (a) => inner(a);
        const curriedFunction = _.curry(outer);
        
        // Partially apply the first argument
        const appliedCurriedFunction = curriedFunction('first');
        
        // Call the function
        expect(inner).toHaveBeenCalledWith('first')
        
    });
    test('Currys a two argument function', () => {

        // Setup the test
        const inner = jest.fn();
        const outer = (a, b) => inner(a, b);
        const curriedFunction = _.curry(outer);
        
        // Partially apply the two arguments separately
        const appliedCurriedFunction = curriedFunction('first')('second');
        
        // Call the function
        expect(inner).toHaveBeenCalledWith('first', 'second')
        
    });

    test('Takes two arguments at once', () => {
        
        // Setup the test
        const inner = jest.fn();
        const outer = (a, b, c) => inner(a, b, c);
        const curriedFunction = _.curry(outer);
        
        // Partially apply the first argument
        const appliedCurriedFunction = curriedFunction('first')('second', 'third');
        
        // Call the function
        expect(inner).toHaveBeenCalledWith('first', 'second', 'third');
        
    });
});