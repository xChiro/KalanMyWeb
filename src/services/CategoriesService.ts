export async function getCategoriesByAccount(accountId: string, token: string) {
    const response = await fetch(process.env.REACT_APP_BASE_API + `/accounts/${accountId}/categories`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    });

    return await response.json();
}