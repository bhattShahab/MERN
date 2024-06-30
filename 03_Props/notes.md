# Props

- Props are arguments passed into React components.

- Props are passed to components via HTML attributes.

- props stands for properties.

<br>

React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

### Familiar props 

Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an ```<img>:```
<br><br>

To send props into a component, use the same syntax as HTML attributes:

Example

Add a "brand" attribute to the Car element:

```const myElement = <Car brand="Ford" />;```

### <mark>The component receives the argument as a props object:

Example

Use the brand attribute in the component:

```
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
```

### Pass Data

Props are also how you pass data from one component to another, as parameters.

Example:

Send the "brand" property from the Garage component to the Car component:

```
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

```
<br>
If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets:

```
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carName } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

### If it was an object

```
function Car(props) {
  return <h2>I am a { props.brand.model }!</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carInfo } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

### <mark>React Props are read-only! You will get an error if you try to change their value.



Props let you think about parent and child components independently. For example, you can change the person or the size props inside Profile without having to think about how Avatar uses them. Similarly, you can change how the Avatar uses these props, without looking at the Profile.

You can think of props like “knobs” that you can adjust. They serve the same role as arguments serve for functions—in fact, props are the only argument to your component! React component functions accept a single argument, a props object:


### Don’t miss the pair of { and } curlies inside of ( and ) when declaring props:

```
function Avatar({ person, size }) {
  // ...
}
```

This syntax is called <mark>“destructuring”</mark> and is equivalent to reading properties from a function parameter:


We can do it as below also

```
function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}
```

### Specifying a default value for a prop 

If you want to give a prop a default value to fall back on when no value is specified, you can do it with the destructuring by putting = and the default value right after the parameter:

```
function Avatar({ person, size = 100 }) {
  // ...
}
```



## JSON - Introduction

- JSON stands for JavaScript Object Notation

- JSON is a text format for storing and transporting data

- JSON is "self-describing" and easy to understand

<br>

The JSON syntax is derived from JavaScript object notation, but the JSON format is text only.

Code for reading and generating JSON exists in many programming languages.


### Why Use Json

You can receive pure text from a server and use it as a JavaScript object.

You can send a JavaScript object to a server in pure text format.

You can work with data as JavaScript objects, with no complicated parsing and translations.

<!-- '{"name":"John", "age":30, "car":null}' --> 



