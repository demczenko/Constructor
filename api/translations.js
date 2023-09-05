const TABLE_ID = "15hF-nbul3ZtRqoMiIxI15Ez5lGhee1gUeM3njz5ixtE"


export async function getTranslationRange(tableName, range, token) {
    try {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${TABLE_ID}/values/${tableName}!${range}`, {
            method: "GET",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export async function getTranslationCell(tableName, range, token) {
    try {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${TABLE_ID}/values/${tableName}!${range}`, {
            method: "GET",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}