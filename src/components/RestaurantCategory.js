import ItemList from "./ItemList";


const RestaurantCategory = ({ data, showItems, setShowIndex, index, dummyData }) => {
    console.log(data)

    const handleClick = () => {
        //setShowItems(!showItems)
        if (showItems) {
            setShowIndex(null);
        }
        else {
            setShowIndex(index);
        }

    }
    return (
        <div>
            {/* Header */}
            <div className="w-6/12 m-auto bg-gray-50 my-4 p-4 shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.card.card.title} ({data.card.card.itemCards.length})</span>
                    <span>⬇️</span>
                </div>

            </div>
            {/* Accordian Body */}
            {showItems && <ItemList items={data.card.card.itemCards} dummyData={dummyData} />}
        </div>
    )
}

export default RestaurantCategory;