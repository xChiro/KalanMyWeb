import {configureStore} from "@reduxjs/toolkit";
import {dashboardSlice} from "./dashboard/dashboard.slice";
import {userSlice} from "./user/user.slice";

export const store = configureStore({
        reducer: {
            dashboard: dashboardSlice.reducer,
            user: userSlice.reducer
        }
    });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch