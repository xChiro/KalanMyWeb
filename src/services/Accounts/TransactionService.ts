import TransactionModel from "../../store/transactions/transaction.model";
import {HostVariables} from "../../configs/HostVariables";

const testingToken: string =  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZXN0SXNzdWVyIiwiaWF0IjoxNjU4MTAxNzIxLCJleHAiOjE2ODk2Mzc3MjEsImF1ZCI6Ind3dy5leGFtcGxlLmNvbSIsInN1YiI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJHaXZlbk5hbWUiOiJKb2hubnkifQ._tGy-Rh1FpeH1PjuySi4Lh5yyetCMPkhClaBFGZxdtI";

export async function postIncomeTransaction(transaction: TransactionModel) {
    const response = await fetch(HostVariables.baseApiURL + "/accounts/transactions/income", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': testingToken
        },
        body: JSON.stringify(transaction)
    });

    return await response.json();
}

export async function outIncomeTransaction(transaction: TransactionModel) {
    const response = await fetch(HostVariables.baseApiURL + "/accounts/transactions/outcome", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': testingToken
        },
        body: JSON.stringify(transaction)
    });

    return await response.json();
}