//* Let's talk about Promises in JavaScript in a beginner-friendly way.

/*

In JavaScript, Promises are objects that represent the eventual completion or failure of an asynchronous operation. 
Asynchronous operations are tasks that take some time to finish, like fetching data from a server, reading a file, 
or waiting for user input. Promises help us manage these asynchronous operations in a more organized and readable manner.

*/

//* Here's a breakdown of how Promises work:

1. //**Creating a Promise**: To create a Promise, you use the `new Promise` syntax. It takes a function as an argument, which in turn takes two parameters: `resolve` and `reject`.


const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  // If the operation is successful, call resolve
  // If there's an error, call reject
});


2.//**Resolve and Reject**: Inside the function passed to the Promise constructor, you perform your asynchronous operation. If the operation is successful, you call the `resolve` function with the result. If there's an error, you call the `reject` function with an error message or an Error object.


const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve("Operation succeeded!");
    } else {
      reject(new Error("Operation failed!"));
    }
  }, 1000);
});


3.//**Handling Promises**: Once you have a Promise, you can handle its resolution or rejection using `.then()` and `.catch()` methods.

- The `.then()` //method is called when the Promise is resolved, and it takes a function as an argument which receives the resolved value.
- The `.catch()` //method is called when the Promise is rejected, and it takes a function as an argument which receives the error.

```javascript
myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

4. //**Chaining**: You can chain multiple `.then()` calls to handle multiple asynchronous operations sequentially.


myPromise
  .then((result) => {
    console.log("Step 1:", result);
    // return another promise
    return anotherPromise;
  })
  .then((result) => {
    console.log("Step 2:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


/* 
Promises are crucial for managing asynchronous code in JavaScript, making it easier to handle tasks that take time to complete,
without blocking the rest of your code. Once you get comfortable with Promises, 
you'll find them incredibly useful for writing clean and efficient asynchronous JavaScript code.
*/