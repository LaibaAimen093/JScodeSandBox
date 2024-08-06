import React from "react";
import ReactDOM from "react-dom";
//Create a react app from scratch.

const name = "lili";
const date = new Date();

ReactDOM.render(
  <div>
    <p>CREATED by {name}</p>
    <p>Copyright {date.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
