import DashboardItem from "./DashboardItem";
import CategoriesPanelView from "../Categories/CategoriesPanelView";
import {selectDashboard} from "../../store/dashboard/dashboard.slice";
import AccountBalanceView from "../AccountBalance/AccountBalanceView";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Col, Container, Row} from "react-bootstrap";
import AccountTransactionsSummaryView from "../AccountTransactionsSummary/AccountTransactionsSummaryView";
import {useEffect} from "react";
import {selectUser, userSlice} from "../../store/user/user.slice";
import {getDashboard} from "../../store/dashboard/dashboard.fetch";
import {useAuth0} from "@auth0/auth0-react";
import {postOpenAccount} from "../../services/Accounts/AccountService";

function Dashboard() {
    const dispatch = useAppDispatch();
    const {isAuthenticated, getIdTokenClaims} = useAuth0();
    const dashboardModel = useAppSelector(selectDashboard);
    const userModel = useAppSelector(selectUser);
    const containerItemStyle = {
        backgroundColor: "#292929",
        margin: "0px 0 10px 0",
        minWidth: "200px",
        minHeight: "100px",
        maxHeight: "40vh"
    };

    useEffect(() => {
        (async () => {
            const accessToken = await getIdTokenClaims();

            if (isAuthenticated) {
                dispatch(userSlice.actions.setToken(accessToken?.__raw));
                dispatch(getDashboard(accessToken?.__raw as string));
            }
        })();
    }, [getIdTokenClaims, isAuthenticated, dispatch]);

    if (dashboardModel.accountId === undefined && !dashboardModel.pending && userModel.token !== "") {
        postOpenAccount(null, userModel.token).then(
            () => {
                dispatch(getDashboard(userModel.token));
            }
        )
    }

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