import {configureStore} from "@reduxjs/toolkit";
import {accountSlice} from "./account/account.slice";
import {dashboardSlice} from "./dashboard/dashboard.slice";

export const store = configureStore({
        reducer: {
            account: accountSlice.reducer,
            dashboard: dashboardSlice.reducer,
        }
    });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch