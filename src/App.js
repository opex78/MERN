import React from "react";
import ReactDOM from "react-dom/client"

import Header from "./components/Header";
import Body from "./components/Body";
const root = ReactDOM.createRoot(document.getElementById("root"))

// Top Level Component
// Component Composition 
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

// React Component
root.render(<AppLayout />);

