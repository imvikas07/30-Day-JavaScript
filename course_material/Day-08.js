/* 
An arrow function in JavaScript is a concise way to write function expressions. 
It was introduced in ECMAScript 6 (ES6) and provides a more compact syntax compared to traditional function expressions. 
Arrow functions are especially useful for writing shorter and more readable code.
*/

//* Here's the basic syntax of an arrow function:

const functionName = (parameters) => {
  // function body
};


//* Or for single parameter functions:

const functionName = parameter => {
  // function body
};


//* And for functions with no parameters:

const functionName = () => {
  // function body
};


//** Let's break down each part of the arrow function syntax:

/* 
 **Parameters**: These are the values that you can pass into the function. You can have zero or more parameters. If there's only one parameter, you can omit the parentheses around it.

 **Arrow (=>)**: This is what distinguishes arrow functions from regular functions. It comes after the parameters and before the function body. It indicates that you're defining an arrow function.

 **Function Body**: This is the code that gets executed when you call the function. It's enclosed within curly braces `{}`. 
   If the function body consists of only a single statement, you can omit the curly braces and the return keyword. The result of that single statement will automatically be returned.

*/  

//** Now, let's see some examples:

// Example 1: Arrow function with one parameter
const square = (x) => {
  return x * x;
};
console.log(square(5)); // Output: 25

// Example 2: Arrow function with no parameters
const greet = () => {
  return "Hello!";
};
console.log(greet()); // Output: Hello!

// Example 3: Arrow function with multiple parameters and implicit return
const add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7

// Example 4: Arrow function as a callback function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(x => x * x);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


/* 

In Example 4, we're using an arrow function as a callback function for the `map()` method. 
Arrow functions are commonly used in scenarios like this where you need a concise and inline function definition. 
They also have lexical scoping of `this`, meaning they inherit the `this` value from the surrounding code at the time the function is defined, 
which can be very helpful in certain situations.

*/