import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items)
    console.log("cartItems", cartItems)
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="p-2 m-2 bg-black text-white rounded-lg"
                onClick={handleClearCart}> Clear Cart </button>
            {cartItems.length === 0 ? <div>Cart is empty, please add some dishes!! </div> : <div>
                <ItemList items={cartItems} />
            </div>}


        </div>
    )
}
export default Cart;