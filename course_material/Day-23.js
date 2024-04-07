/*
Generator functions are a special type of function in JavaScript that allows you to control the execution,
of the function. They are defined using the `function*` syntax.
*/


//* Here's a breakdown of how generator functions work and what makes them special:

1.//**Function Definition**: Generator functions are defined using the `function*` syntax, which distinguishes them from regular functions.


function* myGenerator() {
  // Generator function body
}


2.//**Yield Keyword**: Inside a generator function, you can use the `yield` keyword to pause the function's execution and return a value. This allows you to generate a series of values one at a time.


function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}


3.//**Iterators**: When you call a generator function, it doesn't execute immediately. Instead, it returns an iterator object. You can then use this iterator to control the execution of the generator function.


const iterator = myGenerator();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }


4.//**Generator Control Flow**: Each time you call the `next()` method on the iterator, the generator function runs until it encounters a `yield` statement. It then pauses and returns the yielded value along with a `done` property indicating whether the generator has finished.

5.//**Iteration**: You can use generators with loops like `for...of` to iterate over the values they produce.


function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

for (let value of myGenerator()) {
  console.log(value);
}
// Output:
// 1
// 2
// 3


6.//**Stateful Execution**: One of the main benefits of generator functions is that they maintain their state between calls. This means that each time you call `next()`, the generator resumes execution from where it left off.


function* countUp() {
  let count = 0;
  while (true) {
    yield count++;
  }
}

const counter = countUp();
console.log(counter.next().value); // 0
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
// and so on...


/*
Generator functions are useful for scenarios where you need to lazily generate a sequence of values or manage,
asynchronous control flow. They provide a powerful mechanism for creating iterable sequences in JavaScript.
*/