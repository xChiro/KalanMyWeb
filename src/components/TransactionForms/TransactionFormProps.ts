export interface TransactionFormProps {
    accountId: string;
    onCloseModal: any;
    type: TransactionTypes;
}

export enum TransactionTypes {
    Income,
    Outcome
}