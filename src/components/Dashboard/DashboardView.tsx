import DashboardItem from "./DashboardItem";
import CategoriesPanelView from "../Categories/CategoriesPanelView";
import {selectDashboard} from "../../store/dashboard/dashboard.slice";
import AccountBalanceView from "../AccountBalance/AccountBalanceView";
import {useAppSelector} from "../../store/hooks";
import {Col, Container, Row} from "react-bootstrap";
import AccountTransactionsSummaryView from "../AccountTransactionsSummary/AccountTransactionsSummaryView";

function Dashboard() {
    const dashboardModel = useAppSelector(selectDashboard);
    const containerItemStyle = {
        backgroundColor: "#292929",
        margin: "0px 0 10px 0",
        minWidth: "200px",
        minHeight: "100px",
        maxHeight: "40vh"
    };

    return (
        <Container style={{maxWidth: "80vw"}}>
            <Row>
                <Col>
                    <DashboardItem title="Actual Balance" containerStyle={containerItemStyle}
                                   pending={dashboardModel.pending}>
                        <AccountBalanceView accountBalance={dashboardModel.accountBalance}
                                            monthlyIncomes={dashboardModel.monthlyIncomes}
                                            monthlyOutcomes={dashboardModel.monthlyOutcomes}
                                            subTitlesFontSize={12}/>
                    </DashboardItem>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AccountTransactionsSummaryView accountId={dashboardModel.accountId ?? ""}
                                                    transactions={dashboardModel.accountTransactions ?? []}
                                                    tableStyle={containerItemStyle}
                                                    pending={dashboardModel.pending}/>
                </Col>
                <Col>
                    <DashboardItem title="Categories Monthly Balance" containerStyle={containerItemStyle}
                                   pending={dashboardModel.pending}>
                        <CategoriesPanelView categories={dashboardModel.categoriesBalances}/>
                    </DashboardItem>
                </Col>
            </Row>
        </Container>);
}

export default Dashboard;