import { createSlice } from "@reduxjs/toolkit";

type TCart = {
    id: number;
    price: number;
    quantity: number;
    title: string;
    img: string;
};

type TInitialState = {
    cart: TCart[];
    totalPrice: number;
    totalQuantity: number;
};

const initialState: TInitialState = {
    cart: [],
    totalPrice: 0,
    totalQuantity: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex(
                (item) => item.id === action.payload.id,
            );
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push(action.payload);
            }
        },
        getCartTotal: (state) => {
            let { totalPrice, totalQuantity } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                },
            );

            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },
        increaseQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        },
        decreaseQuantity: (state, action) => {
            state.cart = state.cart
                .map((item) => {
                    if (item.id === action.payload) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                })
                .filter((item) => item.quantity !== 0);
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload,
            );
        },
    },
});
export const {
    addToCart,
    getCartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;
