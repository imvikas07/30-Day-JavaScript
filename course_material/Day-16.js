/*
Event listeners in JavaScript are functions that wait for a specific event to occur and then execute a block of code in response to that event. 
In the context of DOM (Document Object Model) manipulation, event listeners are commonly used to make web pages interactive by responding to user actions like clicks, mouse movements, key presses, etc.
*/
//* Here's a brief example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Listener Example</title>
</head>
<body>

    <button id="myButton">Click me!</button>

    <script>
        // Get a reference to the button element
        var button = document.getElementById('myButton');

        // Define a function to be executed when the button is clicked
        function handleClick() {
            alert('Button clicked!');
        }

        // Attach an event listener to the button element
        // The event listener listens for the 'click' event
        // and executes the handleClick function when the event occurs
        button.addEventListener('click', handleClick);
    </script>

</body>
</html>
```
/*
In this example:

1. We have an HTML button element with the id `myButton`.
2. In the JavaScript part, we first get a reference to the button element using `document.getElementById('myButton')`.
3. We define a function `handleClick()` which displays an alert saying 'Button clicked!'.
4. We attach an event listener to the button using `button.addEventListener('click', handleClick)`. This tells the browser to listen for a click event on the button, and when that event occurs, to execute the `handleClick` function.

So, when the button is clicked, the `handleClick` function is called, and it shows an alert with the message 'Button clicked!'. This is a simple example of how event listeners work in JavaScript for DOM manipulation.

*/

/*
let's walk through a more demonstrative example using event listeners in JavaScript for DOM manipulation.
*/

//* Suppose we have an HTML page with a button that, when clicked, changes the background color of the page. Here's how you can achieve this using event listeners:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Listener Example</title>
    <style>
        /* Some basic styling for the button and body */
        body {
            text-align: center;
            padding-top: 50px;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <button id="colorButton">Change Background Color</button>

    <script>
        // Get a reference to the button element
        var button = document.getElementById('colorButton');

        // Define a function to be executed when the button is clicked
        function changeBackgroundColor() {
            // Generate a random color
            var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            
            // Change the background color of the body
            document.body.style.backgroundColor = randomColor;
        }

        // Attach an event listener to the button element
        // The event listener listens for the 'click' event
        // and executes the changeBackgroundColor function when the event occurs
        button.addEventListener('click', changeBackgroundColor);
    </script>

</body>
</html>
```
/*
In this example:

1. We have an HTML button element with the id `colorButton`.
2. In the JavaScript part, we get a reference to the button element using `document.getElementById('colorButton')`.
3. We define a function `changeBackgroundColor()` which generates a random color and sets it as the background color of the body.
4. We attach an event listener to the button using `button.addEventListener('click', changeBackgroundColor)`. This tells the browser to listen for a click event on the button, and when that event occurs, to execute the `changeBackgroundColor` function.

Now, whenever the button is clicked, the background color of the page changes to a random color. This demonstrates the use of event listeners for DOM manipulation in JavaScript.

*/