import { useDispatch } from "react-redux";
import { IMG_URL } from "../Constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummyData }) => {
    console.log("items", items)
    console.log("dummyData", dummyData)

    const dispatch = useDispatch()
    const handleAddItem = (item) => {
        // dispact action
        dispatch(addItem(item))
    }
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-center">
                    <div className="px-4 mx-4 w-6/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price / 100}</span>
                        </div>
                        {item.card.info.ratings.aggregatedRating.rating && <p>⭐ {item.card.info.ratings.aggregatedRating.rating}</p>}
                    </div>
                    <div className="">
                        <div className="absolute">
                            <button className="p-2 bg-black shadow-lg m-auto text-white rounded-lg"
                                //onClick={handleAddItem()}
                                onClick={() => handleAddItem(item)}
                            >
                                Add +
                            </button>
                        </div>
                        <img className="w-28 h-28" src={IMG_URL + (item.card.info.imageId ? item.card.info.imageId : "3bcafac76c3be4afb1074caa5a9be4b8")} />
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default ItemList;