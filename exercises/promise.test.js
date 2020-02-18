// Implement the following Promise constructor function
function Promise(callback) {
  this.successCallbacks = [];
  this.catchCallbacks = [];

  this.then = func => {
    // ## Implement `then`
    // This function registers a success callback

    this.successCallbacks = [...this.successCallbacks, func];
    return this;
  };

  this.catch = func => {
    // ## Implement `catch`
    // This function registers an error callback

    this.catchCallbacks = [...this.catchCallbacks, func];
    return this;
  };

  const resolve = resolvedValue => {
    // ## Implement `resolve`
    // This method calls the most recent error callback

    try {
      this.successCallbacks.pop()(resolvedValue);
    } catch (e) {
      this.catchCallbacks.pop()(e);
    }
  };

  const reject = message => {
    // ## Implement `reject`
    // This method calls the most recent error callback

    this.catchCallbacks.pop()(new Error(message));
  };

  callback(resolve, reject);

  return this;
}

// ## Implement `all`
// Remember, this is a "static" method so we can apply it to our function object

// **Hint:** Collect results of passed promises. Returning a new promise when you have all results (utilise closures)
Promise.all = ps =>
  new Promise(res => {
    let results = [];
    ps.forEach((p, i) =>
      p.then(result => {
        results[i] = result;
        if (results.length == ps.length) return res(results);
      })
    );
  });

describe('Promise', () => {
  test('.then gets passed the resolved value', done => {
    const resolveValue = 'exampleResolvedValue';
    const fakePromise = () =>
      new Promise((resolve, reject) => {
        setTimeout(function() {
          resolve(resolveValue);
        }, 100);
      });
    fakePromise().then(thenPassedValue => {
      expect(thenPassedValue).toEqual(resolveValue);
      done();
    });
  });
  test('.then can be chained as many times as needed', done => {
    const resolveValue = 'exampleResolvedValue';
    const fakePromise = () =>
      new Promise((resolve, reject) => {
        setTimeout(function() {
          resolve(resolveValue);
        }, 100);
      });
    fakePromise()
      .then(intermediate => intermediate)
      .then(intermediate => intermediate)
      .then(thenPassedValue => {
        expect(thenPassedValue).toEqual(resolveValue);
        done();
      });
  });
  test('.catch catches an error in the original promise', done => {
    const fakePromise = () =>
      new Promise((resolve, reject) => {
        setTimeout(function() {
          reject('example error message');
        }, 100);
      });
    fakePromise().catch(e => {
      expect(e.message).toEqual('example error message');
      done();
    });
  });
  test('.catch catches an error when chained', done => {
    const fakePromise = () =>
      new Promise((resolve, reject) => {
        setTimeout(function() {
          resolve();
        }, 100);
      });

    fakePromise()
      .then(() => {
        throw new Error('example error message');
      })
      .catch(e => {
        expect(e.message).toEqual('example error message');
        done();
      });
  });
  test('.all resolves two promises successfully', done => {
    const fakePromiseOne = () =>
      new Promise((resolve, reject) => {
        setTimeout(function() {
          resolve(10);
        }, 100);
      });

    const fakePromiseTwo = () =>
      new Promise((resolve, reject) => {
        setTimeout(function() {
          resolve(20);
        }, 100);
      });

    Promise.all([fakePromiseOne(), fakePromiseTwo()]).then(data => {
      expect(data).toEqual([10, 20]);
      done();
    });
  });
});
