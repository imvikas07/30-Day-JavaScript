/* 
High-order functions are functions that take other functions as arguments or return functions as their results. 
They are a powerful concept in JavaScript, especially when working with arrays. 
Let's go through each of the array high-order functions you mentioned and explain them with examples 
*/

//* forEach()`: This method executes a provided function once for each array element.

Example:
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});

//This will print each number in the array `numbers` to the console.

//* `map()`: This method creates a new array populated with the results of calling a provided function on every element in the calling array.

Example:
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// This will create a new array `doubledNumbers` where each element is double the corresponding element in the `numbers` array.

//* `filter()`: This method creates a new array with all elements that pass the test implemented by the provided function.

Example:

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

// This will create a new array `evenNumbers` containing only the even numbers from the `numbers` array.

//* `find()`: This method returns the first element in the array that satisfies the provided testing function.

Example:

const numbers = [1, 2, 3, 4, 5];

const firstEvenNumber = numbers.find(function(number) {
  return number % 2 === 0;
});

console.log(firstEvenNumber); // Output: 2

//This will return the first even number found in the `numbers` array.

//* `findIndex()`: This method returns the index of the first element in the array that satisfies the provided testing function. If no elements pass the test, it returns -1.

Example:

const numbers = [1, 2, 3, 4, 5];

const firstEvenIndex = numbers.findIndex(function(number) {
  return number % 2 === 0;
});

console.log(firstEvenIndex); // Output: 1 (index of 2)

//This will return the index of the first even number found in the `numbers` array.

//* `slice()`: This method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).

Example:

const numbers = [1, 2, 3, 4, 5];

const slicedArray = numbers.slice(1, 4);

console.log(slicedArray); // Output: [2, 3, 4]

//This will create a new array `slicedArray` containing elements from index 1 to index 3 (not including index 4) from the `numbers` array.

//* `splice()`: This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

Example:

const numbers = [1, 2, 3, 4, 5];

numbers.splice(2, 1); // Remove 1 element starting from index 2

console.log(numbers); // Output: [1, 2, 4, 5]

//This will remove one element at index 2 from the `numbers` array.