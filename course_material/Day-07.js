
//** */ What is a Function in JavaScript?

/*
In JavaScript, a function is a block of reusable code that performs a specific task. 
Functions help in organizing code, making it more readable, maintainable, and modular. 
They can take input parameters (arguments) and return a value.

*/

//* Creating a Function:

// how you create a function in JavaScript:

// Syntax:

function functionName(parameter){
    // function body;
}

// Example:
function greet(name) {
    console.log("Hello, " + name + "!");
}


//* Using a Function:

// After defining a function, you can call it whenever you need to execute its code.

greet("John"); // Output: Hello, John!


//** Function Parameters:

/* 
Parameters are placeholders for values that a function will receive when it is called. 
They are listed in the function definition.

*/


function greet(name) {
    console.log("Hello, " + name + "!");
}


// In the above example, `name` is a parameter of the `greet` function.

//** Function Arguments:

// Arguments are the actual values passed to a function when it's called.

greet("John"); // "John" is the argument passed to the greet function


//* Return Statement:

// Functions can also return values using the `return` statement. 

function add(a, b) {
    return a + b;
}

var result = add(3, 4);
console.log(result); // Output: 7

/* 

In the `add` function, `a` and `b` are parameters. 
The function returns the sum of `a` and `b`.

*/

//* Function Expressions:

// You can also create functions using expressions.


var multiply = function(a, b) {
    return a * b;
};

console.log(multiply(2, 3)); // Output: 6


// In the above example, `multiply` is a function expression assigned to the variable `multiply`.

