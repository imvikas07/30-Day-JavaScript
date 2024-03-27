

//**  What are Higher-Order Functions?

/* 
   In JavaScript, functions are treated as first-class citizens, meaning they can be passed around like any other value. 
   higher-order function is a function that either takes one or more functions as arguments or returns a function as its result.

*/

//* ### Array Higher-Order Functions

/* 
Array higher-order functions are functions that operate on arrays and usually take another function as an argument. 
These functions are powerful tools for working with arrays in JavaScript as they allow for concise and expressive code.
*/

//* Here are some common array higher-order functions in JavaScript:

//**map**: The `map` function applies a given function to each element of an array and returns a new array containing the results.

    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(num => num * 2);
    // doubled is [2, 4, 6, 8, 10]
    

// **filter**: The `filter` function creates a new array with all elements that pass the test implemented by the provided function.

    const numbers = [1, 2, 3, 4, 5];
    const evens = numbers.filter(num => num % 2 === 0);
    // evens is [2, 4]


// **reduce**: The `reduce` function applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

    
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    // sum is 15
    

// **forEach**: The `forEach` function executes a provided function once for each array element.

    
    const numbers = [1, 2, 3, 4, 5];
    numbersFour.forEach(num => console.log(num));
    // Output: 1, 2, 3, 4, 5
    

// **find**: The `find` function returns the first element in the array that satisfies the provided testing function.

    
    const number = [1, 2, 3, 4, 5];
    const found = numbers.find(num => num > 3);
    // found is 4
    

// **some**: The `some` function tests whether at least one element in the array passes the test implemented by the provided function.

    
    const numbers = [1, 2, 3, 4, 5];
    const hasEven = numbers.some(num => num % 2 === 0);
    // hasEven is true
    

// **every**: The `every` function tests whether all elements in the array pass the test implemented by the provided function.

    
    const numbers = [2, 4, 6, 8, 10];
    const allEven = numbers.every(num => num % 2 === 0);
    // allEven is true
    

/* 

These are just a few examples of array higher-order functions in JavaScript. 
They allow you to write concise and readable code when working with arrays, 
making your code more expressive and easier to maintain. As you continue learning JavaScript, 
mastering these functions will greatly enhance your ability to work with arrays effectively.

*/