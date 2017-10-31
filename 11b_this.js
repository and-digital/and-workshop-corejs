//## CALL-SITE

/*
To understand this binding, we have to understand the call-site: 
the location in code where a function is called (not where it's declared). 

We must inspect the call-site to answer the question: what's this this a reference to?

Finding the call-site is generally: "go locate where a function is called from", 
but it's not always that easy, as certain coding patterns 
can obscure the true call-site.

What's important is to think about the call-stack 
(the stack of functions that have been called to get us to the current moment 
in execution). 

The call-site we care about is in the invocation before 
the currently executing function.

Let's demonstrate call-stack and call-site:
*/

function baz() {
  // call-stack is: `baz`
  // so, our call-site is in the global scope

  console.log('baz');
  bar(); // <-- call-site for `bar`
}

function bar() {
  // call-stack is: `baz` -> `bar`
  // so, our call-site is in `baz`

  console.log('bar');
  foo(); // <-- call-site for `foo`
}

function foo() {
  // call-stack is: `baz` -> `bar` -> `foo`
  // so, our call-site is in `bar`

  console.log('foo');
}

baz(); // <-- call-site for `baz`

//## DEFAULT BINDING

var a = 2;
function lolz1() {
  console.log(`lolz1 this.a: ${this.a}`);
}

lolz1(); // undefined - 2 in the browser non-strict mode

//## IMPLICIT BINDING

/* the call-site uses the obj context to reference the function, so you could say that 
the obj object "owns" or "contains" the function reference at the time the function is called.
*/

function lolz2() {
  console.log(`lolz2 this.a: ${this.a}\n`);
}

const obj = {
  a: 2,
  lolz2: lolz2
};

obj.lolz2(); // 2

//## IMPLICIT LOST

function lolz3() {
  console.log(`lolz3 this.a: ${this.a}\n`);
}

const obj2 = {
  a: 2,
  lolz3: lolz3
};

const ref = obj2.lolz3; // function reference/alias!

var a = 'oops, global'; // `a` also property on global object

ref(); // "oops, global" in the browser - undefined

//## EXPLICIT BINDING
function xyz(something) {
  console.log(`xyz this.a is ${this.a}`, something);
  return this.a + something;
}

const antherObj = {
  a: 2
};

var bar = xyz.bind(antherObj);

var b = bar(3); // 2 3
console.log(`b is: ${b}\n`); // 5

/* So, now we've uncovered the 4 rules for binding this in function calls. 
All you need to do is find the call-site and inspect it to see which rule applies. 
But, what if the call-site has multiple eligible rules? There must be an order of precedence to these rules, 
and so we will next demonstrate what order to apply the rules.

It should be clear that the default binding is the lowest priority rule of the 4. So we'll just set that one aside.

Which is more precedent, implicit binding or explicit binding? Let's test it:
*/

function zzz() {
  console.log(`zzz this.a: ${this.a}`);
}

const o1 = {
  a: 2,
  zzz: zzz
};

const o2 = {
  a: 3,
  zzz: zzz
};

o1.zzz(); // 2
o2.zzz(); // 3

o1.zzz.call(o2); // 3
o2.zzz.call(o1); // 2

/* So, explicit binding takes precedence over implicit binding, 
which means you should ask first if explicit binding applies before checking for implicit binding. 

Determining this

Now, we can summarize the rules for determining this from a function call's call-site, in their order of precedence. 
Ask these questions in this order, and stop when the first rule applies.

- Is the function called with new (new binding)? If so, this is the newly constructed object.

const bar = new foo()


- Is the function called with call or apply (explicit binding), even hidden inside a bind hard binding? If so, this is the explicitly specified object.

const bar = foo.call( obj2 )


- Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.

const bar = obj1.foo()


Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.

const bar = foo()
*/
