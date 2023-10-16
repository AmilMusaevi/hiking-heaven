import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
    inputValue: string;
    gender: "ALL" | "MAN" | "WOMAN";
};

const initialState: TInitialState = {
    inputValue: "",
    gender: "ALL",
};

export const pickupInputSLice = createSlice({
    name: "inputValue",
    initialState,
    reducers: {
        addToInputValue: (state, action) => {
            state.inputValue = action.payload;
        },
        resetInput: (state) => {
            state.inputValue = "";
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
    },
});

export const { addToInputValue, resetInput, setGender } =
    pickupInputSLice.actions;

export default pickupInputSLice.reducer;
