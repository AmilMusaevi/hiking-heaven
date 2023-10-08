import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook }  from "react-redux"


import cartReducer from "./features/addToCart/cartSlice";
import wishlistReducer from "./features/addToWishlist/wishlistSlice";

export const store = configureStore({
    reducer: {
        allCart: cartReducer,
        allWishList: wishlistReducer,
    },
});


export const useAppDispatch : () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;