import { useEffect, useState } from "react";
import { RES_MENU_API, mockResMenu } from "../Constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    useEffect(() => {
        fetchResMenu();
    }, [])

    const [resMenu, setResMenu] = useState([])
    const fetchResMenu = async () => {
        const menuRes = await fetch(RES_MENU_API);
        const jsonMenu = await menuRes.json();

        const cards = jsonMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        setResMenu(cards?.itemCards);
    }

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