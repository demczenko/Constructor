import shopIds from "../data/templates/shopIds.js"




export function parseShopId(products, data) {
    let countryToId = {}

    data.forEach((arr, index) => {
        const mainProductId = products[index].main_id

        for(let i in arr) {
            const obj = arr[i]
    
            if (obj.shop_id in shopIds) {
                countryToId[mainProductId] = {
                    ...countryToId[mainProductId],
                    [shopIds[obj.shop_id]]: obj.id
                }
            }
        }

        countryToId[mainProductId]["CHDE"] = mainProductId
        countryToId[mainProductId]["CHFR"] = mainProductId
    })



    return countryToId
}