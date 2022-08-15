import React from 'react';
import './App.css';
import TopNavBarView from "./TopNavBar/TopNavBarView";
import AccountBalanceView from "./AccountTransactions/AccountBalanceView";
import CategoriesPanelView from "./Categories/CategoriesPanelView";

function App() {
  const categories = [
    {
      "name": "Salary",
      "balance": 50.0,
    },
    {
      "name": "Groceries",
      "balance": -12.45,
    }];

  return (
      <div className="App">
        <TopNavBarView></TopNavBarView>
        <div className="App-Body">
          <div className="container">
            <div className="row">
              <div className="col">
                <AccountBalanceView/>
              </div>
              <div className="col">
                {/*<AccountBalanceView className="Dashboard-item"/>*/}
                <CategoriesPanelView categories={categories} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
