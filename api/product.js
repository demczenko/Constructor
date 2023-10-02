import { parseLinkToCountry } from "../helpers/parseLinkToCountry.js";
import endpoint from "./endpoint.js";


const TABLE_ID = "1Ei4LYnceelUYgtaPrfvXRgiBzioRLXQvX4h71aZcBE8"



export async function getIds(products) {

    return Promise.all(products.map(product => fetch(`https://${endpoint}:7777/product-ids/${product.main_id}`)))
        .then(r => Promise.all(r.map(ids => ids.json())))
        .then(r => Promise.all(r.map(ids => ids)))
        .catch(err => {
            throw new Error(err)
        })

}

export async function getLink(ids, country) {

    return Promise.all(ids.map(id => fetch(`https://${endpoint}:7777/product-links/${id}`)))
        .then(r => Promise.all(r.map(item => item.json())))
        .then(r => Promise.all(r.map(item => parseLinkToCountry(item)[country])))
}



export async function getProductPrice(id) {

    try {
        const response = await fetch(`https://${endpoint}:7777/product/${id}`).then(r => r.json())
        const data = JSON.parse(response.res)[id];
        return data
    } catch (error) {
        throw new Error(error);
    }
}




export async function getProductsPrice(ids) {

    try {
        const response = await fetch(`https://${endpoint}:7777/products/?ids=${JSON.stringify(ids)}`).then(r => r.json())
        return response
    } catch (error) {
        throw new Error(error);
    }
}