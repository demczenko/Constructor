import { getState, setState } from "../main/initApp.js";
import { priceFormats } from "./priceFormats.js";

export function parsePrice() {
  const products = getState("products");

  const newProducts = products.map((product) => {
    return {
      ...product,
      lowPrice: priceFormats[product.country.toUpperCase()](product.lowPrice),
      highPrice:
        product.highPrice !== null
          ? priceFormats[product.country.toUpperCase()](product.country === "PL" ? Math.ceil(product.highPrice).toString() : product.highPrice)
          : "",
    };
  });

  setState("products", newProducts);
}
