import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {postOpenAccount} from "../../services/Accounts/AccountService";
import {setOpenAccount} from "../../store/account/setOpenAccount";
import {useDispatch, useSelector} from "react-redux";

function CreateAccountFormView() {
    const dispatch = useDispatch();
    const [accountName, setAccountName] = useState("");

    const handlerSubmit = (e: any) => {
        e.preventDefault();
        postOpenAccount(accountName).then(value => {
                dispatch(setOpenAccount(value));
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