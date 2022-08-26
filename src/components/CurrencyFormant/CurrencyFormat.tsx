import React from 'react';
import {CurrencyFormantProps} from "./CurrencyFormant.props";

function CurrencyFormat(props: CurrencyFormantProps) {
    return (
        <span>
            {props.value ? '$' + props.value?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : null}
        </span>
    );
}

export default CurrencyFormat;