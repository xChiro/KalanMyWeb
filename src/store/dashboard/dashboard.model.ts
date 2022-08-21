import TransactionModel from "./transaction.model";

export default interface DashboardModel {
    accountId: string | null;
    accountName: string | null;
    accountTransactions: TransactionModel[] | null;
    categoriesBalances: any;
}