import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello Ji Ki Haal Chaal</h1>
  </React.StrictMode>
);


// Notes


// index.js is the most important file from which we will do our rendereing stuff
//also in src index.html is the file which is bein rendered see what const root above is

/*

What StrictMode Does
The React StrictMode helps to identify and detect various warnings/errors during the development phase, namely…

Helps to identify those components having unsafe lifecycles: Some of the legacy component lifecycle methods are considered to be unsafe to use in async applications. The React StrictMode helps to detect the use of such unsafe methods. Once enabled, it displays a list of all components using unsafe lifecycle methods as warning messages.

*/



/*

React's goal is in many ways to render HTML in a web page.

React renders HTML to the web page by using a function called createRoot() and its method render().

The createRoot Function
The createRoot() function takes one argument, an HTML element.

The purpose of the function is to define the HTML element where a React component should be displayed.

The render Method
The render() method is then called to define the React component that should be rendered.

But render where?

There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.

You'll notice a single <div> in the body of this file. This is where our React application will be rendered.

*/


/*

ExampleGet your own React.js Server
Display a paragraph inside an element with the id of "root":

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);
The result is displayed in the <div id="root"> element:

<body>
  <div id="root"></div>
</body>

*/
