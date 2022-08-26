import {createSlice} from "@reduxjs/toolkit";
import TransactionModel from "./transaction.model";
import {postIncome} from "./trasanction.fetch";

const initialState: TransactionModel = {
    id: null,
    amount: null,
    description: null,
    category: null,
    time: null,
    pending: false,
    success: false,
};

export const transactionSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(postIncome.fulfilled, (state, action) => {
                state.id = action.payload.id;
                state.amount = action.payload.amount;
                state.description = action.payload.description;
                state.category = action.payload.category;
                state.time = action.payload.time;
                state.pending = false;
                state.success = true;
            })
            .addCase(postIncome.pending, (state) => {
                state.pending = true;
            })
            .addCase(postIncome.rejected, (state) => {
                state.success = false;
                state.pending = false;
            })
    }
});