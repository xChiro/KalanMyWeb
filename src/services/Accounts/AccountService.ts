export async function getAccountDashboard(token: string) {
    const response = await fetch(process.env.REACT_APP_BASE_API + "/accounts/dashboard", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    });
    
    return await response.json();
}

export async function postOpenAccount(accountName: string | null, token: string) {
    const response = await fetch(process.env.REACT_APP_BASE_API + "/Accounts/Open", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({AccountName: accountName})
    });

    return await response.json();
}