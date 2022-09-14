import './App.css';
import HomeView from "./components/Home/HomeView";
import TopNavBarView from "./components/TopNavBar/TopNavBarView";

function App() {
    return (
        <div className="App">
            <TopNavBarView/>
            <div className="App-Body">
                <HomeView/>
            </div>
        </div>
    );
}

export default App;
