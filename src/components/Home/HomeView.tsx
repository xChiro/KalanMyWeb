import React, {useEffect} from 'react';
import {selectToken, userSlice} from "../../store/user/user.slice";
import {getDashboard} from "../../store/dashboard/dashboard.fetch";
import {postOpenAccount} from "../../services/AccountService";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {useAuth0} from "@auth0/auth0-react";
import {selectDashboard} from "../../store/dashboard/dashboard.slice";
import {Outlet, useNavigate} from "react-router-dom";

function HomeView() {
    const dispatch = useAppDispatch();
    const {isAuthenticated, getIdTokenClaims} = useAuth0();
    const tokenModel = useAppSelector(selectToken);
    const dashboardModel = useAppSelector(selectDashboard);
    const navigate = useNavigate();

    useEffect(
        () => {
            if (dashboardModel.accountId === undefined && !dashboardModel.pending && tokenModel.token !== "") {
                postOpenAccount(dashboardModel.accountId!, tokenModel.token).then(
                    () => {
                        dispatch(getDashboard(tokenModel.token));
                        navigate("./dashboard");
                    }
                )
            }
            else if(!dashboardModel.pending && tokenModel.token !== "") {
                navigate("./dashboard");
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [dashboardModel.accountId]);

    useEffect(() => {
        if (isAuthenticated) {
            (async () => {
                const accessToken = await getIdTokenClaims();
                dispatch(userSlice.actions.setToken(accessToken?.__raw));
                dispatch(getDashboard(accessToken?.__raw as string));
            })()
        }
        ;
    }, [isAuthenticated, dispatch, getIdTokenClaims]);

    return (
        <Outlet/>
    );
}

export default HomeView;