import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import {TransactionFormProps, TransactionTypes} from "./TransactionFormProps";
import {postIncomeTransaction, postOutcomeTransaction} from "../../services/Accounts/TransactionService";

function TransactionForm(props: TransactionFormProps) {
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handlerSubmit = (e: any) => {
        e.preventDefault();

        const transactionData = {
            accountId: props.accountId,
            amount: Number(amount),
            transactionDescription: description,
            category: category
        };

        if (props.type == TransactionTypes.Income) {
            postIncomeTransaction(transactionData).then(value => {
                    alert("success");
                },
                error => {
                    alert(error);
                });
        } else {
            postOutcomeTransaction(transactionData).then(value => {
                    alert("success");
                },
                error => {
                    alert(error);
                });
        }
    }

    return (
        <div className="primary-background-color" style={{
            maxWidth: "35vw",
            minWidth: "325px",
            margin: "0 auto",
            padding: "10px 20px",
            borderRadius: "10px"
        }}>
            <Form style={{textAlign: "left"}} onSubmit={handlerSubmit}>
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
                    <Button variant="danger" type="submit" style={{marginRight: "10px", width: "9rem"}}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit" style={{width: "9rem"}}>
                        Add Transaction
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default TransactionForm;