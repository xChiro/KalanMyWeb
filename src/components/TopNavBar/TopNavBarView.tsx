import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faUser} from "@fortawesome/free-solid-svg-icons";

function TopNavBarView() {

    return (
        <div className="container-fluid" style={{
            height: "45px",
            background: "#222222",
            marginBottom: "5px",
            padding: ".3em 10vw 0px"
        }}>
            <div className="row">
                <div className="col" style={{height: "100%", textAlign: "left"}}>
                    <div style={{display: "inline-block"}}>
                        <span style={{fontSize: "1.6em"}}>
                            <FontAwesomeIcon icon={faBars} style={{margin: "5px 10px 0 0"}}/>
                            Kalan My Money
                        </span>
                    </div>
                </div>
                <div className="col-1" style={{textAlign: "right"}}>
                    <FontAwesomeIcon icon={faUser} style={{
                        height: "2em"
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default TopNavBarView;