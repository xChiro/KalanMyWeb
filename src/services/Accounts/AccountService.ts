export async function getAccountDashboard(token: string) {
    const response = await fetch(process.env.REACT_APP_BASE_API + "/accounts/dashboard", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
    
    return await response.json();
}