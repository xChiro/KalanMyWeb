import React from "react";
import {Card} from "react-bootstrap";

function DashboardItem(props: React.HTMLAttributes<HTMLElement>) {
    return (
        <Card className={'dashboard-item'} style={props.style}>
            <Card.Body className={'card-body'}>
                <Card.Title style={{textAlign: "left", padding: "1vh 0 0 1vw", marginBottom: "2vh", fontSize: "1em"}}>
                    {props.title}
                </Card.Title>
                {props.children}
            </Card.Body>
        </Card>
    );
}

export default DashboardItem;