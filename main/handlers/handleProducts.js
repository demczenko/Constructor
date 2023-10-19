import { addParamsProduct } from "../../helpers/addQueryParams.js";
import { parsePrice } from "../../helpers/parsePrice.js";

export function handleProducts() {
  parsePrice();
  addParamsProduct();
}
