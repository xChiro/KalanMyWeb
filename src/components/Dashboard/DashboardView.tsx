import DashboardItem from "./DashboardItem";
import CategoriesPanelView from "../Categories/CategoriesPanelView";
import {selectDashboard} from "../../store/dashboard/dashboard.slice";
import AccountBalanceView from "../AccountBalance/AccountBalanceView";
import {useAppSelector} from "../../store/hooks";
import {Col, Container, Row} from "react-bootstrap";
import AccountTransactionsSummaryView from "../AccountTransactionsSummary/AccountTransactionsSummaryView";

function Dashboard() {
    const dashboardModel = useAppSelector(selectDashboard);
    const itemStyle = {backgroundColor: "#292929", margin: "0px 0 10px 0"};

    if (dashboardModel.pending)
        return (<div>Loading...</div>);
    else {
        return (
            <Container>
                <Row>
                    <Col>
                        <AccountTransactionsSummaryView transactions={dashboardModel.accountTransactions ?? []}
                                                        tableStyle={itemStyle}/>
                    </Col>
                    <Col>
                        <DashboardItem title="Actual Balance" style={itemStyle}>
                            <AccountBalanceView accountBalance={dashboardModel.accountBalance}
                                                monthlyIncomes={dashboardModel.monthlyIncomes}
                                                monthlyOutcomes={dashboardModel.monthlyOutcomes}
                                                subTitlesFontSize={12}/>
                        </DashboardItem>
                        <DashboardItem title="Categories" style={itemStyle}>
                            <CategoriesPanelView categories={dashboardModel.categoriesBalances}/>
                        </DashboardItem>
                    </Col>
                </Row>
            </Container>);
    }
}

export default Dashboard;