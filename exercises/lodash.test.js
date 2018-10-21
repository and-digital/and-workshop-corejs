
const _ = {
    reduce: function (data, operation, start = 0) {
        // Should take an array of values and apply the callback
        // (https://lodash.com/docs/4.17.10#reduce)

        let result = start;

        for (let i = 0; i < data.length; i++) {
            result = operation(result, data[i]);
        }

        return result;
    },
    map: function (collection, callback) {
        // Now, implement .map *but this time _using_ reduce*
        // (https://lodash.com/docs/4.17.10#map)

        return _.reduce(collection, (prev, ...args) => ([...prev, callback(...args)]), []);
    },
    pick: function (object, prop) {
        // Should pick a property from an object
        // (https://lodash.com/docs/4.17.10#pick)

        return object[prop];
    },

    partialRight: function (func, ...partialRightArgs) {
        // Should pick a property from an object
        // (https://lodash.com/docs/4.17.10#partialRight)

        return (...originalArgs) => func(...originalArgs, ...partialRightArgs);
    },

    memoize: function (func) {
        // Should pick a property from an object
        // (https://lodash.com/docs/4.17.10#memoize)

        const store = [];
        const cacheResult = (args, result) => { store.push({ args, result }); return result; };
        const findInStore = (props) => store.find(entry => entry.args.every((arg, index) => arg == props[index]));

        return (...props) => findInStore(props) ? findInStore(props).result : cacheResult(props, func(...props))
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
