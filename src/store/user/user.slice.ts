import {createSlice} from "@reduxjs/toolkit";
import {UserModel} from "./user.model";
import {RootState} from "../store";

const initialState: UserModel =  {
    token: ""
}

export const userSlice = createSlice({
        name: "token",
        initialState,
        reducers: {
            setToken(state, action) {
                state.token = action.payload;
            }
        }
    });

export const selectToken = (state: RootState) => state.token;