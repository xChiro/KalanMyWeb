import {Col, Row, Container} from "react-bootstrap";
import React from "react";
import {AccountBalanceProps} from "./AccountBalanceProps";
import CurrencyFormat from "../CurrencyFormant/CurrencyFormat";

function AccountBalanceView(props: AccountBalanceProps) {
    const style = {fontSize: props.subTitlesFontSize};
    const balanceClassName = props.accountBalance >= 0 ? "positive-value" : "negative-value";

    return (
        <Container>
            <Row>
                <Col>
                    <h4 className="negative-value">
                        <CurrencyFormat value={props.monthlyOutcomes}/>
                    </h4>
                    <span style={style}>Monthly Outcome</span>
                </Col>
                <Col>
                    <h3 className={balanceClassName}>
                        <CurrencyFormat value={props.accountBalance}/>
                    </h3>
                    <span style={style}>Current Balance</span>
                </Col>
                <Col>
                    <h4 className="positive-value">
                        <CurrencyFormat value={props.monthlyIncomes}/>
                    </h4>
                    <span style={style}>Monthly Incomes</span>
                </Col>
            </Row>
        </Container>
    );
}

export default AccountBalanceView;