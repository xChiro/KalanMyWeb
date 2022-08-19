import {Card} from "react-bootstrap";
import {HTMLProps} from "react";
import CreateAccountFormView from "./CreateAccountFormView";

function CreateAccountPageView(props: HTMLProps<HTMLElement>) {
    
    return (
        <Card style={props.style}>
            <Card.Title>
                Create Account
            </Card.Title>
            <Card.Body>
                <CreateAccountFormView/>
            </Card.Body>
        </Card>);
}

export default CreateAccountPageView;