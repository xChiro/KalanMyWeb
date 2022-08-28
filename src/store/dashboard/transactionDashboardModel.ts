export default interface TransactionDashboardModel {
    id: string | undefined;
    amount: number | undefined;
    description: string | undefined;
    category: string | undefined;
    time: string | undefined;
    pending: boolean | undefined,
    success: boolean | undefined,
}