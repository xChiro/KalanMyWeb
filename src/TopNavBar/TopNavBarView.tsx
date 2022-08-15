import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faUser} from "@fortawesome/free-solid-svg-icons";

function TopNavBarView() {

    return (
        <div className="container-fluid" style={{
            height: "3em",
            background: "#222222",
            marginBottom: ".5em",
            borderBottom: ".1em solid #707070",
            verticalAlign: "middle",
            padding: ".3em 10vmin 0 10vmin"
        }}>
            <div className="row">
                <div className="col-2" style={{ height: "100%", textAlign: "left" }}>
                    <FontAwesomeIcon icon={faBars} style={{
                        height: "2.3em"
                    }}/>
                </div>
                <div className="col" style={{textAlign: "center"}}>
                    <h4>Kalan My Money</h4>
                </div>
                <div className="col-2" style={{textAlign: "right"}}>
                    <FontAwesomeIcon icon={faUser}  style={{
                        height: "2em"
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default TopNavBarView;