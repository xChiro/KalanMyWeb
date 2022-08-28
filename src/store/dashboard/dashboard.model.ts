import TransactionDashboardModel from "./transactionDashboardModel";

export default interface DashboardModel {
    accountId: string | undefined;
    accountName: string | undefined;
    accountBalance: number;
    monthlyIncomes: number;
    monthlyOutcomes: number;
    accountTransactions: TransactionDashboardModel[] | undefined;
    categoriesBalances: any;
    pending: boolean;
    success: boolean;
}