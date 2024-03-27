/*
a data type is a classification that specifies which type of value a variable can hold. Different programming languages support different data types, and each data type has its own set of operations that can be performed on it.
Data types and operators are essential concepts in JavaScript that help you work with data and perform operations on them. 
Let's break them down briefly with examples:
*/

//  Data Types:

1. // **Primitive Data Types:**
   // **Number**: Represents numeric values.
     
   let num = 10; // 10 is numeric values
     
   //**String**: Represents textual data enclosed within quotes.
     
    let str = "India"; // India is a string value 
     
   // **Boolean**: Represents true or false values.
     
     let isTrue = true; // true is boolean expression
     
   // **Undefined**: Represents a variable that has been declared but not assigned a value.
      
     let x;
     
   // **Null**: Represents the intentional absence of any object value.
     
     let y = null;
     

2. // Composite Data Types:**
   // **Object**: Represents a collection of key-value pairs.
     
     let person = {
         name: "John",
         age: 30
     }; // person is object
     
   // **Array**: Represents a collection of elements, indexed by integers.
     
     let fruits = ["apple", "banana", "orange"]; // 
     

// ### Operators:

1. // **Arithmetic Operators:**
   // **Addition (+)**: Adds two operands.
     
     let sum = 5 + 3; // sum = 8
     
   // **Subtraction (-)**: Subtracts second operand from the first.
     
     let difference = 10 - 3; // difference = 7
     
   // **Multiplication (*)**: Multiplies two operands.
     
     let product = 2 * 4; // product = 8
     
   // **Division (/)**: Divides the first operand by the second.
     
     let quotient = 12 / 3; // quotient = 4
     
   // **Modulus (%)**: Returns the remainder when one operand is divided by the other.
     
     let remainder = 10 % 3; // remainder = 1
     

2. // **Comparison Operators:**
   // **Equal (==)**: Compares two values for equality.
     
     console.log(5 == 5); // true
     
   // **Not Equal (!=)**: Compares two values for inequality.

     console.log(5 != 3); // true
     
   // **Strict Equal (===)**: Compares both value and type.
     
     console.log(5 === '5'); // false
     
   // **Strict Not Equal (!==)**: Compares both value and type.
     
     console.log(5 !== '5'); // true
     

3. // **Logical Operators:**
   // **Logical AND (&&)**: Returns true if both operands are true.
     
     console.log(true && true); // true
     
   // **Logical OR (||)**: Returns true if either operand is true.
     
     console.log(true || false); // true
     
   //**Logical NOT (!)**: Returns the opposite of the operand.
     
     console.log(!true); // false
     