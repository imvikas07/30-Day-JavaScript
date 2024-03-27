
//**Logical Operators:

/*Logical operators are used to perform logical operations on values. In JavaScript, 
there are three main logical operators
*/


//** Logical AND (`&&`):-

//The `&&` operator returns `true` if both operands are `true`, otherwise, it returns `false`.

// Declare two variables 'x' and 'y' and assign them values of 5 and 10 respectively
let x = 5;
let y = 10;

// Check if both 'x' and 'y' are positive numbers
if (x > 0 && y > 0) {
  // If both 'x' and 'y' are positive, execute this block of code
  console.log("Both x and y are positive.");
} else {
  // If at least one of 'x' and 'y' is not positive, execute this block of code
  console.log("At least one of x and y is not positive.");
}


//**  In this example, since both `x` and `y` are positive, the condition `x > 0 && y > 0` evaluates to `true`, so the message "Both x and y are positive." is logged to the console.

//** Logical OR (`||`):-
/* The `||` operator returns `true` if at least one of the operands is `true`, 
otherwise, it returns `false`.
*/

// Declare a variable 'age' and assign it a value of 25
let age = 25;

// Check if 'age' is less than 18 or greater than or equal to 60
if (age < 18 || age >= 60) {
  // If 'age' is less than 18 (too young) or greater than or equal to 60 (too old), execute this block of code
  console.log("You are either too young or too old.");
} else {
  // If 'age' is not too young or too old, execute this block of code
  console.log("You are in the right age group.");
}


//** In this example, since `age` is neither less than 18 nor greater than or equal to 60, the condition `age < 18 || age >= 60` evaluates to `false`, so the message "You are in the right age group." is logged to the console.

// **Logical NOT (`!`):-

// The `!` operator negates the value of its operand. If the operand is `true`, `!` converts it to `false`, and vice versa.

// Declare a variable 'loggedIn' and assign it a value of false
let loggedIn = false;

// Check if 'loggedIn' is not true (i.e., false)
if (!loggedIn) {
  // If 'loggedIn' is false, execute this block of code
  console.log("User is not logged in.");
} else {
  // If 'loggedIn' is true, execute this block of code
  console.log("User is logged in.");
}


//In this example, since the value of `loggedIn` is `false`, applying the `!` operator to it negates the value to `true`, so the message "User is not logged in." is logged to the console.

