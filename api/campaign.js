import endpoint from "./endpoint"





export async function updateCampaign(id, body) {

    const data = new FormData()
    data.append("body", body)

    return fetch(`${endpoint.belianiUs}:7777/api/campaign/?id=${id}`, {
        method: "POST",
        body: data
    }).then(data => data.json())
}