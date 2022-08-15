import React from 'react';

interface CategoryCardViewProps {
    name: string,
    balance: number,
}

function CategoryCardView(props: CategoryCardViewProps) {

    return (
        <div className="d-inline-block" style={{maxWidth: "13rem", margin: "0 15px 0 15px"}}>
            <div>
                <h3 style={{fontWeight: "bold"}}>{props.balance}</h3>
            </div>
            <div>
                <label>{props.name}</label>
            </div>
        </div>
    );
}

export default CategoryCardView;