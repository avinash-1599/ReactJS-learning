import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/slices/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce((acc, item) => acc + (item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100), 0);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
            <div className="flex items-center justify-between border-b pb-4 mb-4">
                <h3 className="text-2xl font-bold">Your Cart</h3>
                <button 
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    onClick={() => dispatch(clearCart())}
                >
                    Clear Cart
                </button>
            </div>

            {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty</p>
            ) : (
                <>
                    <ItemList data={cartItems} showRemoveButton={true} />
                    <div className="text-right mt-6 text-lg font-semibold">
                        Total: ₹{totalPrice.toFixed(2)}
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;