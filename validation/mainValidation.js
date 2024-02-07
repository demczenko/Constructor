import { validation } from "./index.js";

export function mainValidation({
  tableQueries,
  startId,
  newsletterLinks,
  landingLinks,
  tableColumns,
  products
}) {
  if (!products || products.length === 0) {
    return Toastify({
      text: "Please set products in data/products/data.js",
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
  }

  if (!startId) {
    return Toastify({
      text: "Please set startId in app.js",
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
  }

  if (!newsletterLinks || !landingLinks) {
    return Toastify({
      text: "Please set newsletterLinks, landingLinks in app.js",
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
  }

  if (!tableQueries) {
    return Toastify({
      text: "Please set tableQueries in app.js",
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
  }

  if (tableQueries) {
    if (!validation.isTableQueryValid(tableQueries)) {
      return Toastify({
        text: "Please fix tableQueries in app.js",
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
    }
  }

  if (!tableColumns) {
    return Toastify({
      text: "If you want to get text from spreadsheet. Please, set tableColumns relative to countries.",
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
  }
}
