import React from "react";
import {Card} from "react-bootstrap";
import {DashboardItemProps} from "./DashboardItemProps";

function DashboardItem(props: DashboardItemProps) {
    return (
        <div className={'dashboard-item dashboard-items-bottom' } style={props.containerStyle}>
            <Card.Body>
                <Card.Title className="dashboard-title">
                    {props.title}
                </Card.Title>
                {props.pending ? "Loading..."
                : props.children }
            </Card.Body>
        </div>
    );
}

export default DashboardItem;