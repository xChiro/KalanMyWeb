import {HostVariables} from "../../configs/HostVariables";

const testingToken: string =  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZXN0SXNzdWVyIiwiaWF0IjoxNjU4MTAxNzIxLCJleHAiOjE2ODk2Mzc3MjEsImF1ZCI6Ind3dy5leGFtcGxlLmNvbSIsInN1YiI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJHaXZlbk5hbWUiOiJKb2hubnkifQ._tGy-Rh1FpeH1PjuySi4Lh5yyetCMPkhClaBFGZxdtI";

export async function getAccountDashboard() {
    const response = await fetch(HostVariables.baseApiURL + "/accounts/dashboard", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': testingToken
        }
    });
    
    return await response.json();
}