import free from "../data/templates/free.js"
import {getState} from "../main/initApp.js"

export function priceFree(product) {
  const country = getState("country")
  return {...product, lowPrice: free[country], highPrice: product.lowPrice}
}