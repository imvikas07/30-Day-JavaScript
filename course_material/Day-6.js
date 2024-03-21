//In JavaScript, there are mainly three types of loops:

1. //**for loop:- This loop is used when you know the number of iterations in advance.

   
   for (initialization; condition; increment/decrement) {
       // code to be executed
   }
   

   Example:
   
   for (let x = 0; x < 5; x++) {
       console.log(x);
   }
   

2. //** while loop:- This loop is used when you don't know the number of iterations in advance. It will continue to execute until the condition becomes false.

   
   while (condition) {
       // code to be executed
   }
   

   Example:
   
   let y = 0;
   while (y < 5) {
       console.log(i);
       y++;
   }
   

3. //**do...while loop:- Similar to the while loop, but it always executes the code block at least once before checking the condition.

   
   do {
       // code to be executed
   } while (condition);
   

   Example:
   
   let z = 0;
   do {
       console.log(z);
       x++;
   } while (z < 5);
   

//These loops are fundamental for iterating over arrays, performing repetitive tasks, and controlling the flow of your program in JavaScript.


//** These comments explain what each part of the code is doing, making it easier to understand for beginners.
//=============================================================================.

// Using a for loop to print numbers from 1 to 10
console.log("Using for loop:");
for (let i = 1; i <= 10; i++) {  // Start from 1, continue until 10, increment i by 1 in each iteration
    console.log(i);  // Print the current value of i
}

// Using a while loop to print numbers from 1 to 10
console.log("Using while loop:");
let j = 1;  // Initialize j to 1
while (j <= 10) {  // Continue looping until j is less than or equal to 10
    console.log(j);  // Print the current value of j
    j++;  // Increment j by 1
}

// Using a do...while loop to print numbers from 1 to 10
console.log("Using do...while loop:");
let k = 1;  // Initialize k to 1
do {
    console.log(k);  // Print the current value of k
    k++;  // Increment k by 1
} while (k <= 10);  // Continue looping until k is less than or equal to 10
