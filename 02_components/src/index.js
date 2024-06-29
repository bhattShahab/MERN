import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Content from './Content';
import './Style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
const x = 5;
//using ternary operator because cant use if else in jsx
const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
root.render(
  <React.StrictMode>
    <App /> {/* This is  a Component , Notice How we use comments inside our component */}
    <Content /> {/* This is also a component */}
    {myElement}
  </React.StrictMode>
);



