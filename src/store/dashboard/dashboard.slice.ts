import {createSlice} from "@reduxjs/toolkit";
import DashboardModel from "./dashboard.model";
import {RootState} from "../store";
import {getDashboard} from "./getDashboard.fetch";

const initialState: DashboardModel = {
    accountId: null,
    accountName: null,
    accountTransactions: null,
    categoriesBalances: null,
};

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getDashboard.fulfilled, (state, action) => {
            state.accountId = action.payload.accountId;
            state.accountName = action.payload.accountName;
            state.accountTransactions = action.payload.accountTransactions;
            state.categoriesBalances = action.payload.categoriesBalances;
        })
    }
});

export const selectDashboard = (state: RootState) => state.dashboard;