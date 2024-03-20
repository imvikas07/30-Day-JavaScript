
// What is javascript and its Used?.
/*-----------------------------------*/

/*
  JavaScript is a versatile, high-level programming language primarily used for web development. 
  It adds interactivity and dynamic functionality to web pages, 
  enhancing user experience. JavaScript enables developers to manipulate HTML and CSS, 
  handle user events, validate input, and update content dynamically, making it an essential tool for modern web development. 
*/

// Difference between Java and javascript.
/*-----------------------------------------*/

/*
Java and JavaScript are distinct programming languages with different purposes and syntax. 
Java is a statically-typed, object-oriented language used for building desktop, web, and mobile applications. JavaScript, on the other hand, is a dynamically-typed, lightweight
scripting language primarily employed for client-side web development to add interactivity and dynamic behavior to web pages.
*/

// How to used javascript and Installtion prcoess.

/*------------------------------------------------*/

/*
JavaScript is used by embedding code within HTML using `<script>` tags or linking external `.js` files. 
No separate installation is required; any text editor suffices. For instance, to create a simple alert message:
<script>
  alert("Hello, world!");
</script>
Save this in an HTML file and open it in a browser. 
*/

// What is internal and external linking in javascript.
/*-------------------------------------------------------*/

/*
Internal and external linking in JavaScript refer to how JavaScript code is included or connected to an HTML document.

**Internal Linking:**
- JavaScript code is embedded directly within the HTML file using `<script>` tags.
- For example:
  ```<html>
  <script>
    // JavaScript code here
  </script>
  ```</html>
- This method is suitable for small scripts or when the code is specific to a single HTML page.

**External Linking:**
- JavaScript code is stored in a separate file with a `.js` extension and linked to the HTML file using the `<script>` tag's `src` attribute.
- For example:
  ```<html>
       <head>
        <script src="script.js"></script>
       </head>
  ```</html>
- This approach keeps the HTML file cleaner and more organized, making it easier to manage and reuse JavaScript code across multiple HTML pages.
*/

//===============================================================================

//Here's a simple demonstration of internal linking in JavaScript within an HTML document:
/*-----------------------------------------------*/

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal Linking Demo</title>
</head>
<body>
    <h1>Internal Linking Demo</h1>
    <p>This is a paragraph.</p>

    <!-- Internal linking -->
    <script>
        // JavaScript code to change text color
        document.querySelector('p').style.color = 'blue';
    </script>
</body>
</html>

In this example:

The <script> tag contains JavaScript code directly embedded within the HTML document.
The JavaScript code selects the first <p> element on the page using document.querySelector() and changes its text color to blue using the style.color property.
*/

//==========================================================================

// Here's a demonstration of external linking in JavaScript:
/*----------------------------------------------------------*/

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External Linking Demo</title>
</head>
<body>
    <h1>External Linking Demo</h1>
    <p>This is a paragraph.</p>

    <!-- External linking -->
    <script src="script.js"></script>
</body>
</html>

In this example:

The JavaScript code resides in an external file named script.js.
The JavaScript file is linked to the HTML document using the <script> tag with the src attribute pointing to the external file.
When the HTML file is loaded in the browser, it also loads and executes the JavaScript code from the external file, 
which changes the text color of the paragraph to green.

*/
