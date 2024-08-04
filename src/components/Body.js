import React, { useState, useEffect, Fragment } from "react";
import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { mock_restaurants } from "../Constants";


const RestaurantPromotedCard = withPromotedLabel(RestaurantCard)

const Body = () => {
    //console.log("Body Rendered")

    useEffect(() => {
        //console.log("useEffect is called");
        fetchData();
    }, [])

    let [restaurants, setRestaurnts] = useState([])
    let [filteredRes, setFilteredRes] = useState([])
    let [searchText, setSearchText] = useState("")

    const onlineStatus = useOnlineStatus();

    const fetchData = async () => {
        // const data = await fetch(
        //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0044745&lng=72.55311549999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        // );
        // const json = await data.json();
        // // Home : if 2nd card has null then try accessing the 3rd if that is null fetch 4th and if that is null then load mock res
        // // disabled issue 
        // // search restaurant should work without refreshing the page 
        // // apply search text as state variable

        // const resData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        //console.log("resData", resData);
        const resData = mock_restaurants;
        console.log(resData)
        setRestaurnts(resData)
        setFilteredRes(resData)
    }
    // <> </> = <Framgment></Fragment> 

    if (onlineStatus === false) {
        return (<h1>
            Looks like you're offline! Please check your internet connection. !!!
        </h1>)
    }

    return (
        <Fragment>
            {
                (restaurants?.length == 0) ? <Shimmer /> : <div className="body">
                    <div className="flex">
                        <div className="m-3">
                            <input
                                className="border-2 border-solid border-black"
                                type="text"
                                value={searchText}
                                onChange={(e) => {
                                    setSearchText(e.target.value)
                                }} />
                            <button className="mx-2 px-2 border border-solid border-black rounded-lg bg-amber-400"
                                onClick={() => {
                                    //console.log("searchText inside button", searchText)
                                    const filteredSearchList = restaurants.filter((res) => {
                                        return res?.info?.name?.toUpperCase().trim().includes(searchText?.toUpperCase().trim())
                                    })
                                    setFilteredRes(filteredSearchList)
                                }}>
                                Search
                            </button>
                        </div>
                        <button className="m-1 p-1 border border-solid border-black rounded-lg bg-amber-400"
                            onClick={() => {
                                const filteredList = restaurants.filter((res) => {
                                    return res.info.avgRating > 4.2
                                })
                                setFilteredRes(filteredList) // restaurants = filteredList
                            }}>
                            Top Rated Restaurants
                        </button>
                    </div>

                    <div className="flex flex-wrap ">
                        {

                            // load this if we have restaurants then
                            //          execute entire body
                            // else load shimmer



                            filteredRes?.map((restaurant, index) => {
                                return (
                                    /*of resturant is promoted then show label otherwise not*/
                                    <Link to={`/restaurant-menu/${restaurant.info.id}`} key={index}>
                                        {restaurant.info.promoted ?
                                            <RestaurantPromotedCard
                                                name={restaurant.info.name}
                                                ratings={`${restaurant.info.avgRatingString} stars`}
                                                cuisines={restaurant.info.cuisines.join(", ")}
                                                deliveryTime={restaurant.info.sla.slaString}
                                                imageId={restaurant.info.cloudinaryImageId} />
                                            : <RestaurantCard
                                                name={restaurant.info.name}
                                                ratings={`${restaurant.info.avgRatingString} stars`}
                                                cuisines={restaurant.info.cuisines.join(", ")}
                                                deliveryTime={restaurant.info.sla.slaString}
                                                imageId={restaurant.info.cloudinaryImageId} />
                                        }

                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default Body;