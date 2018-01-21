//## EXERCISE
describe('About Functions', function() {
  it('should declare functions', function() {
    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(/* 🤔 */);
  });

  it('should know internal variables override outer variables', function() {
    var message = 'Outer';

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = 'Inner';
      return message;
    }

    expect(getMessage()).toBe(/* 🤔 */);
    expect(overrideMessage()).toBe(/* 🤔 */);
    expect(message).toBe(/* 🤔 */);
  });

  it('should have lexical scoping', function() {
    var variable = 'top-level';
    function parentfunction() {
      var variable = 'local';
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe(/* 🤔 */);
  });

  it('should use lexical scoping to synthesise functions', function() {
    function makeMysteryFunction(makerValue) {
      var newFunction = function doMysteriousThing(param) {
        return makerValue + param;
      };
      return newFunction;
    }

    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(/* 🤔 */);
  });

  //currying
  it('should allow extra function arguments', function() {
    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg('first', 'second', 'third')).toBe(/* 🤔 */);

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg('only give first arg')).toBe(/* 🤔 */);

    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(',');
    }

    expect(returnAllArgs('first', 'second', 'third')).toBe(/* 🤔 */);
  });

  it('should pass functions as values', function() {
    var appendRules = function(name) {
      return name + ' rules!';
    };

    var appendDoubleRules = function(name) {
      return name + ' totally rules!';
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise('John')).toBe(/* 🤔 */);

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise('Mary')).toBe(/* 🤔 */);
  });

  it('should return a reversed string', () => {
    function reverse() {}

    expect(reverse('hello')).toEqual('olleh');
  });

  it('should return a human age in dog age (1 1 human year to 7 dog years', () => {
    function puppyCalculator() {}

    expect(puppyCalculator(35)).toBe(5);
    expect(puppyCalculator(6)).toBe(1);
    expect(puppyCalculator(89)).toBe(12);
  });

  it('should return a string with a defined suffix', () => {
    function addSuffix() {}

    expect(markTaskDone('task1')).toEqual('task1 done!');
    expect(markTaskDone('task2')).toEqual('task2 done!');
    expect(hemphasis('do it').toEqual('do it!'));
  });
});
