import React from 'react';
import CurrencyFormat from "../CurrencyFormant/CurrencyFormat";
import {capitalizeFirst} from "../../utilities/TextFormatters";

interface CategoryCardViewProps extends React.HTMLAttributes<HTMLElement> {
    name: string,
    balance: number,
}

function CategoryCardView(props: CategoryCardViewProps) {

    const balanceClassName = props.balance >= 0 ? "positive-value" : "negative-value";

    return (
        <div className="d-inline-block" style={{maxWidth: "13rem", margin: "0 15px 0 15px"}}>
            <div>
                <h4 className={balanceClassName}>
                    <CurrencyFormat value={props.balance}/>
                </h4>
            </div>
            <div>
                <label style={{ fontSize: ".8em"}}>{capitalizeFirst(props.name)}</label>
            </div>
        </div>
    );
}

export default CategoryCardView;