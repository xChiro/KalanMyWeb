import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAccountDashboard} from "../../services/AccountService";

export const getDashboard = createAsyncThunk('dashboard/getDashboard',
    async (token: string) => {
        return getAccountDashboard(token);
    });