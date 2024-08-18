import Login from "./Login";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext)
    console.log("context data", data)

    const cartItems = useSelector((store) => store.cart.items)
    console.log("cart items", cartItems)
    return (
        <div className="flex justify-between bg-amber-100 border-2 border-solid border-amber-700">
            <div className="logo-container">
                <img className="w-24" alt="app-logo" src="https://img.freepik.com/premium-vector/burger-delivery-logo_10250-1711.jpg" />
            </div>
            <div className="nav-container">
                <ul className="flex">
                    <li className="m-4 p-4">Online Status {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="m-4 p-4"><Link to="/">Home</Link></li>
                    <li className="m-4 p-4"><Link to="/about">About us</Link></li>
                    <li className="m-4 p-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="m-4 p-4"><Link to="/contact">Contact us</Link></li>
                    <li className="m-4 p-4"><Link to="/cart">Cart - {cartItems.length} </Link></li>
                    <li className="m-4 p-4 text-lg font-bold"> {data.loggedInUser}</li>

                </ul>
            </div>
        </div>
    )
}

export default Header;