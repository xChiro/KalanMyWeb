export interface TransactionFormProps {
    accountId: string;
    type: TransactionTypes;
}

export enum TransactionTypes {
    Income,
    Outcome
}