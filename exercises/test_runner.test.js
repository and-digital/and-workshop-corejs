// ## Implement .toBeTruthy
// https://jestjs.io/docs/en/expect#tobetruthy

// ## Implement .toBe
// https://jestjs.io/docs/en/expect#tobevalue

// ## Implement .toEqual
// https://jestjs.io/docs/en/expect#toequalvalue

// ## Implement .toThrow
// https://jestjs.io/docs/en/expect#tothrowerror

xdescribe('.toBeTruthy', () => {
    test('Will show true as equal to true', () => {
        expect(
            assert(true).toBeTruthy()
        ).toEqual(true);

        // An empty string is false
        expect(
            assert("").toBeTruthy()
        ).not.toEqual(true);

        // An string is true
        expect(
            assert("populated").toBeTruthy()
        ).toEqual(true);

        // An empty object is truthy
        expect(
            assert({}).toBeTruthy()
        ).toEqual(true);

        // An empty array is truthy
        expect(
            assert([]).toBeTruthy()
        ).toEqual(true);
    });
});

function assert(first) {
    return {
        toBe: function(second){
            return first === second
        }
    }
};

xdescribe('.toBe', () => {
    test('Works for boolean', () => {
        expect(
            assert(true).toBe(true)
        ).toEqual(true);
        expect(
            assert(false).toBe(false)
        ).toEqual(true);
    });
    test('Works for strings', () => {
        const stringReference = "testing";
        expect(
            assert(stringReference).toBe(stringReference)
        ).toBe(true);
    });
    test('Ensures that two references in memory are not the same', () => {
        const oneObject = {};
        const twoObject = {};
        expect(
            assert(oneObject).toBe(twoObject)
        ).toBe(false);
    });
    test('Ensures the same reference in memory is true', () => {
        const oneObject = {};
        expect(
            assert(oneObject).toBe(oneObject)
        ).toBe(true);
    });
});

describe('.toEqual', () => {
<<<<<<< HEAD
    test('Different object with the same contents are equal', () => {
        const objectOne = {adam: "Hello"}
        const objectTwo = {adam: "Hello"};
        expect(
            assert(objectOne).toEqual(objectTwo)
        ).toEqual(true);
    });
    test('Different object with different contents are not equal', () => {
        const objectOne = {adam: "Hello"}
        const objectTwo = {adam: "Hi"};
        expect(
            assert(objectOne).toEqual(objectTwo)
=======
    test('Will not show true as equal to true', () => {
        const oneObject = {
            name: "adam"
        };
        const twoObject = {
            name: "adam"
        };

        // Test that objects of the same structure are true
        expect(
            assert(oneObject).toEqual(twoObject)
        ).toEqual(true);

        const threeObject = {
            name: "adam",
            age: 25
        }
        
        // Test that incorrect properties
        expect(
            assert(oneObject).toBe(threeObject)
>>>>>>> updated promise exercises and the promise docs
        ).toEqual(false);
    });
});

xdescribe('.toThrow', () => {
    test('Will not show true as equal to true', () => {
        expect(
            assert(() => { throw new Error() }).toThrow()
        ).toEqual(true);
        expect(
            assert(() => { }).toThrow()
        ).toEqual(false);
    });
});