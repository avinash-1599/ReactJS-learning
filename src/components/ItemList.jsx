import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/slices/cartSlice";

const ItemList = ({ data, showRemoveButton = false }) => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const addToCart = (item) => {
        dispatch(addItem(item));
    };

    const removeFromCart = (itemId) => {
        dispatch(removeItem(itemId));
    };

    return (
        <div>
            <ul className="mt-4 space-y-4">
                {data?.map((item) => {
                    //const isItemInCart = cartItems.some(cartItem => cartItem?.card?.info?.id === item?.card?.info?.id);

                    return (
                        <div 
                            data-testid="foodItems"
                            key={item?.card?.info?.id} 
                            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex-1">
                                <li className="text-gray-700 font-medium">{item?.card?.info?.name}</li>
                                <p className="text-green-600 font-semibold">
                                    ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                                </p>
                            </div>
                            <button 
                                className={`ml-4 px-4 py-2 rounded-lg transition whitespace-nowrap 
                                    ${showRemoveButton ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"} 
                                    text-white`}
                                onClick={() => showRemoveButton ? removeFromCart(item?.card?.info?.id) : addToCart(item)}
                            >
                                {showRemoveButton ? "Remove from Cart" : "Add to Cart"}
                            </button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default ItemList;
