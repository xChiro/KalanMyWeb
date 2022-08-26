import React from 'react';
import CurrencyFormat from "../CurrencyFormant/CurrencyFormat";

interface CategoryCardViewProps extends React.HTMLAttributes<HTMLElement> {
    name: string,
    balance: number,
}

function CategoryCardView(props: CategoryCardViewProps) {

    const balanceClassName = props.balance >= 0 ? "positive-value" : "negative-value";

    return (
        <div className="d-inline-block" style={{maxWidth: "13rem", margin: "0 15px 0 15px"}}>
            <div>
                <h3 className={balanceClassName} style={{fontWeight: "bold"}}>
                    <CurrencyFormat value={props.balance}/>
                </h3>
            </div>
            <div>
                <label>{props.name}</label>
            </div>
        </div>
    );
}

export default CategoryCardView;