import TransactionDashboardModel from "../../store/dashboard/transactionDashboardModel";
import {CSSProperties} from "react";

export interface AccountTransactionsSummaryProps {
    transactions: TransactionDashboardModel[];
    tableStyle?: CSSProperties;
}