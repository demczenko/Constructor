import { addParamsCategory } from "../../helpers/addQueryParams.js";
import { parseCategory } from "../../helpers/parseCategory.js";



export function handleCategories(state) {
    return state.template === "newsletter"
    ?
    addParamsCategory(state.categories.map(category => parseCategory(category, state.country)), state.ids[state.country], state.country)
    :
    state.categories.map(category => parseCategory(category, state.country))
}