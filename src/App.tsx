import {useEffect} from 'react';
import './App.css';
import TopNavBarView from "./components/TopNavBar/TopNavBarView";
import Dashboard from "./components/Dashboard/DashboardView";
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {selectDashboard} from "./store/dashboard/dashboard.slice";
import {getDashboard} from "./store/dashboard/dashboard.fetch";
import {useAuth0} from "@auth0/auth0-react";
import {Button} from "react-bootstrap";

function App() {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const dispatch = useAppDispatch();

    useEffect(() => {
       dispatch(getDashboard());
    }, [dispatch]);
    
    const dashboard = useAppSelector(selectDashboard);
    const body =  !dashboard.pending ? <Dashboard/> : <div> Loading... </div>;

    return (
        <div className="App">
            {dashboard.accountId ? <TopNavBarView/> : null}
            <div className="App-Body">
                {isAuthenticated ? body : <Button onClick={() => loginWithRedirect()}>Log in</Button>}
            </div>
        </div>
    );
}

export default App;
