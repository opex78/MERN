import Login from "./Login";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <div className="logo-container">
                <img className="logo-img" alt="app-logo" src="https://img.freepik.com/premium-vector/burger-delivery-logo_10250-1711.jpg" />
            </div>
            <div className="nav-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <Login />
                </ul>
            </div>
        </div>
    )
}

export default Header;