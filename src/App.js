import React from "react";
import ReactDOM from "react-dom/client"

import Test1224 from "./components/Header";
import Body from "./components/Body";
import Test from "./components/Body";
import Xyz from "./components/Body";
const root = ReactDOM.createRoot(document.getElementById("root"))

// Top Level Component
// Component Composition 
const AppLayout = () => {
    return (
        <div className="app">
            <Test1224 />
            <Body />
            <Test />
            <Xyz />
        </div>
    )
}

// React Component
root.render(<AppLayout />);

