//* What is the DOM?

/*
The Document Object Model (DOM) is a programming interface for web documents. 
It represents the page so that programs can change the document structure, 
style, and content. The DOM represents the document as nodes and objects. 
That way, programming languages can connect to the page.
*/

//* Understanding DOM Nodes:

/* 
A DOM node is an individual element within the DOM tree. 
Every element, attribute, and piece of text in an HTML document is represented as a DOM node. 
These nodes can be accessed, manipulated, and modified using JavaScript.
*/

//* Basic DOM Manipulation Steps:

// Accessing Elements:** You can access elements in the DOM using various methods provided by JavaScript. The most common methods are `getElementById`, `getElementsByClassName`, `getElementsByTagName`, and `querySelector`.

// Manipulating Elements:** Once you've accessed an element, you can manipulate its properties, attributes, and content using JavaScript.

// Creating New Elements:** You can create new elements using the `createElement` method, and then append them to the existing DOM structure using methods like `appendChild` or `insertBefore`.

// Removing Elements:** Elements can be removed from the DOM using the `removeChild` method.

//* Example:

// Let's go through a simple example to demonstrate these steps:

<!DOCTYPE html>
<html>
<head>
    <title>DOM Manipulation Example</title>
</head>
<body>
    <div id="myDiv">
        <p>Hello, World!</p>
    </div>
    <button id="myButton">Change Text</button>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Step 1: Accessing Elements
            const myDiv = document.getElementById('myDiv');
            const myButton = document.getElementById('myButton');

            // Step 2: Manipulating Elements
            myDiv.style.backgroundColor = 'lightblue';

            // Step 3: Creating New Elements
            const newParagraph = document.createElement('p');
            newParagraph.textContent = 'New Text!';
            myDiv.appendChild(newParagraph);

            // Step 4: Removing Elements
            myButton.addEventListener('click', () => {
                myDiv.removeChild(myDiv.firstChild); // Remove the first child (existing paragraph)
            });
        });
    </script>
</body>
</html>


//Explanation of the code:

// Step 1: We access the `<div>` element with the ID `myDiv` and the `<button>` element with the ID `myButton`.
// Step 2: We change the background color of `myDiv`.
// Step 3: We create a new `<p>` element with the text "New Text!" and append it to `myDiv`.
// Step 4: We add an event listener to `myButton` that removes the first child element of `myDiv` (in this case, the existing paragraph) when clicked.

// This example demonstrates the basic concepts of DOM manipulation in JavaScript. As you explore further, you'll discover many more possibilities and methods for interacting with the DOM.