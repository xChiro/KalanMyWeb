import DashboardItem from "./DashboardItem";
import CategoriesPanelView from "../Categories/CategoriesPanelView";
import {selectDashboard} from "../../store/dashboard/dashboard.slice";
import AccountBalanceView from "../AccountBalance/AccountBalanceView";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Col, Container, Row} from "react-bootstrap";
import AccountTransactionsSummaryView from "../AccountTransactionsSummary/AccountTransactionsSummaryView";
import {CSSProperties, useEffect} from "react";
import {selectUser, userSlice} from "../../store/user/user.slice";
import {getDashboard} from "../../store/dashboard/dashboard.fetch";
import {useAuth0} from "@auth0/auth0-react";
import {postOpenAccount} from "../../services/Accounts/AccountService";

function Dashboard() {
    const dispatch = useAppDispatch();
    const {isAuthenticated, getIdTokenClaims} = useAuth0();
    const dashboardModel = useAppSelector(selectDashboard);
    const userModel = useAppSelector(selectUser);
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

    useEffect(() => {
        (async () => {
            const accessToken = await getIdTokenClaims();

            if (isAuthenticated) {
                dispatch(userSlice.actions.setToken(accessToken?.__raw));
                dispatch(getDashboard(accessToken?.__raw as string));
            }
        })();
    }, [dispatch]);

    if (dashboardModel.accountId === undefined && !dashboardModel.pending && userModel.token !== "") {
        postOpenAccount(null, userModel.token).then(
            value => {
                dispatch(getDashboard(userModel.token));
            }
        )
    }

    return (
        <Container>
            <Row>
                <Col>
                    <AccountTransactionsSummaryView accountId={dashboardModel.accountId ?? ""}
                                                    transactions={dashboardModel.accountTransactions ?? []}
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

export default Dashboard;