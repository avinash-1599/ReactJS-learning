import RestroCard, {openedRestroCard} from "./RestroCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [resData, setResData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");

    const {loggedInUser, setUserInfo} = useContext(UserContext);

    const RestroCardOpened = openedRestroCard(RestroCard);

    const onlineStatus = useOnlineStatus();

    const filterTopRatedRestro = (list) => {
        const filtered = list.filter(res => res.info.avgRating>4.5);
        setFilteredData(filtered);
    }

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351&lng=77.624480&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        console.log("resData", json)
        setResData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // useEffect is called on every component render if no dependency array
    // if dependency array is [] then useEffect is called on initial render and just once when component renders
    // if dependency array is [someValue] then useEffect is called everytime someValue is updated
    useEffect(() => {
        console.log('useEffect called!');
        fetchData();
    }, [])

    console.log("Body rendered")

// conditional rendering
    if(resData?.length === 0){
        return (
            <Shimmer></Shimmer>
        )
    }

    if(onlineStatus === false){
        return (
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-md shadow-lg">
              ⚠️ Offline - Check your internet connection
            </div>
          );
    }

    return (
        <div className='body'>
            <div className="flex items-center justify-between p-2 m-2">
            <div className="filter-restro">
                <button className="filter-btn px-4 bg-cyan-600 border border-solid border-black rounded-xl cursor-pointer" onClick={() => filterTopRatedRestro(resData)}>Top Rated Restro</button>
            </div>
            <div className='search flex p-4 m-4 gap-x-2'>
                <input type='text' data-testid="searchInput" placeholder="search here..." className="search-box px-2 border border-solid border-black rounded-xl" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
                <button 
                    className="search-btn px-4 bg-amber-400 border border-solid border-black rounded-xl cursor-pointer" 
                    onClick={ () => {
                        const filtered = resData.filter(restro => restro.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        console.log('filetred', filtered);
                        //setResData(filtered)
                        setFilteredData(filtered)
                        }
                    }>Search</button>
            </div>
            <div className="mb-4">
                <input type="text" placeholder="Enter your username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={loggedInUser}
                onChange={(e) => setUserInfo(e.target.value)}
                />
            </div>
            </div>
            
            <div className='flex flex-wrap'>
                {
                    filteredData?.map((restro, index) => {
                        //return <RestroCard key={index} resData={restro} />    // not a best practice 
                        return <Link key={restro?.info?.id} to={"/restaurants/"+restro?.info?.id}>
                            {restro?.info?.isOpen ? (<RestroCardOpened resData={restro} />) : (<RestroCard resData={restro} />)}
                            </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Body;