/* 
	
	Task 1) Refactor the following traditional Javascript "class" into new class syntax

*/

function Animal() {}

Animal.prototype.speak = function() {
  return 'meow';
};

Animal.eat = function() {
  return 'nom nom nom';
};

test('Make cat meow', () => {
  const Cat = new Animal();

  expect(Cat.speak()).toBe('meow');
  expect(Animal.eat()).toBe('nom nom nom');
});

/*

	 Task 2) Create a class Kitten, that extends the Animal. Overwriting the previous speak method.
		The test should fail when you add the extended class, you will need to override the method for the test to pass
	 	Tip: Use extends keyword

*/

test('Hear the kitten meow', () => {
  const Kitty = new Kitten();

  expect(Kitty.speak()).toBe('kitten meow');
});
