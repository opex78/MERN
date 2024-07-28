
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    // receive the dynamic resId
    const { resId } = useParams();
    const resMenu = useRestaurantMenu(resId)
    // load shimmer till the time api call completes
    if (resMenu?.length == 0) {
        return <Shimmer />
    }

    return (
        <div>
            <h1>RestaurantMenu</h1>
            <h3>
                <ul>
                    {resMenu.map((menu) => {
                        return <li key={menu.card.info.id}>
                            <h3>{menu.card.info.name}</h3>
                        </li>
                    })}
                </ul>
            </h3>
        </div>
    )
}

export default RestaurantMenu;