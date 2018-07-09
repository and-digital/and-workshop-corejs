describe('About closure and scoping', () => {
  /*
      Questions:
          - Why is it returning 3 for everything!?
          - Why would a curried function work here?
          - Why is it not working? (Related to block / functional scoping)

      Task 1) Solve this problem by using currying
      Task 2) Solve this problem by using .map (It can be done on 1 line :) )

  */

  it('should console log a = 2', () => {
    function test() {
      console.log(a);
      console.log(foo());

      var a = 1;
      function foo() {
        return 2;
      }
    }

    test();
  });

  const getFunctions = result => {
    let funcs = [];

    for (let i = 0; i < 3; i++) {
      funcs[i] = function() {
        return `I am index ${i}!`;
      };
    }

    return funcs;
  };

  it('should return index 0 for the first function', () => {
    const funcs = getFunctions();

    expect(funcs[0]()).toBe('I am index 0!');
  });

  it('should return index 1 for the second function', () => {
    const funcs = getFunctions();

    expect(funcs[1]()).toBe('I am index 1!');
  });

  it('should return index 2 for the third function', () => {
    const funcs = getFunctions();

    expect(funcs[2]()).toBe('I am index 2!');
  });
});