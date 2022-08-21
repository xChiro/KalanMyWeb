import {Col, Row, Container} from "react-bootstrap";
import React from "react";
import {AccountBalanceProps} from "./AccountBalanceProps";

function AccountBalanceView(props: AccountBalanceProps) {
    let style = {fontSize: props.subTitlesFontSize};
    
    return (
        <Container>
            <Row>
                <Col>
                    <h4>{props.monthlyOutcomes}</h4>
                    <span style={style}>Monthly Outcome</span>
                </Col>
                <Col>
                    <h3>{props.accountBalance}</h3>
                    <span style={style}>Current Balance</span>
                </Col>
                <Col>
                    <h4>{props.monthlyIncomes}</h4>
                    <span style={style}>Monthly Incomes</span>
                </Col>
            </Row>
        </Container>
    );
}

export default AccountBalanceView;