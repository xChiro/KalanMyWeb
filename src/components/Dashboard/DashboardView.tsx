import DashboardItem from "./DashboardItem";
import CategoriesPanelView from "../Categories/CategoriesPanelView";
import {selectDashboard} from "../../store/dashboard/dashboard.slice";
import AccountBalanceView from "../AccountBalance/AccountBalanceView";
import {useAppSelector} from "../../store/hooks";
import {Col, Container, Row} from "react-bootstrap";
import AccountTransactionsSummaryView from "../AccountTransactionsSummary/AccountTransactionsSummaryView";
import {CSSProperties} from "react";

function Dashboard() {
    const dashboardModel = useAppSelector(selectDashboard);
    const containerItemStyle = {backgroundColor: "#292929", margin: "0px 0 10px 0"};
    const titleItemStyle: CSSProperties = {
        textAlign: "left",
        backgroundColor: "rgb(52, 52, 52)",
        width: "100%",
        height: "30px",
        margin: "0 0 10px 0",
        padding: "7px 0 0 5px",
        fontSize: ".8em",
        color: "gray",
    };

    if (dashboardModel.pending)
        return (<div>Loading...</div>);
    else {
        return (
            <Container>
                <Row>
                    <Col>
                        <AccountTransactionsSummaryView transactions={dashboardModel.accountTransactions ?? []}
                                                        tableStyle={containerItemStyle}/>
                    </Col>
                    <Col>
                        <DashboardItem title="Actual Balance" containerStyle={containerItemStyle}
                                       titleStyle={titleItemStyle}>
                            <AccountBalanceView accountBalance={dashboardModel.accountBalance}
                                                monthlyIncomes={dashboardModel.monthlyIncomes}
                                                monthlyOutcomes={dashboardModel.monthlyOutcomes}
                                                subTitlesFontSize={12}/>
                        </DashboardItem>
                        <DashboardItem title="Categories Monthly Balance" containerStyle={containerItemStyle}
                                       titleStyle={titleItemStyle}>
                            <CategoriesPanelView categories={dashboardModel.categoriesBalances}/>
                        </DashboardItem>
                    </Col>
                </Row>
            </Container>);
    }
}

export default Dashboard;