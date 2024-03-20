/* 
In JavaScript, a variable is a container that holds data values. 
It is used to store information that can be referenced and manipulated throughout,
a program. Variables in JavaScript can hold different types of data, such as numbers, 
strings, booleans, objects, arrays, functions, etc.
*/

//====================================================================================


/* 
Types of varibale in javascript!
In the javascript have 3 variables its name var,let and cosnt
*/

// Declare a variable named 'x'
var x; // a var is global variable and access the outside the function and class

// Assign the value 10 to the variable 'x'
x = 10;


/*
var: This was the original way to declare variables in JavaScript. However, 
its usage is now considered outdated due to some scoping issues. 
*/


/*
let: Introduced in ECMAScript 6 (ES6), let allows you to declare block-scoped variables. 
Variables declared with let can be reassigned, but they cannot be re-declared within the same scope.
*/

// Declare a variable named 'y' using 'let'
let y; // a let is local variable 

// Assign the value 20 to the variable 'y'
y = 20;


/*
const: Also introduced in ES6, const is used to declare variables whose value cannot be reassigned. 
It also creates block-scoped variables like let.
*/

// Declare a constant variable named 'z' using 'const'
const z = 30; // a const is local variable if once value decaler if can not change it 

// Assign the value 30 to the constant variable 'z'
z = 30;


/*
In JavaScript, variable names must follow certain conventions to be valid. 
Here are the rules:
*/

/*
TODO: Valid Variable Names: 

Variable names can contain letters (a-z, A-Z), digits (0-9), underscores (_), and dollar signs ($).
Variable names must begin with a letter, an underscore (_), or a dollar sign ($). They cannot begin with a digit.
Variable names are case-sensitive. This means myVariable, MyVariable, and myvariable are all different variables.
Variable names cannot be JavaScript reserved words such as var, let, const, if, else, while, for, function, return, etc.
*/

// TODO: Examples of Valid Variable Names:

var name;
var _myVariable;
var $price;
var firstName;
var lastName123;
var camelCaseVariable;
var snake_case_variable;

/* 
TODO:Invalid Variable Names:
Variable names cannot contain spaces or special characters (except for underscore (_) and dollar sign ($)).
Variable names cannot begin with a digit.
Variable names cannot be JavaScript reserved words.
*/

/*
TODO: Examples of Invalid Variable Names:
javascript
Copy code
var 1stName; // Cannot start with a digit
var first name; // Cannot contain space
var my-variable; // Cannot contain hyphen
var for; // Cannot be a reserved word
var function; // Cannot be a reserved word
*/

/*
TODO:
console.log() is a function in JavaScript used to output messages to the console, 
typically for debugging purposes. It allows developers to inspect and display values, 
variables, objects, errors, or any other information during the execution of a JavaScript program.
*/

// TODO: Here's how you can use console.log():

console.log('Hello, world!'); // Output: Hello, world!

// TODO: You can pass multiple arguments to console.log() to output multiple values:

let a = 10;
let b = 20;
console.log('The value of x is:', x, 'and the value of y is:', y);
// Output: The value of x is: 10 and the value of y is: 20

