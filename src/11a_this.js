//## THIS

//foo1

function foo1(num) {
  console.log('foo1: ' + num);

  // keep track of how many times `foo` is called
  this.count++;
}

foo1.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo1(i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo1` called?
console.log(`foo1 count ${foo1.count} \n`); // 0 -- WTF?

i = 0;
console.log();
/* When the code executes foo.count = 0, indeed it's adding a property count to the function object foo. 
But for the this.count reference inside of the function, this is not in fact pointing at all to that function object, 
and so even though the property names are the same, the root objects are different, and confusion ensues.

which count was I incrementing?
a global created one (which is NaN)
*/

//foo2
const data = {
  count: 0
};

function foo2(num) {
  console.log('foo2: ' + num);
  console.log(data);
  // keep track of how many times `foo` is called
  data.count++;
}

for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo2(i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo2` called?
console.log(`foo2 count ${data.count}\n`); // 4

//foo3
function foo3(num) {
  console.log('foo3: ' + num);

  // keep track of how many times `foo` is called
  foo3.count++;
}

foo3.count = 0;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo3(i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo3` called?
console.log(`foo3 count ${foo3.count} \n`); // 4

//foo4 EMBRACING THIS!
function foo4(num) {
  console.log('foo4: ' + num);

  // keep track of how many times `foo` is called
  // Note: `this` IS actually `foo` now, based on
  // how `foo` is called (see below)
  this.count++;
}

foo4.count = 0;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    // using `call(..)`, we ensure the `this`
    // points at the function object (`foo`) itself
    foo4.call(foo4, i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log(`foo4 count ${foo4.count} \n\n`); // 4

// this and new object construction

function Person(name) {
  this.name = name;
}

const george = new Person('George');
console.log(george.name);

//another example
console.log('Another example bar1, bar2 and bar3\n');
//bar1
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
function bar1() {
  setTimeout(function() {
    console.log(`bar1 this.a is: ${this.a}\n`);
  }, 100);
}

var obj = {
  a: 2
};

bar1.call(obj); // 2

//bar2
function bar2() {
  var self = this; // lexical capture of `this`
  setTimeout(function() {
    console.log(`bar2 this.a is: ${self.a}\n`);
  }, 100);
}

var obj = {
  a: 2
};

bar2.call(obj); // 2

//bar3
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
function bar3() {
  setTimeout(() => {
    console.log(`bar3 this.a is: ${this.a}\n`);
  }, 100);
}

var obj = {
  a: 2
};

const boundedBar3 = bar3.bind(obj); // 2
boundedBar3();

//bar4
function bar4() {
  setTimeout(() => {
    console.log(`bar4 this.a is: ${this.a}\n`);
  }, 100);
}

var obj = {
  a: 2
};

bar4.call(obj); // 2

/*
Called with new? Use the newly constructed object.

Called with call or apply (or bind)? Use the specified object.

Called with a context object owning the call? Use that context object.

Default: undefined in strict mode, global object otherwise.

*/

const candidates = [
  { skill: 'JS', name: 'Jane' },
  { skill: 'JS', name: 'Mario' },
  { skill: 'PHP', name: 'Mel' },
  { skill: 'CSS', name: 'Lorna' },
  { skill: 'JAVA', name: 'Lorna' }
];

const hasSkill = skill => candidate => candidate.skill == skill;

let filteredCandidates = candidates.filter(hasSkill('JS'));
