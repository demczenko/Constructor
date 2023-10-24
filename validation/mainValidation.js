import { validation } from "./index.js";

export function mainValidation({
  tableQueries,
  startId,
  newsletterLinks,
  landingLinks,
  tableColumns,
  token,
}) {
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

  if (!token) {
    return Toastify({
      text: "Please, set token.",
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
  }
}
