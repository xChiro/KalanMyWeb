import TransactionDashboardModel from "./transactionDashboardModel";

export default interface DashboardModel {
    accountId: string | null;
    accountName: string | null;
    accountBalance: number;
    monthlyIncomes: number;
    monthlyOutcomes: number;
    accountTransactions: TransactionDashboardModel[] | null;
    categoriesBalances: any;
    pending: boolean;
    success: boolean;
}