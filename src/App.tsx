import React from 'react';
import './App.css';
import TopNavBarView from "./TopNavBar/TopNavBarView";
import Dashboard from "./Dashboard/Dashboard";

function App() {
    return (
        <div className="App">
            <TopNavBarView />
            <div className="App-Body">
                <Dashboard />
            </div>
        </div>
    );
}

export default App;
