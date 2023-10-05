import { wishlistSlice } from "./wishlistSlice";
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    wishlist: [],
    wishlistTotalQuantity: 0,
};
export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            let findWish = state.wishlist.findIndex(
                (item) => item.id === action.payload.id,
            );
            if (state.wishlist[findWish]) {
                state.wishlist[findWish].quantity= 1;
            } else {
                state.wishlist.push(action.payload);
            }
        },
        getWishlistTotal: (state) => {
            let {  wishlistTotalQuantity } = state.wishlist.reduce(
                (wishListTotal, wishListItem) => {
                    const {  quantity } = wishListItem;

                    wishListTotal.wishlistTotalQuantity += quantity;
                    return wishListTotal;
                },
                {
                    wishlistTotalQuantity: 0,
                },
            );
            state.wishlistTotalQuantity = wishlistTotalQuantity;
        },
    },
});
export const { addToWishList, getWishlistTotal } = wishlistSlice.actions;
export default wishlistSlice.reducer;
