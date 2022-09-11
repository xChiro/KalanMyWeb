import React, {useEffect, useState} from 'react';
import {MonthlyTransactionsProps} from "./MonthlyTransactionsProps";
import {useAppSelector} from "../../store/hooks";
import {selectUser} from "../../store/user/user.slice";
import AccountTransactionsItemView from "../AccountTransactionsSummary/AccountTransactionsItemView";
import {
    getTransactionsMonthly
} from "../../services/Accounts/TransactionService";
import {Form} from "react-bootstrap";
import DashboardItem from "../Dashboard/DashboardItem";
import {toMonthName} from "../../utilities/TextFormatters";

function MonthlyTransactionsView(props: MonthlyTransactionsProps) {
    const userModel = useAppSelector(selectUser);
    const currentDate = new Date();

    const [filters, setFilters] = useState({
        month: props.initMonth ?? (currentDate.getMonth()),
        year: props.initYear ?? currentDate.getFullYear()
    });
    const [transactions, setTransactions] = useState(Array<any>);
    const [pending, setPending] = useState(true);

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

    useEffect(() => {
        if (props.accountId) {
            setPending(true);
            getTransactionsMonthly(props.accountId, filters.year,
                filters.month + 1, userModel.token, undefined).then(
                value => {
                    setTransactions(value);
                    setPending(false);
                },
                _ => {
                    alert("Error when trying to obtain transactions");
                    setPending(false);
                }
            );
        }

    }, [filters, props.accountId, userModel.token]);

    const onChange = (event: any) => {
        const value = Number(event.target.value);
        setFilters({
            ...filters,
            [event.target.id]: value
        })
    };

    return (
        <DashboardItem pending={pending} containerStyle={containerItemStyle} title={"Monthly Transactions"}>
            <div style={{textAlign: "right", verticalAlign: "middle", margin: "10px"}}>
                <div style={{display: "inline-block"}}>
                    <div style={{display: "inline-block", marginRight: "10px"}}>
                        <Form.Label>Month: </Form.Label>
                    </div>
                    <div style={{display: "inline-block"}}>
                        <Form.Select
                            id="month"
                            aria-label="Default select example"
                            value={filters.month}
                            onChange={onChange}>
                            {getMonthsOptions()}
                        </Form.Select>
                    </div>
                </div>
                <div style={{display: "inline-block"}}>
                    <div style={{display: "inline-block", margin: "0 10px 0 20px"}}>
                        <Form.Label>Year: </Form.Label>
                    </div>
                    <div style={{display: "inline-block", marginRight: "10px"}}>
                        <Form.Select
                            id="year"
                            aria-label="Default select example"
                            value={filters.year}
                            onChange={onChange}>
                            {getYearsOptions()}
                        </Form.Select>
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