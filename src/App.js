import React, { lazy, Suspense } from "react";
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
import Demo from "./components/Demo";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";
const root = ReactDOM.createRoot(document.getElementById("root"))

// Top Level Component
// Component Composition 

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = (classNameDefault) => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
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
                path: "/cart",
                element: <Cart />,
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
                path: "/grocery",
                element: <Suspense fallback={<div>Loading....</div>}><Grocery businessName="Burger Grocery" /><Grocery businessName="Cheese Grocery" /></Suspense>,
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

