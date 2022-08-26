import {configureStore} from "@reduxjs/toolkit";
import {dashboardSlice} from "./dashboard/dashboard.slice";
import {transactionSlice} from "./transactions/transaction.slice";

export const store = configureStore({
        reducer: {
            dashboard: dashboardSlice.reducer,
            transactions: transactionSlice.reducer
        }
    });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch