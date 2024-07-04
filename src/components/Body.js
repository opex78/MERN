import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    console.log("Body Rendered")

    useEffect(() => {
        console.log("useEffect is called");
        fetchData();

    }, [])


    let [restaurants, setRestaurnts] = useState([])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0044745&lng=72.55311549999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const resData = json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants;
        console.log("resData", resData);
        setRestaurnts(resData)
    }

    console.log("restuarants", restaurants)
    // GetRes();
    // console.log("resList", resList[0]);
    return (
        <div className="body">
            <div className="filter">
                <button className="filtet-btn"
                    onClick={() => {
                        const filteredList = restaurants.filter((res) => {
                            return res.info.avgRating > 4.1
                        })
                        setRestaurnts(filteredList) // restaurants = filteredList
                    }}>
                    Top Rated Restaurants
                </button>

            </div>
            <div className="res-container">
                {
                    restaurants.map((restaurant, index) => {
                        return <RestaurantCard
                            key={index}
                            name={restaurant.info.name}
                            ratings={`${restaurant.info.avgRatingString} stars`}
                            cuisines={restaurant.info.cuisines.join(", ")}
                            deliveryTime={restaurant.info.sla.slaString}
                            imageId={restaurant.info.cloudinaryImageId} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;