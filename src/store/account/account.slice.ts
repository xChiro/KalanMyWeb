import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

export const accountSlice = createSlice({
    name: 'account',
    initialState: {accountId: null, accountBalance: null},
    reducers: {
        openAccount: (state, action) => {
            state.accountId = action.payload.accountId;
            state.accountBalance = action.payload.accountBalance;
        }
    }
});

export const {openAccount} = accountSlice.actions;
export const selectAccount = (state: RootState) => state.account;
