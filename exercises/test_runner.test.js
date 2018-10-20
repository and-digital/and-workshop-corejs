
const expect2 = (expectedValue) => {
    return {
        toBe: (value) => {
            // **Task 1: Should check for strict equality**

            return expectedValue === value;
        },
        toEqual: (value) => {
            // **Task 2: Should check if two objects are identical**
            
            return expectedValue == value;
        }
    }
};

describe('.toBe', () => {
    test('Works for boolean', () => {
        expect(expect2(true).toBe(true)).toBe(true);
        expect(expect2(false).toBe(false)).toBe(true);
    });
    test('Works for strings', () => {
        const stringReference = "testing";
        expect(expect2(stringReference).toBe(stringReference)).toBe(true);
    });
});

test('Implement toBe method', () => {
    expect(expect2(true).toEqual(true)).not.toBe(true);
    expect(expect2(false).toEqual(false)).not.toBe(true);
});