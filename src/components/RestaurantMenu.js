
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useState } from "react";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null);
    const dummyData = "dummy"
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
                {categories.map((category, index) => (
                    <RestaurantCategory key={category.card.card.title} data={category}
                        showItems={index === showIndex}
                        setShowIndex={(index) => setShowIndex(index)}
                        index={index}
                        dummyData={dummyData} />
                ))}
            </h3>
        </div>
    )
}

export default RestaurantMenu;