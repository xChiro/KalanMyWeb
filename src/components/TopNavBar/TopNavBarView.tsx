import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOut} from "@fortawesome/free-solid-svg-icons";
import {useAuth0} from "@auth0/auth0-react";
import {Button} from "react-bootstrap";
import React from "react";

function TopNavBarView() {
    const {logout, isAuthenticated, loginWithRedirect} = useAuth0();

    const logOutButton =
        <Button className="btn-danger" style={{border: "none"}}
                onClick={() => logout({returnTo: window.location.origin})}>
            <FontAwesomeIcon icon={faSignOut} style={{
                fontSize: "1em"
            }}/>
        </Button>;

    const loginButton = <Button onClick={() => loginWithRedirect()}>Log in</Button>;

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "45px",
            background: "#222222",
            borderBottom: '1px solid #494544',
            padding: "0 10.8vw 0px"
        }}>
            <h1 style={{ fontSize: "1.1em", margin: "0" }}>
                Kalan My Money
            </h1>
            <nav>
                {isAuthenticated ? logOutButton : loginButton}
            </nav>
        </div>
    );
}

export default TopNavBarView;