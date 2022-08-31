import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOut} from "@fortawesome/free-solid-svg-icons";
import {useAuth0} from "@auth0/auth0-react";
import {Button} from "react-bootstrap";

function TopNavBarView() {
    const {logout} = useAuth0();

    return (
        <div className="container-fluid" style={{
            height: "45px",
            background: "#222222",
            marginBottom: "5px",
            padding: ".3em 10vw 0px"
        }}>
            <div className="row">
                <div className="col" style={{textAlign: "left"}}>
                    <span style={{fontSize: "1em"}}>
                        Kalan My Money
                    </span>
                </div>
                <div className="col" style={{textAlign: "right"}}>
                    <span style={{marginRight: "10px"}}>Welcome</span>
                    <Button className="btn-danger" style={{border: "none"}}
                            onClick={() => logout({returnTo: window.location.origin})}>
                        <FontAwesomeIcon icon={faSignOut} style={{
                            fontSize: "1em"
                        }}/>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default TopNavBarView;