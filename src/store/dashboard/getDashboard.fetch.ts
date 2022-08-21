import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAccountDashboard} from "../../services/Accounts/AccountService";

export const getDashboard = createAsyncThunk('dashboard/getDashboard',  async (dispatch, getState) => {
   return getAccountDashboard();
});