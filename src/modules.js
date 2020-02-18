// A module is simply a way of organizing code.

// You can utilise the module systems as native modules, node modules etc.

// But you can also create them in your code as well

// ## A basic module

// Is just an object with properties applied.

const databaseSeed = {
  init: function(query) {
    const patch = this.getPatch();
    return this.runQuery(patch);
  },

  getPatch() {
    return 'INSERT into USERS ...';
  },

  runQuery(query) {
    return `Running: ${query}`;
  }
};

console.log(databaseSeed.init());

// ## Revealing module pattern

// Reveals only certain methods, therefore creating pseudo-private methods inside the function closure.

// This is a form of _abstraction_ (An OOP concept).

// Discuss testing implications of private methods

const databasePatch = function(query) {
  const getPatch = function() {
    return 'INSERT into USERS ...';
  };

  const runQuery = function(query) {
    return `Running: ${query}`;
  };

  const init = function() {
    const patch = getPatch();
    return runQuery(patch);
  };

  return {
    init
  };
};

console.log(databasePatch().init());

// The advantages of revealing module is that you don't have to reference the object directly

// Instead you can invoke functions by name (or variable assignment)

// i.e. ```runQuery``` as opposed to ```this.runQuery```
