export default interface TransactionModel {
    id: string | null;
    amount: number | null;
    description: string | null;
    category: string | null;
    time: string | null;
    pending: boolean | null,
    success: boolean | null,
}