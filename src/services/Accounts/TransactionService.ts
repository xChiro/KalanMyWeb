export interface TransactionRequest {
    accountId: string;
    amount: number;
    transactionDescription: string;
    category: string;
}

export async function postIncomeTransaction(transaction: TransactionRequest, token: string) {
    const response = await fetch(process.env.REACT_APP_BASE_API + "/accounts/transactions/income", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(transaction)
    });

    return await response.json();
}

export async function postOutcomeTransaction(transaction: TransactionRequest, token: string) {
    const response = await fetch(process.env.REACT_APP_BASE_API + "/accounts/transactions/outcome", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(transaction)
    });

    return await response.json();
}