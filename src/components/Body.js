import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    console.log("Body Rendered")

    useEffect(() => {
        console.log("useEffect is called");
        fetchData();

    }, [])


    let [restaurants, setRestaurnts] = useState([])
    let searchText = "";

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0044745&lng=72.55311549999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        // Home : if 2nd card has null then try accessing the 3rd if that is null fetch 4th and if that is null then load mock res
        // disabled issue 
        // search restaurant should work without refreshing the page 
        // apply search text as state variable
        const resData = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log("resData", resData);
        setRestaurnts(resData)
    }

    console.log("restuarants", restaurants)

    return (
        <>
            {
                (restaurants?.length == 0) ? <Shimmer /> : <div className="body">
                    <div className="filter">
                        <div className="search-bar">
                            <input
                                type="text"
                                onChange={(e) => {

                                    searchText = e.target.value;
                                    console.log("searchText", searchText)
                                }} />
                            <button className={searchText?.length === 0 ? "btn-search disabled" : "btn-search"}
                                onClick={() => {
                                    console.log("searchText inside button", searchText)
                                    const filteredSearchList = restaurants.filter((res) => {
                                        return res?.info?.name?.toUpperCase().includes(searchText?.toUpperCase())
                                    })
                                    setRestaurnts(filteredSearchList)
                                }}>
                                Search
                            </button>
                        </div>
                        <button className="filter-btn"
                            onClick={() => {
                                const filteredList = restaurants.filter((res) => {
                                    return res.info.avgRating > 4.2
                                })
                                setRestaurnts(filteredList) // restaurants = filteredList
                            }}>
                            Top Rated Restaurants
                        </button>
                    </div>

                    <div className="res-container">
                        {

                            // load this if we have restaurants then
                            //          execute entire body
                            // else load shimmer
                            restaurants?.map((restaurant, index) => {
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
            }

        </>
    )
}

export default Body;