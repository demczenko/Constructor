import { addParams } from "../../helpers/addQueryParams.js";






export function handleLinks(state) {
    return state.template === "newsletter" ? addParams(state.template, state.links, state.ids[state.country], state.country) : state.links
}