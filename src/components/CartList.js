import { IMG_URL } from "../Constants";

const CartList = ({ items }) => {
    console.log("items", items);

    // Calculate the total price
    const totalPrice = items.reduce((total, item) => total + item.card.info.price, 0);

    return (
        <div className="flex justify-center">
            <div className="w-6/12">
                {items.map((item) => (
                    <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center">
                        <div className="flex items-center">
                            <img className="w-20 h-20" src={IMG_URL + (item.card.info.imageId ? item.card.info.imageId : "3bcafac76c3be4afb1074caa5a9be4b8")} />
                            <div className="px-4 mx-4">
                                <div className="py-2">
                                    <span>{item.card.info.name}</span>
                                </div>
                                {item.card.info.ratings.aggregatedRating.rating && <p>⭐ {item.card.info.ratings.aggregatedRating.rating}</p>}
                            </div>
                        </div>
                        <div className="text-right">
                            <span>₹ {item.card.info.price / 100}</span>
                        </div>
                    </div>
                ))}
                <div className="p-2 m-2 text-right">
                    <strong>Total: ₹ {totalPrice / 100}</strong>
                </div>
            </div>
        </div>
    );
}

export default CartList;
