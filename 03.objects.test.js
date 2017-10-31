test('property access', () => {
  //RULE: USE key access
  const obj = {
    name: 'Julian',
    lastname: 'Brown',
    age: '35'
  };

  expect(/* 🤔 */).toBe('Julian');
  expect(/* 🤔 */).toBe('Brown');
  expect(/* 🤔 */).toBe(35);
});

test('key access', () => {
  //RULE: USE property access
  const obj = {
    name: 'Julian',
    lastname: 'Brown',
    age: '35'
  };

  expect(/* 🤔 */).toBe('Julian');
  expect(/* 🤔 */).toBe('Brown');
  expect(/* 🤔 */).toBe(35);
});

test('computed property names', () => {
  //RULE: USE computed property names
  const real = 'real_';
  const fake = 'fake_';

  const vip = {
    real_name: 'Kelly',
    real_lastname: 'White',
    fake_name: 'Pink',
    fake_lastname: 'Venn',
    age: '35'
  };

  expect(/* 🤔 */).toBe('Kelly');
  expect(/* 🤔 */).toBe('White');
  expect(/* 🤔 */).toBe('Pink');
  expect(/* 🤔 */).toBe('Venn');
  expect(/* 🤔 */).toBe(35);
});

test('define object properties', () => {
  //RULE: USE Object.defineProperty
  const vip = {
    name: 'Kelly',
    lastname: 'White',
    age: '35'
  };

  vip.age = 37;
  expect(/* 🤔 */).toBe('Kelly');
  expect(/* 🤔 */).toBe('White');
  expect(/* 🤔 */).toBe(35);
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

it('should return an array of keys from an object', () => {
  const vip = {
    name: 'Kelly',
    lastname: 'White',
    age: 35
  };

  expect(/* 🤔 */).toEqual(['name', 'lastname', 'age']);
});

it('should return an array of values from an object', () => {
  const vip = {
    name: 'Kelly',
    lastname: 'White',
    age: 35
  };

  expect(/* 🤔 */).toEqual(['Kelly', 'White', 35]);
});
