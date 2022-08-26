import { createSlice } from "@reduxjs/toolkit";
import DashboardModel from "./dashboard.model";
import { getDashboard } from "./dashboard.fetch";
import {RootState} from "../store";

const initialState: DashboardModel = {
    accountId: null,
    accountName: null,
    accountBalance: 0,
    monthlyIncomes: 0,
    monthlyOutcomes: 0,
    accountTransactions: null,
    categoriesBalances: [],
    pending: true,
    success: false,
};

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getDashboard.fulfilled, (state, action) => {
                state.accountId = action.payload.accountId;
                state.accountName = action.payload.accountName;
                state.accountBalance = action.payload.accountBalance;
                state.monthlyIncomes = action.payload.monthlyIncomes;
                state.monthlyOutcomes = action.payload.monthlyOutcomes;
                state.accountTransactions = action.payload.accountTransactions;
                state.categoriesBalances = action.payload.categoriesBalances;
                state.pending = false;
                state.success = true;
            })
            .addCase(getDashboard.pending, (state, action) => {
                state.pending = true;
            })
    }
});

export const selectDashboard = (state: RootState) => state.dashboard;