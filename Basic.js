import React from "react";

//+1st way to import React DOM
import * as ReactDOM from "react-dom/client";

//?2nd Way to write ReactDom
//  var ReactDOM = require("react-dom/client");



//!It's old method to import react DOM it's through an Error
// import  ReactDOM  from "react";
/*
 *
 *   <div id="parent">
 *      <div id="child">
 *        <h1 id="heading">Hello Shahid</h1>
 *      </div>
 *   </div>
 *
 *
 *
 *
 *
 */
// const heading1 = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello Shahid, form React"
// );
// const heading2 = React.createElement(
//   "h2",
//   { id: "heading" },
//   "Hello form React"
// );
// const child1 = React.createElement("div", { id: "child1" }, [
//   heading1,
//   heading2,
// ]);
// const child2 = React.createElement("div", { id: "child2" }, [
//   heading1,
//   heading2,
// ]);
// const parent = React.createElement("div", { id: "parent" }, [child1, child2]);
//!React Element
const title=<h1>Shahid</h1>
//!Functional Component
const Title=()=>(<h1>Shhaid khan</h1>)
const HeadingComponent = () => (
  <div className="box">
    <div id="box1">{title}</div>
    <Title/>
    {
      Title()
    }
    <div id="box2">box2</div>
    <div id="box3">box3</div>
  </div>
);
const roo = document.getElementById("root");
const root = ReactDOM.createRoot(roo);
console.log(parent);
root.render(<HeadingComponent/>);
