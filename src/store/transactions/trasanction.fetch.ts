import {createAsyncThunk} from "@reduxjs/toolkit";
import {postIncomeTransaction} from "../../services/Accounts/TransactionService";
import TransactionModel from "./transaction.model";

export const postIncome = createAsyncThunk('dashboard/getDashboard',  async (transaction: TransactionModel, getState) => {
    return postIncomeTransaction(transaction);
});