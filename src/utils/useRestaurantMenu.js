import { useEffect, useState } from "react";


const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.773129&lng=86.142811&restaurantId="+resId);
        const json = await data.json();
        console.log(json)
    
        setResInfo(json?.data);
    }

    return resInfo;
}

export default useRestaurantMenu;