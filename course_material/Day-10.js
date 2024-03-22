/* 
 An array in JavaScript is a special type of variable that can hold multiple values.
 These values can be of any data type, such as numbers, strings, objects, or even other arrays. 
 Arrays are useful for storing lists of data in a single variable.
*/

//* Here's a breakdown of how arrays work in JavaScript, along with some examples:

//* Creating an Array

/*
You can create an array in JavaScript using square brackets `[ ]`. 
Here's how you can create an empty array:
*/

let myArray = [];


//* You can also initialize an array with some values:

let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];


 //* Accessing Elements
//You can access elements of an array using square brackets notation along with the index of the element. Remember that array indices start from 0. For example:

let fruits = ['apple', 'banana', 'orange'];

console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(fruits[2]); // Output: 'orange'


//* Modifying Elements
// You can modify elements of an array by accessing them using their index and assigning a new value. For example:

let fruits = ['apple', 'banana', 'orange'];

fruits[1] = 'grape';

console.log(fruits); // Output: ['apple', 'grape', 'orange']


//* Array Length
// You can find the length of an array using the `length` property. For example:

let fruits = ['apple', 'banana', 'orange'];

console.log(fruits.length); // Output: 3


//* Adding Elements
// You can add elements to the end of an array using the `push()` method. For example:

let fruits = ['apple', 'banana', 'orange'];

fruits.push('grape');

console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']


//* Removing Elements
// You can remove elements from the end of an array using the `pop()` method. For example:

let fruits = ['apple', 'banana', 'orange'];

fruits.pop();

console.log(fruits); // Output: ['apple', 'banana']


//* Iterating Over an Array
// You can iterate over the elements of an array using loops, such as `for` loop or `forEach()` method. For example:

let numbers = [1, 2, 3, 4, 5];

// Using a for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Using forEach method
numbers.forEach(function(number) {
  console.log(number);
});


//* Nested Arrays
// Arrays can also contain other arrays, creating nested arrays. For example:

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0][1]); // Output: 2


//Arrays are a fundamental part of JavaScript and are widely used in programming. They provide a convenient way to store and manipulate collections of data. As you continue to learn JavaScript, you'll find yourself using arrays frequently. Practice and experimentation are key to mastering their usage.