import React, {lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import Cart from './components/Cart';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import {appStore} from './utils/appStore';
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./utils/appStore";

// chunking
// code splitting, dynamic import
// dynamic bundling
// lazy loading or on-demand loading
const Grocery = lazy(() => import("./components/Grocery"));     // separates the component for bundling into different js files in dist folder

const AppLayout = () => {

    const [userInfo, setUserInfo] = useState("");

    useEffect(() => {
        const data = {
            name: "Avinash"
        }

        setUserInfo(data.name);
    }, [])

    return (
        <Provider store={appStore}>
            <PersistGate loading={null} persistor={persistor}>
                <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
                    <div className='app'>
                        <Header />
                        <Outlet />
                    </div>
                </UserContext.Provider>
            </PersistGate>
        </Provider>
    )
}

import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./utils/appStore";


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<Shimmer></Shimmer>}><Grocery /></Suspense>
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(<AppLayout></AppLayout>)
root.render(<RouterProvider router={appRouter} />);