import React from 'react';
import {AccountTransactionsItemProps} from "./AccountTransactionsItemProps";
import CurrencyFormat from "../CurrencyFormant/CurrencyFormat";
import {Col, Row, Table} from "react-bootstrap";
import {capitalizeFirst} from "../../utilities/TextFormatters";

function AccountTransactionsItemView(props: AccountTransactionsItemProps) {
    const time = props.time ?? "";
    const classNameValue = (props.amount ?? 0) >= 0 ? "positive-value" : "negative-value";

    const rowStyle = props.bottomBorder ?
        {borderBottom: ".01em solid gray", maxWidth: "90%", margin: "10px auto", paddingBottom: "10px"} :
        {maxWidth: "90%", margin: "auto"};

    return (
        <div style={rowStyle}>
            <div>
                <label style={{color: "gray", fontSize: ".8em"}}>
                    {(new Date(time)).toLocaleString()}
                </label>
            </div>
            <div className="row">
                <div className="col">
                    <label style={{marginBottom: "0", fontSize: "1.2em"}}>
                        {capitalizeFirst(props.description as string)}
                    </label>
                    <div style={{fontSize: ".6em", color: "gray"}}>
                        [{props.category?.toUpperCase()}]
                    </div>
                </div>
                <div className="col">
                    <label className={classNameValue} style={{fontSize: "1.5em"}}>
                        <CurrencyFormat value={props.amount}/>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default AccountTransactionsItemView;