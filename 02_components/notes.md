# Component

+ Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

+ When creating a React component, the component's name MUST start with an upper case letter.

+ Components come in two types, Class components and Function components  
 

<br><mark>In older React code bases, you may find Class components primarily used. It is now suggested to use Function components along with Hooks, which were added in React 16.8.  




## Class Component

A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

The component also requires a render() method, this method returns HTML.


```
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

```

## Function Component

A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand.

```
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

```
<br><br>

# Rendering a Component

Now your React application has a component called Car, which returns an ```<h2>``` element.

To use this component in your application, use similar syntax as normal HTML: <Car />

Example

Display the Car component in the "root" element:

```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

```
<br>

## How to put comments inside your component in react

Within React(JSX), you can use ```{/* comment here */}```,<br>    However for javascript ```// comment here``` works. So, the answer depends on where you want to comment.


<br><br>

# React JSX 

+ JSX stands for JavaScript XML.

+ JSX allows us to write HTML in React.

+ JSX makes it easier to write and add HTML in React.

### Coding JSX

JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

JSX converts HTML tags into react elements.

<mark>You are not required to use JSX, but JSX makes it easier to write React applications.
<br><br>

## Here are two examples. The first uses JSX and the second does not:

With JSX:

```
const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

```
<br>

Without JSX:

```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

```

As you can see in the first example, JSX allows us to write HTML directly within the JavaScript code.

<mark> JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.


<br>

## Expressions in JSX

With JSX you can write expressions inside curly braces { }.

The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:

Example

Execute the expression 5 + 5:


```
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
```

<br>

## Inserting a Large Block of HTML

To write HTML on multiple lines, put the HTML inside parentheses ():

Example
Create a list with three list items:

```
const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

```
<br>

## One Top Level Element

<mark>The HTML code must be wrapped in ONE top level element.

So if you like to write two paragraphs, you must put them inside a parent element, like a div element.

<mark>JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.

Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.

+ A fragment looks like an empty HTML tag: <></>.


Example

Wrap two paragraphs inside a fragment:

```
const myElement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);
```

## Elements Must be Closed


JSX follows XML rules, and therefore HTML elements must be properly closed.

Example:

Close empty elements with />

```const myElement = <input type="text" />;```

<br><br>

# Attribute class = className

The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the  <mark>class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.

Use attribute className instead.

JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.

Example:

```const myElement = <h1 className="myclass">Hello World</h1>;```


<br>

## Conditions - if statements

React supports if statements, but not inside JSX.

To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:


### Option 1: 

Write if statements outside of the JSX code:
```
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = <h1>{text}</h1>;
```
Similarly we can do creating of varialbe etc outside JSX code

### Option 2

Use ternary expressions instead:

```
const x = 5;

const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
```

<mark>Note that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.

<br><br>

# Css in React

There are many ways to style React with CSS, this tutorial will take a closer look at inline styling, and CSS stylesheet.
<br><br>

## Inline Styling

To style an element with the inline style attribute, the value must be a JavaScript object:


Example:

Insert an object with the styling information:

```
class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
      </div>
    );
  }
}
```

<mark>Note: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.

<br>

### camelCased Property Names

Since the inline CSS is written in a JavaScript object, properties with two names, like background-color, must be written with camel case syntax:

Example:

Use backgroundColor instead of background-color:
```
class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
      <p>Add a little style!</p>
      </div>
    );
  }
}

```
<br>

### You can also create an object with styling information, and refer to it in the style attribute:

Example:

Create a style object named mystyle:
```
class MyHeader extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    return (
      <div>
      <h1 style={mystyle}>Hello Style!</h1>
      <p>Add a little style!</p>
      </div>
    );
  }
}

```

<br><br>

## CSS Stylesheet

You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.



Create a new file called "App.css" and insert some CSS code in it:

```Import './App.css'```

```
body {
  background-color: #282c34;
  color: white;
  padding: 40px;
  font-family: Arial;
  text-align: center;
}
```

<br><br>

## CSS Modules

Another way of adding styles to your application is to use CSS Modules.

CSS Modules are convenient for components that are placed in separate files.

<mark>The CSS inside a module is available only for the component that imported it, and you do not have to worry about name conflicts.

```Create the CSS module with the .module.css extension, example: mystyle.module.css.```


Create a new file called "mystyle.module.css" and insert some CSS code in it:

```
.bigblue {
  color: DodgerBlue;
  padding: 40px;
  font-family: Arial;
  text-align: center;
}
```

Import the stylesheet in your component:

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './mystyle.module.css'; 

class Car extends React.Component {
  render() {
    return <h1 className={styles.bigblue}>Hello Car!</h1>;
  }
}

export default Car;
```

Import the component in your application:

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './App.js';

ReactDOM.render(<Car />, document.getElementById('root'));
```


