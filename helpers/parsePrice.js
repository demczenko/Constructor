import { normalize } from './normalizePrice.js';
import { priceFormats  } from './priceFormats.js'


export function parsePrice(pricesData) {

  for (const key in pricesData) {
    const product = pricesData[key];

    pricesData[key] = {
      ...product,
      lowPrice: priceFormats[product.country](product.lowPrice),
      highPrice: product.highPrice !== null ? priceFormats[product.country](product.highPrice): "",
    }
  }
  return pricesData
}

