import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();
    // managing state for show items accordian (on click it should open only one accordian item and rest is closed)
    const [showIndex, setShowIndex] = useState(null);

    const resInfo = useRestaurantMenu(resId);

    if(!resInfo) return <Shimmer />;

    const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};

    const {name, avgRating, costForTwoMessage, cuisines} = restaurantInfo;
    
    console.log("items",resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    //console.log(categories)

    return (
        <div className="min-h-[600px] max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6 border">
            {/* Restaurant Name */}
            <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
            <p className="text-gray-600 text-sm">{cuisines?.join(", ")}</p>
            <div className="flex justify-between items-center mt-4 p-3 bg-gray-100 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-700">{costForTwoMessage}</h4>
                <h4 className="text-lg font-semibold text-yellow-500 flex items-center">
                    {avgRating} ⭐
                </h4>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800 border-b pb-2">Menu</h3>
            {
                categories.map((c, idx) => [
                    <RestaurantMenuCategory 
                        key={c?.card?.card?.title} 
                        menuData={c?.card?.card} 
                        showItems={idx === showIndex ? true : false}
                        setShowIndex={() => {setShowIndex(prevIndex => prevIndex===idx ? null: idx)}}
                        index={idx} />
                ])
            }
        </div>
    );
}

export default RestaurantMenu;