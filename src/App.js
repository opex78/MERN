import React from "react";
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
const root = ReactDOM.createRoot(document.getElementById("root"))

// Top Level Component
// Component Composition 
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/",
                element: <Body />,
            },
        ]
    }

])

// React Component
root.render(<RouterProvider router={appRouter} />);

