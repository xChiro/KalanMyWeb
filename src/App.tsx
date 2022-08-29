import './App.css';
import TopNavBarView from "./components/TopNavBar/TopNavBarView";
import Dashboard from "./components/Dashboard/DashboardView";
import {useAuth0} from "@auth0/auth0-react";
import {Button} from "react-bootstrap";

function App() {
    const {isAuthenticated, loginWithRedirect} = useAuth0();

    const body = isAuthenticated ? <Dashboard/> : <Button onClick={() => loginWithRedirect()}>Log in</Button>;

    return (
        <div className="App">
            {isAuthenticated ? <TopNavBarView/> : null}
            <div className="App-Body">
                {body}
            </div>
        </div>
    );
}

export default App;
