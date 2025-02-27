import foodImg from '../public/food.avif';

const RestroCard = ({ resData }) => {
    const { name, cuisines, avgRating, sla } = resData.info;

    return (
        <div data-testid="resCard" className="m-4 p-4 w-72 min-h-[280px] bg-gray-400 shadow-lg rounded-2xl flex flex-col justify-between transition-transform transform hover:scale-105">
            <img 
                className="w-full h-40 object-cover rounded-t-2xl" 
                src={foodImg} 
                alt={name} 
            />
            <div className="p-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{cuisines.join(", ")}</p>
            </div>
            <div className="flex justify-between items-center mt-2 text-sm text-gray-700">
                <span className="font-medium">{sla.deliveryTime} min</span>
                <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs">{avgRating} ⭐️</span>
            </div>
        </div>
    );
};

// higher order component (takes component as input and returns newly modified component as output)

export const openedRestroCard = () => {
    return (props) => {
        return (
            <div className="relative">  {/* This is the wrapper */}
                <RestroCard {...props} />
                <label className="absolute top-2 left-2 bg-black text-white rounded-lg px-3 py-1 text-sm z-10">
                    Opened
                </label>
            </div>
        );
    };
};

export default RestroCard;
