import TransactionModel from "../../store/transactions/transaction.model";
import {CSSProperties} from "react";

export interface AccountTransactionsSummaryProps {
    transactions: TransactionModel[];
    tableStyle?: CSSProperties;
}