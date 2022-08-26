import TransactionModel from "../transactions/transaction.model";

export default interface DashboardModel {
    accountId: string | null;
    accountName: string | null;
    accountBalance: number;
    monthlyIncomes: number;
    monthlyOutcomes: number;
    accountTransactions: TransactionModel[] | null;
    categoriesBalances: any;
    pending: boolean;
    success: boolean;
}