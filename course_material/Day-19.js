
//* What is a Closure?

/*
In JavaScript, a closure is a combination of a function and the lexical environment within which that function was declared. 
This allows the function to retain access to variables from its containing scope even after the containing function has finished executing. 
In simpler terms, a closure gives you access to an outer function’s scope from an inner function.
*/

//* Why Closures Matter?

/*
Closures are a fundamental concept in JavaScript and are widely used in modern programming, 
especially in scenarios like data privacy, event handling, and creating modules. 
Understanding closures is crucial for writing clean, efficient, and maintainable JavaScript code.
*/

//* Example of a Closure:


function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // Output: I am from the outer function

/*
In this example:
- `outerFunction` defines a local variable `outerVariable` and a nested function `innerFunction`.
- `innerFunction` has access to `outerVariable`, even though it's declared inside `outerFunction`.
- When `outerFunction` is called, it returns `innerFunction`, forming a closure.
- Even after `outerFunction` has finished executing, `innerFunction` still has access to `outerVariable`.
*/

//* Explanation:
/*

1. **Lexical Scope**: JavaScript functions create a closure every time they are declared. This closure captures the surrounding state (variables, functions, etc.) at the time the closure is created. This mechanism is known as lexical scoping.

2. **Accessing Variables**: In the example above, `innerFunction` is accessing `outerVariable` even though it's declared outside of its scope. This is possible due to the closure. When `outerFunction` returns `innerFunction`, it carries with it the reference to `outerVariable`.

3. **Data Privacy**: Closures are often used to create private variables and methods. Since JavaScript does not have built-in support for private members, closures provide a way to achieve data encapsulation and prevent unwanted access to variables.

4. **Returning Functions**: Closures are frequently used when returning functions from other functions. This is a common pattern in JavaScript, especially in functional programming and when dealing with asynchronous code.

*/



//* Conclusion:

/*
Understanding closures is essential for becoming proficient in JavaScript development. 
They allow for powerful and flexible programming patterns, including encapsulation, 
data privacy, and functional programming techniques. As you continue learning JavaScript, 
you'll encounter closures frequently, so it's important to grasp this concept thoroughly.
*/