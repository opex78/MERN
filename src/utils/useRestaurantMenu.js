import { useEffect, useState } from "react";
import { RES_MENU_API, mockResMenu } from "../Constants";

const useRestaurantMenu = (resId) => {
    useEffect(() => {
        fetchResMenu();
    }, [])

    const [resMenu, setResMenu] = useState([])

    const fetchResMenu = async () => {

        // pass dynamic resId to RES_MENU_API

        const menuRes = await fetch(RES_MENU_API + resId);
        const jsonMenu = await menuRes.json();

        const cards = jsonMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        if (jsonMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards) {
            setResMenu(cards);
        }
        else {
            setResMenu(mockResMenu)
        }
    }
    return resMenu;
}

export default useRestaurantMenu;