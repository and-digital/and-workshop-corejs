describe('About Higher Order Functions', function() {
  it('should use filter to return array items that meet a criteria', function() {
    const numbers = [1, 2, 3];
    const odd = numbers.filter(function(x) {
      return x % 2 !== 0;
    });

    expect(odd).toEqual(/* 🤔 */);
    expect(odd.length).toBe(/* 🤔 */);
    expect(numbers.length).toBe(/* 🤔 */);
  });

  it("should use 'map' to transform each element", function() {
    const numbers = [1, 2, 3];
    const numbersPlus1 = numbers.map(function(x) {
      return x + 1;
    });

    expect(numbersPlus1).toEqual(/* 🤔 */);
    expect(numbers).toEqual(/* 🤔 */);
  });

  it("should use 'reduce' to update the same result on each iteration", function() {
    const numbers = [1, 2, 3];
    const reduction = numbers.reduce(function(
      /* result from last call */ memo,
      /* current */ x
    ) {
      return memo + x;
    },
    /* initial */ 0);

    expect(reduction).toBe(/* 🤔 */);
    expect(numbers).toEqual(/* 🤔 */);
  });

  it("should use 'forEach' for simple iteration", function() {
    const numbers = [1, 2, 3];
    const msg = '';
    const isEven = function(item) {
      msg += item % 2 === 0;
    };

    numbers.forEach(isEven);

    expect(msg).toEqual(/* 🤔 */);
    expect(numbers).toEqual(/* 🤔 */);
  });

  it('should use every to test whether all items pass condition', function() {
    //## FIND the write Array function to use on MDN
    const onlyEven = [2, 4, 6];
    const mixedBag = [2, 4, 5, 6];

    const isEven = function(x) {
      return x % 2 === 0;
    };

    expect(onlyEven.xxx(isEven)).toBe(/* 🤔 */);
    expect(mixedBag.xxx(isEven)).toBe(/* 🤔 */);
  });

  it("should use 'some' to test if any items passes condition", function() {
    //## FIND the right Array function to use on MDN
    const onlyEven = [2, 4, 6];
    const mixedBag = [2, 4, 5, 6];

    const isEven = function(x) {
      return x % 2 === 0;
    };

    expect(onlyEven.xxx(isEven)).toBe(/* 🤔 */);
    expect(mixedBag.xxx(isEven)).toBe(/* 🤔 */);
  });

  it('use multiple higher order functions', function() {
    const result = [0, 1, 2]
      .map(function(x) {
        return x + 1;
      })
      .reduce(function(sum, x) {
        return sum + x;
      });

    expect(result).toEqual(/* 🤔 */);
  });
});
