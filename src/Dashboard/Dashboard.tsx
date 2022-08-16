import DashboardItem from "./DashboardItem";
import AccountBalanceView from "../AccountTransactions/AccountBalanceView";
import CategoriesPanelView from "../Categories/CategoriesPanelView";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";

function Dashboard() {
    const categories = [
        {
            "name": "Salary",
            "balance": 50.0,
        },
        {
            "name": "Groceries",
            "balance": -12.45,
        }];

    return (
        <Container>
            <Row>
                <Col>
                    <DashboardItem title="Actual Balance" style={{backgroundColor: "#292929"}}>
                    </DashboardItem>
                </Col>
                <Col>
                    <DashboardItem title="Actual Balance" style={{backgroundColor: "#292929"}}>
                        <AccountBalanceView/>
                    </DashboardItem>
                    <DashboardItem title="Categories" style={{backgroundColor: "#292929"}}>
                        <CategoriesPanelView categories={categories}/>
                    </DashboardItem>
                </Col>
            </Row>
        </Container>);
}

export default Dashboard;