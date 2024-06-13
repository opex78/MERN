import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {
    id: "head-1"
}, "hello world from React");
console.log("heading", heading) // heading is a react element
// React demands a root tag
const root = ReactDOM.createRoot(document.getElementById("root"));
// we have created a root for our react library
root.render(heading);
//whatever you want to render inside the root, just pass it




{/* <div id="parent">
        <div id="child">
            <h1>I'm heading one</h1>
        </div>
</div> */}

// 1. Generate parent div
// 2. inside of parent's children put div child
// 3. inside of child's children put h1 
// 4. inside of h1 put html


// const parent = React.createElement("div", {
//     id: "parent"
// }, React.createElement("div", {
//     id: "child"
// }, React.createElement("h1", {
//     id: "heading"
// }, "I'm heading one")));

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

