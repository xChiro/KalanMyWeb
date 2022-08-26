import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";

function TransactionHeaderButtons() {
    return (
        <ButtonGroup style={{
            width: "100%",
            color: "white",
        }}>
            <Button
                 style={{borderRadius: "10px 0 0 0", backgroundColor:"#30932C", border: "none"}}>
                Add Income Transaction
            </Button>
            <Button
                 style={{borderRadius: "0 10px 0 0", backgroundColor:"#BA0E0E", border: "none"}}>
                Add Outcome Transaction
            </Button>
        </ButtonGroup>
    );
}

export default TransactionHeaderButtons;