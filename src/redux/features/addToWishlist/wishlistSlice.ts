import { createSlice } from "@reduxjs/toolkit";

const wishItems =
    localStorage.getItem("WishlistItems") !== null
        ? JSON.parse(localStorage.getItem("WishlistItems")!)
        : [];
const wishQuantity =
    localStorage.getItem("WishlistTotalQuantity") !== null
        ? JSON.parse(localStorage.getItem("WishlistTotalQuantity")!)
        : 0;

type TWishlist = {
    id: number;
    price: number;
    quantity: number;
    title: string;
    img: string;
};

type TInitialState = {
    wishlist: TWishlist[];
    wishlistTotalQuantity: number;
};

const initialState: TInitialState = {
    wishlist: wishItems,
    wishlistTotalQuantity: wishQuantity,
};

const funcSetItemsWish = (item: any, totalQuantity: number) => {
    localStorage.setItem("WishlistItems", JSON.stringify(item));
    localStorage.setItem(
        "WishlistTotalQuantity",
        JSON.stringify(totalQuantity),
    );
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
                state.wishlist[findWish].quantity = 1;
            } else {
                state.wishlist.push(action.payload);
            }
        },
        getWishlistTotal: (state) => {
            let { wishlistTotalQuantity } = state.wishlist.reduce(
                (wishListTotal, wishListItem) => {
                    const { quantity } = wishListItem;

                    wishListTotal.wishlistTotalQuantity += quantity;
                    return wishListTotal;
                },
                {
                    wishlistTotalQuantity: 0,
                },
            );
            state.wishlistTotalQuantity = wishlistTotalQuantity;
            funcSetItemsWish(
                state.wishlist.map((item) => item),
                wishlistTotalQuantity,
            );
        },
        removeWishlistItem: (state, action) => {
            state.wishlist = state.wishlist.filter(
                (item) => item.id !== action.payload,
            );
        },
    },
});
export const { addToWishList, getWishlistTotal, removeWishlistItem } =
    wishlistSlice.actions;
export default wishlistSlice.reducer;
