import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {postOpenAccount} from "../../services/Accounts/AccountService";
import {openAccount} from "../../store/account/account.slice";
import {useAppDispatch} from "../../store/hooks";

function CreateAccountFormView() {
    const [accountName, setAccountName] = useState("");
    const dispatch = useAppDispatch();

    const handlerSubmit = (e: any) => {
        e.preventDefault();
        postOpenAccount(accountName).then(value => {
                dispatch(openAccount(value));
                window.location.reload();
            },
            error => {
                alert(error)
            });
    }

    return (
        <Form onSubmit={handlerSubmit}>
            <Form.Group>
                <Form.Label>Account Name: </Form.Label>
                <Form.Control type="text" placeholder="Account Name" value={accountName}
                              onChange={e => setAccountName(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit" style={{marginTop: "10px"}}>
                Create Account
            </Button>
        </Form>);
}

export default CreateAccountFormView;