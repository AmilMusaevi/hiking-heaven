import cartReducer from './features/addToCart/cartSlice';
import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from "./features/addToWishlist/wishlistSlice"



export const store = configureStore({
    reducer: {
      allCart: cartReducer,
      allWishList :wishlistReducer,
    },
  });





