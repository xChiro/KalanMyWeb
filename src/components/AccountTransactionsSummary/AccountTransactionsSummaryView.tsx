import React from 'react';
import {Table} from 'react-bootstrap';
import AccountTransactionsItemView from "./AccountTransactionsItemView";
import {AccountTransactionsSummaryProps} from "./AccountTransactionsSummaryProps";
import TransactionHeaderButtons from "./TransactionHeaderButtons";

function AccountTransactionsSummaryView(props: AccountTransactionsSummaryProps) {
    const rowsBody = [];

    if (props.transactions !== null) {
        for (const current of props.transactions) {
            rowsBody.push(
                <AccountTransactionsItemView key={current.id} id={current.id} amount={current.amount}
                                             category={current.category}
                                             description={current.description} time={current.time}/>
            );
        }
    }

    return (
        <Table striped bordered hover variant="dark">
            <caption className="caption-top" style={{margin: "0", padding: "0"}}>
               <TransactionHeaderButtons/>
            </caption>
            <thead>
            <tr>
                <th>
                    Description
                </th>
                <th>
                    Category
                </th>
                <th>
                    Date
                </th>
                <th>
                    Income
                </th>
                <th>
                    Outcome
                </th>
            </tr>
            </thead>
            <tbody>
            {rowsBody}
            </tbody>
        </Table>
    );
}

export default AccountTransactionsSummaryView;