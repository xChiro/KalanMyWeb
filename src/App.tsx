import './App.css';
import TopNavBarView from "./components/TopNavBar/TopNavBarView";
import Dashboard from "./components/Dashboard/DashboardView";
import {useAuth0} from "@auth0/auth0-react";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {userSlice} from "./store/user/user.slice";

function App() {
    const dispatch = useAppDispatch();
    const { isAuthenticated, loginWithRedirect, getAccessTokenSilently } = useAuth0();
    const body =  isAuthenticated ? <Dashboard/> : <Button onClick={() => loginWithRedirect()}>Log in</Button>;

    useEffect(() => {
        (async () => {
            const accessToken = await getAccessTokenSilently();
            console.log(accessToken);
            dispatch(userSlice.actions.setToken(accessToken));
        })();
    });

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
