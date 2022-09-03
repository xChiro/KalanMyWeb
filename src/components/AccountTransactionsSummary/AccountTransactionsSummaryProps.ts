import TransactionDashboardModel from "../../store/dashboard/transactionDashboardModel";
import {CSSProperties} from "react";

export interface AccountTransactionsSummaryProps {
    accountId: string;
    transactions: TransactionDashboardModel[];
    tableStyle?: CSSProperties;
    pending: boolean;
}