import React from 'react';
import './App.css';
import TopNavBarView from "./components/TopNavBar/TopNavBarView";
import CreateAccountPageView from "./components/CraeteAccount/CreateAccountPageView";

function App() {
    return (
        <div className="App">
            <TopNavBarView />
            <div className="App-Body">
               <CreateAccountPageView style={{ backgroundColor: "#292929"}}/>
            </div>
        </div>
    );
}

export default App;
