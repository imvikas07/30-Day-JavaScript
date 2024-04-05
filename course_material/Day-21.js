/*
Composition in JavaScript is a fundamental concept in software development that involves building complex,
functionality by combining simpler pieces of code or objects together. It is a key principle of object-oriented,
programming (OOP) and functional programming (FP). Understanding composition is essential for writing modular, 
reusable, and maintainable code.
*/

// *In JavaScript, composition can be achieved in various ways, including:

1. //**Object Composition**:
   
/*
Object composition involves creating new objects by combining existing objects. 
This can be done by either merging objects together or by creating objects that contain references to other objects. 
Here's an example:
*/

   
   // Creating individual objects
   const person = {
       name: 'John',
       age: 30
   };

   const job = {
       title: 'Software Developer',
       salary: 50000
   };

   // Combining objects using object spread syntax
   const employee = { ...person, ...job };

   console.log(employee); // { name: 'John', age: 30, title: 'Software Developer', salary: 50000 }
   

   //In this example, the `employee` object is created by merging the `person` and `job` objects together.

2. //**Function Composition**:
   
/*
Function composition involves creating new functions by combining existing functions. 
This can be achieved by chaining function calls or by passing the output of one function,
as the input to another function. Here's an example:
*/

   // Individual functions
   function add(a, b) {
       return a + b;
   }

   function multiplyBy2(x) {
       return x * 2;
   }

   // Function composition
   function addAndMultiply(a, b, c) {
       return multiplyBy2(add(a, b)) + c;
   }

   console.log(addAndMultiply(2, 3, 4)); // Output: (2 + 3) * 2 + 4 = 14
   

//In this example, the `addAndMultiply` function is composed by combining the `add` and `multiplyBy2` functions.

3.// **Class Composition**:
   
/*Class composition involves creating new classes by combining existing classes. This is typically achieved by creating classes that contain,
 instances of other classes as properties. Here's an example:
 */


   class Engine {
       start() {
           console.log('Engine started');
       }
   }

   class Car {
       constructor() {
           this.engine = new Engine();
       }

       start() {
           this.engine.start();
           console.log('Car started');
       }
   }

   const myCar = new Car();
   myCar.start(); // Output: Engine started \n Car started
   
   //In this example, the `Car` class is composed of an `Engine` class instance.

4. // **Functional Composition**:
   
/* 
Functional composition is a technique used in functional programming where functions are combined to create,
new functions. This is often achieved using higher-order functions such as `map`, `filter`, and `reduce`. Here's an example:
*/


   // Functions
   const add = x => y => x + y;
   const multiplyBy2 = x => x * 2;

   // Functional composition
   const addAndMultiply = x => y => multiplyBy2(add(x)(y));

   console.log(addAndMultiply(2)(3)); // Output: (2 + 3) * 2 = 10


//In this example, the `addAndMultiply` function is composed by combining the `add` and `multiplyBy2` functions using function composition.

/*
Composition promotes code reuse, separation of concerns, and maintainability by breaking down complex systems into smaller, 
more manageable pieces. It allows developers to create flexible and modular code that can be easily extended or modified. 
As a beginner in JavaScript development, understanding and practicing composition will greatly improve your coding skills,
and make your codebase more robust.
*/