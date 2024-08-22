import { IMG_URL } from "../Constants"

export const RestaurantCard = ({ name, ratings, cuisines, deliveryTime, imageId }) => {
    return (
        <div className="w-[250px] h-[300px] m-2 p-2 border-2 border-solid bg-gray-100 items-center hover:bg-gray-200">
            <img className="w-60 h-36" alt="res-logo" src={IMG_URL + imageId} />
            <h1 className="font-bold text-lg">{name}</h1>
            <h4>{cuisines}</h4>
            <h4>{ratings}</h4>
            <h4>{deliveryTime}</h4>
        </div >
    )
}


// withPromotedLabel is a function which is taking RestaurantCard as Input and throwing an 
// Promoted label Resturant card as a output

export const withPromotedLabel = (RestaurantCard) => {
    // we need return a component 
    // component = a normal function which return jsx

    return (props) => {
        return (
            <>
                <label className="absolute bg-black text-white mx-2 px-2">Promoted</label>
                <RestaurantCard {...props} />
            </>
        )
    }
}