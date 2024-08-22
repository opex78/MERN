import { useContext } from "react";
import UserContext from "./UserContext";

const Grocery = (props) => {
    const { businessName } = props;
    const userData = useContext(UserContext)
    return (
        <div>
            <h1>{businessName}</h1>
            <h1>{userData.loggedInUser}</h1>
        </div>
    )
}

export default Grocery;