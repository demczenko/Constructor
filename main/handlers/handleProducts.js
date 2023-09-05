import { addParamsProduct } from "../../helpers/addQueryParams.js";
import { parsePrice } from "../../helpers/parsePrice.js";



export function handleProducts(state, filter) {
    return state.template === "newsletter"
    ?
    filter
    ?
    addParamsProduct(parsePrice(state.products.filter(item => item.country === state.country)), state.ids[state.country], state.country)
    :
    addParamsProduct(parsePrice(state.products.map(item => ({...item, country: state.country}))), state.ids[state.country], state.country)
    :
    parsePrice(state.products.map(item => ({...item, country: state.country})))
} 