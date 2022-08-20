import {configureStore} from "@reduxjs/toolkit";
import {accountSlice} from "./account/account.slice";

export const store = configureStore({
        reducer: {
            account: accountSlice.reducer
        }
    });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch