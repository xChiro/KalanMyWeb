import React from 'react';
import './App.css';
import TopNavBarView from "./components/TopNavBar/TopNavBarView";
import CreateAccountPageView from "./components/CraeteAccount/CreateAccountPageView";
import Dashboard from "./components/Dashboard/Dashboard";
import {useAppSelector} from "./store/account/hooks";
import {selectAccount} from "./store/account/account.slice";

function App() {
    const account =  useAppSelector(selectAccount);
    const body = account.accountId ? <Dashboard/> : <CreateAccountPageView style={{ backgroundColor: "#292929"}}/>;
    
    return (
        <div className="App">   
            <TopNavBarView />
            <div className="App-Body">
                {body}
            </div>
        </div>
    );
}

export default App;
