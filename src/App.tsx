import React, {useEffect} from 'react';
import './App.css';
import TopNavBarView from "./components/TopNavBar/TopNavBarView";
import CreateAccountPageView from "./components/CraeteAccount/CreateAccountPageView";
import Dashboard from "./components/Dashboard/Dashboard";
import {selectAccount} from "./store/account/account.slice";
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {selectDashboard} from "./store/dashboard/dashboard.slice";
import {getDashboard} from "./store/dashboard/getDashboard.fetch";

function App() {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
       dispatch(getDashboard());
    }, [dispatch]);
    
    const dashboard = useAppSelector(selectDashboard);
    const body =  dashboard.accountId ?    
        <Dashboard/> :
        <CreateAccountPageView 
            style={{backgroundColor: "#292929", maxWidth: "35vw", minWidth: "350px", margin: "auto"}}/>;

    return (
        <div className="App">
            {dashboard.accountId ? <TopNavBarView/> : null}
            <div className="App-Body">
                {body}
            </div>
        </div>
    );
}

export default App;
