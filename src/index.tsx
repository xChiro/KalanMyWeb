import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './statics/commons.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/Dashboard/DashboardItems.css';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {Auth0Provider} from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-eagd56ww.us.auth0.com"
            clientId="7U8D6tG9Kh5HXcu6nJMM5N0PheTvUW93"
            redirectUri={window.location.origin}>
            <Provider store={store}>
                <App/>
            </Provider>
        </Auth0Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
