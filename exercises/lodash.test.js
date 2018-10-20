
const _ = {
    chain: function(){
        // Implement
    },
    map: function(value, callback){

        const newArray = [];

        for(var i = 0; i < value.length; i++) {
            newArray.push(callback(value[i]));
        }

        return newArray;

    },
    reduce: function(values, callback){
        // Should take an array of values and apply the callback
    },
    pick: function(){
        // Should pick a property from an object
    }
};

describe('_.map', () => {
    test('maps an array', () => {
        expect(_.map(['Graham', 'Sarah', 'Bob'], (name) => `The ${name}`)).toEqual(['The Graham', 'The Sarah', 'The Bob']);
    });
    test('does not mutate', () => {
        const originalValues = ['Graham', 'Sarah', 'Bob'];
        expect(_.map(originalValues, (name) => `The ${name}`)).toEqual(['The Graham', 'The Sarah', 'The Bob']);
        expect(originalValues).toEqual(['Graham', 'Sarah', 'Bob']);
    });
});
