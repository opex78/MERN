const RestaurantCard = ({ name, ratings, cuisines, deliveryTime, imageId }) => {
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imageId} />
            <h3>{name}</h3>
            <h3>{cuisines}</h3>
            <h3>{ratings}</h3>
            <h3>{deliveryTime}</h3>
        </div>
    )
}

export default RestaurantCard;