import React from "react";
import {Card} from "react-bootstrap";
import {DashboardItemProps} from "./DashboardItemProps";

function DashboardItem(props: DashboardItemProps) {
    return (
        <div className={'dashboard-item dashboard-item-bottom' } style={props.containerStyle}>
            <Card.Body>
                <Card.Title className="dashboard-item-title" style={props.titleStyle}>
                    {props.title}
                </Card.Title>
                {props.children}
            </Card.Body>
        </div>
    );
}

export default DashboardItem;