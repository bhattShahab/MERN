# Hooks



### Hooks were added to React in version 16.8.

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

<mark>You must import Hooks from react.

Hook Rules:

There are 3 rules for hooks:

- Hooks can only be called inside React function components.

- Hooks can only be called at the top level of a component.

- Hooks cannot be conditional 

<br><br>

# useState


The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.

To use the useState Hook, we first need to import it into our component.

```import { useState } from "react";```
<br><br>

## Initialize useState

We initialize our state by calling useState in our function component.

useState accepts an initial state and returns two values:

- The current state.

- A function that updates the state.

e.g.
```
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}
```


## Read State

We can now include our state anywhere in our component.

Example:

Use the state variable in the rendered component.

```
import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
```

## Update State

To update our state, we use our state updater function.

<mark>We should never directly update state. Ex: color = "red" is not allowed.Because this will not update in the UI ,React ka kamaal.


Example:
Use a button to update the state:

```
import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);

```

# What Can State Hold

The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

We could create multiple state Hooks to track individual values.


## Hook holding state as an object

```

import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

```
<br><br>

# Updating Objects and Arrays in State

<mark>When state is updated, the entire state gets overwritten.

What if we only want to update the color of our car?

If we only called ```setCar({color: "blue"})```, this would remove the brand, model, and year from our state.

We can use the JavaScript spread operator to help us.


```
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car/>);
```


<mark>In React, when using the useState hook, the state updater function (e.g., setMessage) can accept either a new state value directly or a function. The function variant is particularly useful when the new state depends on the previous state. Here's a detailed explanation of how this works:


## Passing a Function to setMessage

When setMessage is passed a function as an argument, this function receives the previous state value as its parameter. This is particularly useful for updating the state based on its previous value. Here's how it works:

```setMessage(prev => prev + val);```



## Key Points of setMessage() function


- No Return Value: The setMessage function itself does not return a value. Its job is to update the state.

- Trigger Re-render: When you call setMessage, it schedules a re-render of the component with the updated state value.

- <mark>State Update: The state can be updated either by providing a new state value directly or by providing a function that takes the previous state value as an argument and returns the new state value.




<mark >You understand the behaviour ,why input field is not being changed when entering something, right?
Becuase react want to more control over ui . So need to use state for that

