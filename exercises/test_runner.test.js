

const assert = (expectedValue) => {
    return {
        toBeTruthy: () => {
            // ## Implement .toBeTruthy
            // https://jestjs.io/docs/en/expect#tobetruthy

            return !!expectedValue;
        },

        toBe: (value) => {
            // ## Implement .toBe
            // https://jestjs.io/docs/en/expect#toequalvalue

            return expectedValue === value;
        },

        toEqual: (value) => {
            // ## Implement .toEqual
            // https://jestjs.io/docs/en/expect#tobevalue
            
            return expectedValue == value;
        },

        toThrow: () => {
            // ## Implement .toThrow
            // https://jestjs.io/docs/en/expect#tothrowerror

            let didThrow = false;

            try {
                expectedValue()
            } catch(e) {
                didThrow = true;
            }
            
            return didThrow;

        }
    }
};

describe('.toBeTruthy', () => {
    test('Will not show true as equal to true', () => {
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