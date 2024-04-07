
/*
IIFE stands for Immediately Invoked Function Expression. It's a common pattern used in JavaScript to create a,
function and immediately execute it. This might sound a bit confusing at first, 
but let's break it down.
*/

//* Basics of Functions in JavaScript:
/*
In JavaScript, functions are first-class citizens, meaning they can be treated like any other variable. 
You can declare functions and then call them later in your code:
*/


function myFunction() {
  console.log("Hello!");
}

myFunction(); // Calling the function


//* Anonymous Functions:
// You can also create anonymous functions, which are functions without a name:


var myFunction = function() {
  console.log("Hello!");
};

myFunction(); // Calling the function


//* IIFE - Immediately Invoked Function Expression:

/*
Now, an IIFE is essentially an anonymous function that is defined and then immediately invoked. 
This is useful for creating a scope for your variables so they don't pollute the global scope. 
It's also used to execute a block of code right after it's defined.
*/

//* Here's how an IIFE looks:


(function() {
  console.log("Hello from inside the IIFE!");
})();


//* Let's break it down:
/*

1. `(function() { ... })`: This is an anonymous function declaration wrapped in parentheses. This creates a function expression. Wrapping it in parentheses is necessary because in JavaScript, a function declaration must be preceded by something, whether it's an operator or a grouping operator like parentheses.

2. `(...)`: The parentheses immediately following the function declaration indicate that the function should be invoked. Without these parentheses, the function would just be declared but not executed.

3. `();`: These parentheses at the end are what actually invoke the function.

*/

//** Why Use IIFE?
/*
1. **Encapsulation**: IIFEs create a new scope for your code, which helps avoid variable collisions with other scripts and libraries.
2. **Avoiding Global Scope Pollution**: Variables declared inside an IIFE are not accessible from the outside, which helps keep the global scope clean.
3. **Immediate Execution**: It allows you to execute a block of code immediately after it's defined, which can be useful in certain situations.
*/

//* Here's an example demonstrating encapsulation and avoiding global scope pollution:


(function() {
  var localVar = "I'm local";
  console.log(localVar); // Outputs: "I'm local"
})();

console.log(localVar); // Throws an error: localVar is not defined

//* Conclusion:
/*
IIFEs might seem a bit strange at first, but they're a powerful tool in JavaScript for creating encapsulated code blocks,
and managing variable scope. They're commonly used in libraries and frameworks to avoid conflicts with other code.
As you get more comfortable with JavaScript, you'll likely encounter them frequently.
*/