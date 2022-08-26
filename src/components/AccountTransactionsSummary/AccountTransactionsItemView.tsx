import React from 'react';
import {AccountTransactionsItemProps} from "./AccountTransactionsItemProps";
import CurrencyFormat from "../CurrencyFormant/CurrencyFormat";
import {Col, Row, Table} from "react-bootstrap";

function AccountTransactionsItemView(props: AccountTransactionsItemProps) {
    const time = props.time ?? "";
    const classNameValue = (props.amount ?? 0) >= 0 ? "positive-value" : "negative-value";
    const capitalizeFirst = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    const rowStyle = props.bottomBorder ?
        {borderBottom: ".01em solid gray", maxWidth: "90%", margin: "auto"} :
        {maxWidth: "90%", margin: "auto"};

    return (
        <Table style={{color: "white"}}>
            <div>
                <span style={{color: "gray", fontSize: ".8em"}}>{(new Date(time)).toLocaleString()}</span>
            </div>
            <Row style={rowStyle}>
                <Col>
                    <div>
                        <span style={{marginBottom: "0", fontSize: "1.2em"}}>
                            {capitalizeFirst(props.description as string)}
                        </span>
                        <div style={{fontSize: ".6em", color: "gray"}}>
                            [{props.category?.toUpperCase()}]
                        </div>
                    </div>
                </Col>
                <Col>
                    <span className={classNameValue} style={{fontSize: "1.5em"}}>
                        <CurrencyFormat value={props.amount}/>
                    </span>
                </Col>
            </Row>
        </Table>
    );
}

export default AccountTransactionsItemView;