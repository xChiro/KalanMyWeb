import React from 'react';
import {Button} from 'react-bootstrap';
import AccountTransactionsItemView from "./AccountTransactionsItemView";
import {AccountTransactionsSummaryProps} from "./AccountTransactionsSummaryProps";
import TransactionHeaderButtons from "./TransactionHeaderButtons";
import {useNavigate} from "react-router-dom";

function AccountTransactionsSummaryView(props: AccountTransactionsSummaryProps) {
    const rowsBody = [];
    const navigate = useNavigate();

    const onViewPreviousMonthClick = () => navigate("../transactions", { replace: true });

    if (props.transactions !== null) {
        for (let i = 0; i < props.transactions.length; i++) {
            const current = props.transactions[i];
            const bottomBorder = i < props.transactions.length - 1;

            rowsBody.push(
                <AccountTransactionsItemView key={current.id} id={current.id} amount={current.amount}
                                             category={current.category}
                                             description={current.description} time={current.time}
                                             bottomBorder={bottomBorder}/>
            );
        }
    }

    return (
        <div className="primary-background-color" style={{marginBottom: "10px", maxHeight: "80vh"}}>
            <TransactionHeaderButtons accountId={props.accountId}/>
            <div style={{margin: "15px 0 15px 0", color: "white", maxHeight: "65vh", overflow: "auto"}}>
                {props.pending ? "Loading..." : rowsBody}
            </div>
            <Button className="secondary-background-color" onClick={() => onViewPreviousMonthClick()}
                 style={{
                     borderRadius: "0 0 10px 10px", width: "100%",
                     color: "gray", border: "none", fontSize: ".8em"
                 }}>
                View previous month...
            </Button>
        </div>
    );
}

export default AccountTransactionsSummaryView;