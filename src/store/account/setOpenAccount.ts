import {createAction} from "@reduxjs/toolkit";
import {ACCOUNT_ACTION_TYPES} from "./account.reducer";

export const setOpenAccount = (openAccount: any): any => createAction(ACCOUNT_ACTION_TYPES.OPEN_ACCOUNT, openAccount);