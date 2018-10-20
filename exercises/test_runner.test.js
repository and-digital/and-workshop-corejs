

const expect = (expectedValue) => {
    return {
        toBe: (value) => {
            return expectedValue === value;
        },
        toEqual: (value) => {
            return expectedValue == value;
        }
    }
};

console.log(expect(true).toBe(true));
console.log(expect(true).toBe(false));

console.log(expect({}).toEqual({}));
const testObject = {}
console.log(expect(testObject).toEqual(testObject));