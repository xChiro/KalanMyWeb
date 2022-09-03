import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import {TransactionFormProps, TransactionTypes} from "./TransactionFormProps";
import {postIncomeTransaction, postOutcomeTransaction} from "../../services/Accounts/TransactionService";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {getDashboard} from "../../store/dashboard/dashboard.fetch";
import {selectUser} from "../../store/user/user.slice";

function TransactionForm(props: TransactionFormProps) {
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [disabledButtons, setDisabledButtons] = useState(false);
    const dispatch = useAppDispatch();
    const userModel = useAppSelector(selectUser);

    const handlerSubmit = (e: any) => {
        e.preventDefault();
        setDisabledButtons(true);
        const transactionData = {
            accountId: props.accountId,
            amount: Number(amount),
            transactionDescription: description,
            category: category
        };

        if (props.type === TransactionTypes.Income) {
            postIncomeTransaction(transactionData, userModel.token).then(value => {
                    refreshData(userModel.token);
                },
                error => {
                    alert(error);
                });
        } else {
            postOutcomeTransaction(transactionData, userModel.token).then(value => {
                    refreshData(userModel.token);
                },
                error => {
                    alert(error);
                });
        }
    }

    const refreshData = (token: string) => {
        dispatch(getDashboard(token));
        props.onCloseModal();
    }

    return (
        <Form className={"primary-background-color"} style={{textAlign: "left"}} onSubmit={handlerSubmit}>
            <Form.Group className="mb-3" controlId="amount">
                <Form.Label>Amount</Form.Label>
                <CurrencyInput
                    name="Amount"
                    className="form-control"
                    placeholder="Amount"
                    defaultValue={0}
                    decimalsLimit={2}
                    value={amount}
                    onValueChange={(value) => {
                        setAmount(value ?? "0")
                    }}
                    prefix="$"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description"
                              type="text"
                              placeholder="Description"
                              value={description}
                              onChange={e => {
                                  setDescription(e.target.value)
                              }}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                    name="category"
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={e => {
                        setCategory(e.target.value)
                    }}/>
            </Form.Group>
            <div style={{textAlign: "right"}}>
                <Button variant="danger" type="button"
                        style={{marginRight: "10px", backgroundColor: "#BA0E0E", width: "9rem"}}
                        onClick={() => props.onCloseModal()} disabled={disabledButtons}>
                    Cancel
                </Button>
                <Button variant="primary" type="submit" style={{width: "9rem", backgroundColor: "#30932C"}}
                        disabled={disabledButtons}>
                    Add Transaction
                </Button>
            </div>
        </Form>
    );
};

export default TransactionForm;