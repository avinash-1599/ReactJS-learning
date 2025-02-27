import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
//import userReducer from "./slices/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Configure persist settings
const persistConfig = {
    key: "root",
    storage, // Uses localStorage
};

// Wrap cart reducer with persistReducer
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const appStore = configureStore({
    reducer: {
        cart: persistedCartReducer,
        //user: userReducer
    }
});


// Create a persistor
export const persistor = persistStore(appStore);

//export default appStore;