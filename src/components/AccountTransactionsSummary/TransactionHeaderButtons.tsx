import React from 'react';

function TransactionHeaderButtons() {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "0",
            textAlign: "center",
            width: "100%",
            color: "white"
        }}>
            <div className="bg-positive-value"
                 style={{borderRadius: "10px 0 0 0",}}>
                Add Income Transaction
            </div>
            <div className="bg-negative-value"
                 style={{borderRadius: "0 10px 0 0",}}>
                Add Outcome Transaction
            </div>
        </div>
    );
}

export default TransactionHeaderButtons;