import {
  clickRenderBtnHandler,
  copyHandlerTemplate,
  openCampaignHandler,
} from "./events.js";
import { attachCss, incrementId } from "../helpers/index.js";
import templates from "../pages/index.js";
import { SpinnerInit } from "../helpers/spinner/spinerOptions.js";
import origins from "../data/templates/origins.js";
import products from "../data/products/data.js";
import categories from "../data/categories/data.js";

import { fetchToken } from "../api/index.js";
import { handleProduct } from "./handlers/index.js";
import { mainValidation } from "../validation/mainValidation.js";
import { fetchTranslations, parseLinks } from "../api/fetch/fetch.js";
import { addParams, getQueryLink } from "../helpers/getQueryLink.js";
import { getProduct } from "../api/product.js";

const root = document.querySelector("#app");
const state = {
  country: "DE",
  loading: false,
  template: "newsletter",
  ids: {},

  links: [],
  products: [],
  categories: [],
  productsIds: [],
  translations: [],
  token: "",
};

export function setState(key, value) {
  state[key] = value;

  if (key === "template") {
    attachCss(state);
    document.querySelector(".renderTemplate").textContent = value;
    window.location.hash = "country=" + state.country + "&template=" + value;
  }

  if (key === "loading" && value === true) {
    root.innerHTML = "";
    SpinnerInit.spin(root);
  }

  if (key === "loading" && value === false) {
    SpinnerInit.stop(root);
  }
}

export function getState(key) {
  if (key in state) {
    return state[key];
  } else {
    return undefined;
  }
}

