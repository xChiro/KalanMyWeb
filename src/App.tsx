import {useEffect} from 'react';
import './App.css';
import TopNavBarView from "./components/TopNavBar/TopNavBarView";
import Dashboard from "./components/Dashboard/DashboardView";
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {selectDashboard} from "./store/dashboard/dashboard.slice";
import {getDashboard} from "./store/dashboard/dashboard.fetch";
import TransactionForm from "./components/TransactionForms/TransactionForm";
import {TransactionTypes} from "./components/TransactionForms/TransactionFormProps";

function App() {
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
                {body}
                {/*<TransactionForm type={TransactionTypes.Income} accountId={dashboard.accountId ?? ""}/>*/}
            </div>
        </div>
    );
}

export default App;
