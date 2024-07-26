import React from "react";
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import User from "./components/User";
import UserClass from "./components/UserClass";
const root = ReactDOM.createRoot(document.getElementById("root"))

// Top Level Component
// Component Composition 
const AppLayout = (classNameDefault) => {

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
        element: <AppLayout classNameDefault="hello" />,
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
            {
                path: "/restaurant-menu/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/user",
                element: <>
                    {/* <User name="myuser" email="myUser@my.com" /> */}
                    <UserClass name="myuser class" email="myUserClass@my.com" />
                </>
            }
        ]
    }

])

// React Component
root.render(<RouterProvider router={appRouter} />);

