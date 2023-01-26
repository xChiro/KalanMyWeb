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
            flexDirection:"column",
            flexWrap: "wrap",
            justifyContent: "center",
            flexShrink: 1,
            height: "45px",
            background: "#222222",
            borderBottom: '1px solid #494544',
            padding: "0 10.8vw 0px"
        }}>
            <div style={{fontSize: "1em", alignSelf: "flex-start"}}>
                <span>
                    Kalan My Money
                </span>
            </div>
            <div style={{alignSelf: "flex-end"}}>
                {isAuthenticated ? logOutButton : loginButton}
            </div>
        </div>
    );
}

export default TopNavBarView;