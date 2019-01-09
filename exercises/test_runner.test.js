// ## Implement .toBeTruthy
// https://jestjs.io/docs/en/expect#tobetruthy

// ## Implement .toBe
// https://jestjs.io/docs/en/expect#tobevalue

// ## Implement .toEqual
// https://jestjs.io/docs/en/expect#toequalvalue

// ## Implement .toThrow
// https://jestjs.io/docs/en/expect#tothrowerror

describe('.toBeTruthy', () => {
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

describe('.toBe', () => {
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
    test('Will not show true as equal to true', () => {
        const oneObject = {}
        const twoObject = {};

        // Test that the objects are not references to each other
        expect(
            assert(oneObject).toEqual(twoObject)
        ).not.toEqual(true);
        
        // Test that the objects are infact equal
        expect(
            assert(oneObject).toBe(twoObject)
        ).toEqual(false);
    });
});

describe('.toThrow', () => {
    test('Will not show true as equal to true', () => {
        expect(
            assert(() => { throw new Error() }).toThrow()
        ).toEqual(true);
        expect(
            assert(() => { }).toThrow()
        ).toEqual(false);
    });
});