export function initApp({
  tableQueries,
  tableColumns,
  startId,
  newsletterLinks,
  landingLinks,
  token,
}) {
  mainValidation({
    tableQueries,
    tableColumns,
    products,
    startId,
    newsletterLinks,
    landingLinks,
  });

  setState("ids", incrementId(startId));
  setEvents();
  attachCss(state);

  async function render() {
    setState("loading", true);

    if (token) {
      const tokenResponse = await fetchToken(token);
      if (tokenResponse.Response["Status-Code"] === 200) {
        setState("token", tokenResponse.access_token);
      } else {
        Toastify({
          text: "Please refresh token. " + tokenResponse.error,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
      }
    }

    if (tableQueries.length > 0) {
      try {
        const translationsResult = await fetchTranslations({
          tableQueries,
          tableColumns,
        });
        const translations = {};
        for (const translation of translationsResult) {
          translations[translation.name] = translation.data;
        }
        setState("translations", translations);
      } catch (error) {
        Toastify({
          text: "Translations failed." + error,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
      }
    } else {
      Toastify({
        text: "Please set tableQueries.",
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
    }

    // addParams check the link on "query" key and execute with origin.
    const links = addParams(parseLinks({ newsletterLinks, landingLinks }));
    setState("links", links);
    setState("loading", false);

    try {
      const html = await getTemplate();
      if (html.includes("undefined")) {
        if (confirm("Do you want to render template with undefined value?")) {
          return (root.innerHTML = html);
        } else {
          templates.errorPage(
            "Error rendering. HTML code has undefined value."
          );
        }
      } else {
        root.innerHTML = html;
      }
    } catch (error) {
      console.log(error);
      Toastify({
        text: "Please check console. " + error.message,
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
    }
  }

  function setEvents() {
    const app = document.querySelector("#app");

    const tabsParent = document.querySelector("#tabs");
    const tabsChildNodes = Array.from(tabsParent.children);
    const copyTemplate = document.querySelector(".copyTemplate");
    const openCampaign = document.querySelector(".openCampaign");
    const renderTemplateBtn = document.querySelector(".renderTemplate");
    const sync = syncHash(tabsChildNodes);

    window.addEventListener("popstate", () => sync());
    openCampaign.addEventListener("click", (e) =>
      openCampaignHandler(state.ids[state.country])
    );
    tabsParent.addEventListener("click", (e) =>
      tabsChildNodes.forEach((node) => setCountry(node, e.target))
    );
    renderTemplateBtn.addEventListener("click", (e) =>
      clickRenderBtnHandler(e.target.textContent.toLowerCase(), render)
    );
    copyTemplate.addEventListener("click", (e) =>
      copyHandlerTemplate(e, copyTemplate, app.innerHTML, state)
    );

    sync();
  }

  function setCountry(node, target) {
    if (node === target) {
      const selectedCountry = target.attributes.value.value;
      window.location.hash =
        "country=" + selectedCountry + "&template=" + state.template;
      state.country = selectedCountry;
    }
  }

  function syncHash(tabs) {
    return async () => {
      tabs.map((tab) => tab.setAttribute("disabled", true));
      const [, country, , template] = window.location.hash
        .replace("#", "")
        .split("=")
        .map((item) => item.split("&"))
        .flat();

      if (
        ![
          "DE",
          "CHDE",
          "AT",
          "FR",
          "CHFR",
          "IT",
          "UK",
          "ES",
          "PT",
          "PL",
          "HU",
          "NL",
          "SE",
          "DK",
          "CZ",
          "FI",
          "NO",
          "SK",
        ].includes(country)
      ) {
        state.country = "DE";
        window.location.hash = "country=DE&template=newsletter";
        return;
      }

      if (!template?.includes("newsletter") && !template?.includes("landing")) {
        state.country = "DE";
        window.location.hash = "country=DE&template=newsletter";
      }

      state.country = country.toUpperCase();
      state.template = template;

      setActive(tabs);
      await render();
      tabs.map((tab) => tab.removeAttribute("disabled"));
    };
  }

  function setActive(children) {
    const [, country, , template] = window.location.hash
      .replace("#", "")
      .split("=")
      .map((item) => item.split("&"))
      .flat();

    children.forEach((node) => {
      if (country === node.attributes.value.value) {
        return node.classList.add("active");
      }
      node.classList.remove("active");
    });

    state.template = template;
    document.querySelector(".renderTemplate").textContent = template;
  }

  async function getTemplate() {
    const country = getState("country");
    const translations = getState("translations");
    const template = getState("template");
    const ids = getState("ids");
    return await templates[template]({
      ...state,
      country,
      origin: origins[country],
      id: ids[country],
      template: template,
      getProductByName: (productName) => {
        const country_products = products.filter(
          (product) => product.country === country.toLowerCase()
        );
        const product = country_products.find(
          (product) => product.name === productName
        );

        if (!product) {
          return {
            name: `Product ${productName} not found`,
            lowPrice: "00.00",
            highPrice: "00.00",
          };
        }
        return handleProduct(product);
      },
      getProductById: (productId) => {
        const country_products = products.filter(
          (product) => product.country === country.toLowerCase()
        );
        const product = country_products.find(
          (product) => Number(product.main_id) === Number(productId)
        );

        if (!product) {
          return {
            name: `Product ${productId} not found`,
            lowPrice: "00.00",
            highPrice: "00.00",
          };
        }
        return handleProduct(product);
      },
      getCategory: (category) => {
        let new_link = new URL(origins[country]);
        const category_url = new URL(category);
        for (const [key, value] of category_url.searchParams.entries()) {
          new_link.searchParams.append(key, value);
        }

        let country_categories;
        if (!translations.categories) {
          country_categories = categories.find(
            (category) => category.slug === country.toLowerCase()
          );
        } else {
          const [slugs, ...categoriesDB] = translations.categories;
          const parsed_categories = [];
          for (let index = 0; index < slugs.length; index++) {
            const slug = slugs[index];
            let parsed_category = {};
            for (const categoryArray of categoriesDB) {
              const key = categoryArray[0];
              parsed_category = {
                slug: slug,
                [key]: categoryArray[index],
                ...parsed_category,
              };
            }
            parsed_categories.push(parsed_category);
          }

          country_categories = parsed_categories.find(
            (category) => category.slug === country.toLowerCase()
          );
        }

        const pathnames = category_url.pathname
          .split("/")
          .filter((pathname) => pathname.length > 0);
        const parsed_country_categories = [];
        for (const category of pathnames) {
          const categoryCandidate = country_categories[category];
          if (categoryCandidate) {
            parsed_country_categories.push(categoryCandidate);
          } else {
            Toastify({
              text: `Category <a target="_blank" style="weight: semibold; color: white;" href="https://www.prologistics.info/shop_cats.php?shop_id=1">${category}</a> not found in <a href="https://docs.google.com/spreadsheets/d/1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8/edit#gid=0" target="_blank" style="weight: semibold; color: white;">data/categories/data.js</a>`,
              escapeMarkup: false,
              duration: 3000,
            }).showToast();
          }
        }
        new_link.pathname += parsed_country_categories.join("/");
        return getQueryLink(new_link);
      },
      getProductFromServer: async (productId) => {
        const country_products = products.filter(
          (product) => product.country === country.toLowerCase()
        );
        const product = country_products.find(
          (product) => Number(product.main_id) === Number(productId)
        );

        setState("loading", true);
        const serverProducts = await getProduct([
          {
            main_id: productId,
            src: product?.src ?? "",
          },
        ]);

        const serverProductCountry = serverProducts.filter(
          (product) => product.country === country.toLowerCase()
        );

        const serverProduct = serverProductCountry.find(
          (product) => Number(product.main_id) === Number(productId)
        );

        setState("false", true);
        return handleProduct(serverProduct);
      },
    });
  }
}
