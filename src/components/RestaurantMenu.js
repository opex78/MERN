
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    // receive the dynamic resId
    const { resId } = useParams();
    const categories = useRestaurantMenu(resId)
    console.log("categories", categories)
    // load shimmer till the time api call completes
    if (categories?.length == 0) {
        return <Shimmer />
    }

    return (
        <div>
            <h3>
                {categories.map((category) => (
                    <RestaurantCategory key={"Maggi"} data={category} />
                ))}
            </h3>
        </div>
    )
}

export default RestaurantMenu;