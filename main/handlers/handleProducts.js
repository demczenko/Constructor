import { addParamsProduct } from "../../helpers/addQueryParams.js";
import { parsePrice } from "../../helpers/parsePrice.js";

export function handleProducts(state, filter) {
  return filter
    ? addParamsProduct(
        state.template,
        parsePrice(
          state.products.filter((item) => item.country === state.country)
        ),
        state.ids[state.country],
        state.country
      )
    : addParamsProduct(
        state.template,
        parsePrice(
          state.products.map((item) => ({ ...item, country: state.country }))
        ),
        state.ids[state.country],
        state.country
      );
}
