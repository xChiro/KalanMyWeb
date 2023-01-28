import React, {useState} from 'react';
import {MonthlyTransactionsProps} from "./MonthlyTransactionsProps";
import {useAppSelector} from "../../store/hooks";
import {selectToken} from "../../store/user/user.slice";
import AccountTransactionsItemView from "../AccountTransactionsSummary/AccountTransactionsItemView";
import {
    getTransactionsMonthly
} from "../../services/TransactionService";
import {Button, Form} from "react-bootstrap";
import DashboardItem from "../Dashboard/DashboardItem";
import {toMonthName} from "../../utilities/TextFormatters";
import {selectDashboard} from "../../store/dashboard/dashboard.slice";
import {useNavigate} from "react-router-dom";
import CategoriesSelectView from "../CategoriesSelect/CategoriesSelectView";

function MonthlyTransactionsView(props: MonthlyTransactionsProps) {
    const tokenModel = useAppSelector(selectToken);
    const dashboardModel = useAppSelector(selectDashboard);
    const navigate = useNavigate();

    const currentDate = new Date();
    const [transactions, setTransactions] = useState(Array<any>);

    const containerItemStyle = {
        backgroundColor: "#292929",
        margin: "0 auto",
        maxWidth: "80vw",
        maxHeight: "80vh",
    };

    const getTransactions = () => {

        const rowsBody = [];
        for (let i = 0; i < transactions.length; i++) {

            const current = transactions[i];
            const bottomBorder = i < transactions.length - 1;
            rowsBody.push(
                <AccountTransactionsItemView key={current.id} id={current.id} amount={current.amount}
                                             category={current.category}
                                             description={current.description} time={current.time}
                                             bottomBorder={bottomBorder}/>
            );

        }
        return rowsBody;

    }
    const getMonthsOptions = () => {
        let monthsOptions = [];
        for (let i = 0; i <= 11; i++) {

            monthsOptions.push(<option key={i} value={i}>{toMonthName(i)}</option>);
        }
        return monthsOptions;

    }
    const getYearsOptions = () => {
        let yearsOptions = [];
        for (let i = 2020; i <= currentDate.getFullYear(); i++) {

            yearsOptions.push(<option key={i} value={i}>{i}</option>);
        }
        return yearsOptions;

    }
    const onBackClick = () => navigate("../dashboard");

    const [filters, setFilters] = useState({
        month: props.initMonth ?? (currentDate.getMonth()),
        year: props.initYear ?? currentDate.getFullYear()
    });
    const [pending, setPending] = useState(false);
    const [category, setCategory] = useState("");

    const getMonthlyTransactions = () => {
        setPending(true);
        getTransactionsMonthly(dashboardModel.accountId!, filters.year,
            filters.month + 1, tokenModel.token, category).then(
            value => {
                setTransactions(value);
                setPending(false);
            },
            _ => {
                alert("Error when trying to obtain transactions");
                setPending(false);
            }
        );
    };

    const onChange = (event: any) => {
        const value = Number(event.target.value);
        setFilters({
            ...filters,
            [event.target.id]: value
        })
    };

    return (
        <DashboardItem pending={pending} containerStyle={containerItemStyle} title={"Monthly Transactions"}>
            <div style={{display: "flex", justifyContent: "space-between", verticalAlign: "middle", margin: "10px", flexWrap: "wrap"}}>
                <div>
                    <Button className="btn-danger" onClick={() => onBackClick()}>Back</Button>
                </div>
                <div style={{display: "flex", gap: "10px", flexWrap: "wrap"}}>
                    <div>
                        <Form.Select
                            id="month"
                            aria-label="Default select example"
                            value={filters.month}
                            onChange={onChange}>
                            {getMonthsOptions()}
                        </Form.Select>
                    </div>
                    <div>
                        <Form.Select
                            id="year"
                            aria-label="Default select example"
                            value={filters.year}
                            onChange={onChange}>
                            {getYearsOptions()}
                        </Form.Select>
                    </div>
                    <div>
                        <CategoriesSelectView accountId={dashboardModel.accountId} className={"form-control"}
                                              onChange={setCategory} value={category}/>
                    </div>
                    <div>
                            <Button onClick={getMonthlyTransactions}>Search</Button>
                    </div>
                </div>
            </div>
            <div style={{
                overflow: "auto",
                maxHeight: "70vh",
            }}>
                {transactions.length <= 0 ? "Not results" : getTransactions()}
            </div>
        </DashboardItem>
    );
}

export default MonthlyTransactionsView;
