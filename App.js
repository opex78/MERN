import React from "react";
import ReactDOM from "react-dom/client"

// React Element => JSX
const heading = <h1 className="head">Hello MERN</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))


// React Functional based component => normal javscript function => it has to return a JSX

const Title = () => {
    return <h1>This is my title</h1>
}

const HeadingComp = () => {
    return (
        <>
            {/* way to render react element inside react component */}
            {heading}

            < h1 className="head" > Hello MERN using React Fun Comp </h1 >

            <Title />
        </>
    )
}



// React Component
root.render(<HeadingComp />);

