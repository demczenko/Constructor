import endpoint from "./endpoint"





export async function updateCampaign(id, body) {

    const data = new FormData()
    data.append("body", body)

    return fetch(`https://${endpoint}:7777/api/campaign/?id=${id}`, {
        method: "POST",
        body: data
    }).then(data => data.json())
}