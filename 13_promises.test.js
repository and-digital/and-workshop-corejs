/* 
    
    Task 1) Refactor the anAsyncFunction to use shorthand object promise notation

*/

const anAsyncFunction = result => {
  return new Promise((resolve, reject) => {
    if (result) {
      return resolve([0, 1, 2]);
    } else {
      return reject(' Oh no :( ');
    }
  });
};

test('When resolved, the then is called', done => {
  anAsyncFunction(true).then(result => {
    expect(result).toEqual([0, 1, 2]);
    done();
  });
});

test('When rejected, the catch handler is called', done => {
  anAsyncFunction(false).catch(e => {
    expect(e).toBeTruthy();
    done();
  });
});

/* 
    
    Task 2) Abstract out the .then calls into a separate function, not anonymous

    Think about: 
        - What happens if you call .then without returning anything?
        - Does a .then have to return a promise? Can it? Try wrapping addOne's function with: Promise.resolve()

*/

const addOne = result => result + 1;

test('Add up to 6!', done => {
  return Promise.resolve(0)
    .then(num => num + 2)
    .then(num => num + 2)
    .then(num => num + 2)
    .then(function(result) {
      expect(result).toBe(6);
    })
    .then(done);
});

/* 
    
    Task 3) Refactor to be flat like the one before

*/

test('A big old chain of promises', done => {
  Promise.resolve(0)
    .then(addOne)
    .then(value => {
      return Promise.resolve(value)
        .then(value => {
          return Promise.resolve(value)
            .then(addOne)
            .then(addOne)
            .then(addOne);
        })
        .then(addOne)
        .then(addOne);
    })
    .then(addOne)
    .then(value => {
      return Promise.resolve(value)
        .then(addOne)
        .then(addOne)
        .then(addOne);
    })
    .then(result => {
      expect(result).toBe(10);
    })
    .then(done);
});

/* 

    Task 4) Rewrite to use Promise.all

    Think about:
        - Do the two API calls need to be made separately?
        - What could be the impact on performance?

*/

const getUser = result => {
  return Promise.resolve({
    name: 'Alice'
  });
};

const getPlans = result => {
  return Promise.resolve({
    id: 4,
    plan: 'My plan'
  });
};

const subscribe = (userName, id) => {
  return `Create the plan called ${userName} for plan ID ${id}`;
};

test('Get Alices plan', done => {
  return getUser()
    .then(user => {
      return getPlans().then(plans => {
        return subscribe(user.name, plans.id);
      });
    })
    .then(string => {
      expect(string).toBe('Create the plan called Alice for plan ID 4');
      done();
    });
});

/* 

    Task 5) Promise.all returns an array, but that means we have to access with the gross array[0] syntax. 
        Rewrite the .then to use the spread operator instead
*/

const hey = (firstName, lastName) => {
  return `Hey ${firstName} ${lastName}!`;
};

test('Get Alices plan with spread operator', done => {
  return Promise.all([Promise.resolve('Bob'), Promise.resolve('Miggins')])
    .then(data => {
      return hey(data[0], data[1]);
    })
    .then(string => {
      expect(string).toBe('Hey Bob Miggins!');
      done();
    });
});
