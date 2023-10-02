import endpoint from "./endpoint";







export async function fetchHeader({type, id, country}) {
    try {
        const response = await fetch(`https://${endpoint}:7777/header/?country=${country}&id=${id}&type=${type}`).then(r => r.json())
        return response
    } catch (error) {
        console.log(error);
    }
}