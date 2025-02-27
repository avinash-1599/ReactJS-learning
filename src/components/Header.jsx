import { useContext, useState } from 'react';
import orderAppLogo from '../public/order-app.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector(store => store.cart.items);
    const { loggedInUser } = useContext(UserContext);

    return (
        <div className='flex justify-between items-center bg-gray-600 shadow-md px-4 py-2 mb-2'>
            {/* Logo Section */}
            <div className='w-24 h-auto'>
                <img className='w-full h-auto' src={orderAppLogo} alt="logo" />
            </div>

            {/* Navigation Section */}
            <div className="flex items-center gap-5">
                <ul className="flex items-center gap-5 text-white text-sm font-medium">
                    <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                    <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
                    <li><Link to="/grocery" className="hover:text-blue-300">Grocery</Link></li>
                    <li><Link to="/cart" className="hover:text-blue-300">Cart ({cartItems.length})</Link></li>
                </ul>

                {/* User Info + Login Button */}
                <div className="flex items-center gap-3">
                    <span className="text-white font-bold text-sm">{loggedInUser}</span>
                    <button 
                        className="px-4 py-1.5 bg-blue-500 text-white text-sm font-bold rounded-lg transition duration-300 hover:bg-blue-600 hover:shadow-lg"
                        onClick={() => setBtnName(btnName === 'Login' ? 'Logout' : 'Login')}
                    >
                        {btnName}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
