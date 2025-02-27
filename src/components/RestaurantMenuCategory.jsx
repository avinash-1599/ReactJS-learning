import { useState } from "react";
import ItemList from "./ItemList"

const RestaurantMenuCategory = ({menuData, showItems, setShowIndex, index}) => {
    const {title, itemCards} = menuData;

    const handleClick = () => {
        setShowIndex((prevIndex) => prevIndex===index ? null : index );
    }

    return (
        <div>
            <div className="w-full mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-large">{title} ({itemCards.length})</span>
                    <span>{"⬇️"}</span>
                </div>

                <div>
                    {showItems && <ItemList data={itemCards} showRemoveButton={false} />}
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenuCategory;