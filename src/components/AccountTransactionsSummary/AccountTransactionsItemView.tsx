import React from 'react';
import {AccountTransactionsItemProps} from "./AccountTransactionsItemProps";
import CurrencyFormat from "../CurrencyFormant/CurrencyFormat";

function AccountTransactionsItemView(props: AccountTransactionsItemProps) {
    const time = props.time ?? "";

    return (
        <tr>
            <td>
                {props.description}
            </td>
            <td>
                {props.category}
            </td>
            <td>
                {(new Date(time)).toLocaleString()}
            </td>
            <td>
                <CurrencyFormat value={props.amount != null && props.amount >= 0 ? props.amount : null}/>
            </td>
            <td>
                <CurrencyFormat value={props.amount != null && props.amount < 0 ? props.amount : null}/>
            </td>
        </tr>
    );
}

export default AccountTransactionsItemView;