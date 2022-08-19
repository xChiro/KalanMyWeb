import {combineReducers} from "@reduxjs/toolkit";
import {accountReducer} from "./account/account.reducer";

export const rootReducer = combineReducers({
    account: accountReducer
});