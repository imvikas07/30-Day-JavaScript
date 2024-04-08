
/*
"Promisification" in JavaScript refers to the process of converting callback-based asynchronous functions into Promise-based functions. 
To understand this concept, let's break down the key components involved:
*/

1. //**Asynchronous Operations**: In JavaScript, many operations are asynchronous, meaning they don't block the execution of code. Instead, they execute in the background, and when they're done, they trigger a callback function to handle the result or error.

2. //**Callbacks**: Callbacks are functions passed as arguments to other functions. They're invoked once the operation completes. For example, in Node.js, you might see functions like `fs.readFile` where you provide a callback function to handle the file data once it's read.

3. //**Promises**: Promises provide a cleaner and more powerful way to deal with asynchronous operations compared to callbacks. A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has methods like `.then()` and `.catch()` to handle success and failure cases, respectively.

// Now, let's see how promisification works:

//### Step 1: Understanding the Callback-based Function

//* Consider a function that performs an asynchronous operation using callbacks:


function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
        // Assuming data is fetched successfully
        const data = { message: "Data fetched successfully" };
        callback(null, data); // Call the callback with the data
    }, 1000);
}


// This function `fetchData` takes a callback as an argument. After a delay of 1 second (simulated using `setTimeout`), it calls the callback with either an error (if any) or the fetched data.

//* Step 2: Promisifying the Function

// To promisify `fetchData`, we can wrap it in a Promise. Here's how:


function fetchDataAsync() {
    return new Promise((resolve, reject) => {
        // Call the original function within the Promise
        fetchData((err, data) => {
            if (err) {
                reject(err); // If there's an error, reject the Promise
            } else {
                resolve(data); // If successful, resolve the Promise with data
            }
        });
    });
}

// In this code:
/*
- We create a new Promise that wraps the original `fetchData` function.
- Within the Promise constructor, we call `fetchData` and pass a callback.
- Inside the callback, if there's an error, we reject the Promise using `reject`.
- If the operation is successful, we resolve the Promise with the data.
*/

//* Now, `fetchDataAsync` returns a Promise that resolves with the fetched data or rejects with an error.

//### Step 3: Using Promisified Function

//Now, you can use the promisified function like this:

fetchDataAsync()
    .then(data => {
        console.log(data); // Handle the fetched data
    })
    .catch(error => {
        console.error(error); // Handle errors
    });


/*
With promisification, you can leverage the cleaner syntax of Promises and avoid callback nesting, 
making your code more readable and maintainable, especially in scenarios with multiple asynchronous 
operations.
*/