import React, {useState} from 'react';
import {Button, ButtonGroup, Modal} from "react-bootstrap";
import {TransactionHeaderButtonsProps} from "./TransactionHeaderButtonsProps";
import TransactionForm from "../TransactionForms/TransactionForm";
import {TransactionTypes} from "../TransactionForms/TransactionFormProps";

function TransactionHeaderButtons(props: TransactionHeaderButtonsProps) {
    const [transactionType, setTransactionType] = useState(TransactionTypes.Income);
    const [showModal, setShowModal] = useState(false);

    const onClose = () => setShowModal(false);

    const showTypeModal = (type: TransactionTypes) => {
        setTransactionType(type);
        setShowModal(true);
    };

    return (
        <>
            <ButtonGroup style={{
                width: "100%",
                height: "35px",
                color: "white",
            }}>
                <Button
                    style={{borderRadius: "10px 0 0 0", backgroundColor: "#BA0E0E", border: "none"}}
                        onClick={() => showTypeModal(TransactionTypes.Outcome)}>
                    <span style={{fontSize: "1rem"}}>Add Outcome</span>
                </Button>
                <Button
                    style={{borderRadius: "0 10px 0 0", backgroundColor: "#30932C", border: "none"}}
                    onClick={() => showTypeModal(TransactionTypes.Income)}
                >
                    <span style={{fontSize: "1rem"}}>Add Income</span>
                </Button>
            </ButtonGroup>
            <Modal
                show={showModal}
                onHide={onClose}
                backdrop="static"
                keyboard={false}
                style={{color: "white"}}
                contentClassName="primary-background-color">
                <Modal.Header className={"secondary-background-color"} style={{border: "none", color: "gray", height: "35px"}}>
                    <Modal.Title style={{fontSize: "1em"}}>{transactionType === TransactionTypes.Income ? "Add Income Transaction" : "Add Outcome Transaction"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={"primary-background-color"} style={{borderRadius: "0 0 10px 10px"}}>
                    <TransactionForm accountId={props.accountId} onCloseModal={onClose} type={transactionType}/>
                </Modal.Body>
            </Modal>
        </>);
}

export default TransactionHeaderButtons;