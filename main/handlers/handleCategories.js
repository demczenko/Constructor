import { getCategory } from "../../api/category.js";
import { addParamsCategory } from "../../helpers/addQueryParams.js";
import { parseCategory } from "../../helpers/parseCategory.js";



export function handleCategories(state) {
    return addParamsCategory(state.template, state.categories.map(category => parseCategory(category, state.country)), state.ids[state.country], state.country)
}

// export async function handleCategories(state) {
//     // const category = state.categories.map(category => {
//     //     getCategory(category, )
//     // })

//     const parsedCategories = []
//     for (const category of state.categories) {
//         const result = await getCategory(category.category, state.country)
//         if (result.status === "success") {
//             const {data} = result
//             parsedCategories.push({...category, href: data.origin + data.category})
//         }
//     }
//     console.log(parsedCategories);

//     // return addParamsCategory(state.template, state.categories.map(category => parseCategory(category, state.country)), state.ids[state.country], state.country)
//     return parsedCategories
// }