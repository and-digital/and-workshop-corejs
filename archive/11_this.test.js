describe('About this', () => {
  it('should print the name of the person objects', () => {
    const getName = function() {
      return this.name;
    };

    const john = { name: 'John' };

    expect(/* 🤔 */).toBe('John'); // USE bind https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
    expect(/* 🤔 */).toEqual('John'); // USE call https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
    expect(/* 🤔 */).toEqual('John'); // USE apply https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
  });

  it('should set John properties in Person using this', () => {
    function Person() {
      /* ... */
    }

    const john = null;

    expect(john.age).toBe(28);
    expect(john.name).toEqual('John');
    expect(john.isFine()).toBe(true);
  });

  it('should return the maximum number in an array', () => {
    //don't google it, try it first! hint: use apply and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    const numbers = [1, 99, 34, 1000, 123];

    expect(/* 🤔 */).toBe(1000);
  });

  it('should return the average score', () => {
    const leaderBoard = {
      scores: [900, 845, 809, 950],
      avgScore: null,
      avg: function() {
        let sumOfScores = this.scores.reduce(function(prev, cur, index, array) {
          return prev + cur;
        });
        this.avgScore = sumOfScores / this.scores.length;
      }
    };

    const anotherleaderBoard = {
      scores: [8, 10, 8, 9, 10, 9],
      avgScore: null
    };

    expect(anotherleaderBoard.avgScore).toBe(9);
  });
});
