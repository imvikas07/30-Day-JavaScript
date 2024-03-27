

//** Conditional Statements:

//Conditional statements are used in programming to make decisions based on certain conditions. In JavaScript, there are mainly three types of conditional statements:

// ** if statement:- 
//The if statement executes a block of code if a specified condition is true.

// Declare a variable 'x' and assign it a value of 10
let a = 10;

// Check if the value of 'x' is greater than 5
if (a > 5) {
  // If 'x' is greater than 5, execute this block of code
  console.log("a is greater than 5");
} else {
  // If 'x' is not greater than 5, execute this block of code
  console.log("a is not greater than 5");
}


//** if...else statement:- 
// The if...else statement executes one block of code if a specified condition is true and another block of code if the condition is false.

// Declare a variable 'x' and assign it a value of 10
let x = 10;

// Check if the value of 'x' is greater than 5
if (x > 5) {
  // If 'x' is greater than 5, execute this block of code
  console.log("x is greater than 5");
} else {
  // If 'x' is not greater than 5, execute this block of code
  console.log("x is not greater than 5");
}


//** if...else if...else statement:-
// This statement allows you to check multiple conditions and execute a different block of code based on the first condition that evaluates to true.

// Declare a variable 'time' and assign it a value of 20
let time = 20;

// Check if the value of 'time' is less than 12
if (time < 12) {
  // If 'time' is less than 12, execute this block of code
  console.log("Good morning!");
} 
// If the condition above is false, check if 'time' is less than 18
else if (time < 18) {
  // If 'time' is less than 18 but not less than 12, execute this block of code
  console.log("Good afternoon!");
} 
// If both conditions above are false, execute this block of code
else {
  console.log("Good evening!");
}


// ** Switch Case:

// Switch case is another way to execute different blocks of code based on different conditions. It's often used when you have multiple conditions to check against a single value.

// Declare a variable 'fruit' and assign it a value of "apple"
let fruit = "apple";

// Use a switch statement to check the value of 'fruit'
switch (fruit) {
  // If 'fruit' is "banana", execute this block of code
  case "banana":
    console.log("Banana is yellow.");
    break;
  // If 'fruit' is "apple", execute this block of code
  case "apple":
    console.log("Apple is red.");
    break;
  // If 'fruit' is "orange", execute this block of code
  case "orange":
    console.log("Orange is orange.");
    break;
  // If 'fruit' does not match any of the above cases, execute this block of code
  default:
    console.log("I don't know what fruit this is.");
}

/*
In this example, depending on the value of the variable `fruit`, the corresponding case block will execute. If `fruit` is "apple", 
it will print "Apple is red." If `fruit` is not any of the specified cases, the default block will execute.
Both conditional statements and switch case are crucial in programming as they allow you to control the flow of your code based on various conditions and values.

*/
