import React from 'react';
import {CurrencyFormantProps} from "./CurrencyFormatProps";

function CurrencyFormat(props: CurrencyFormantProps) {
    return (
        <span>
            {props.value ? '$' + props.value?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : "$0.00"}
        </span>
    );
}

export default CurrencyFormat;