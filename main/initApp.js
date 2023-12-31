import {
  clickRenderBtnHandler,
  copyHandlerFormula,
  copyHandlerTemplate,
  openCampaignHandler,
} from "./events.js";
import acceptedLocationHash from "../data/templates/acceptedHash.js";
import { attachCss, incrementId } from "../helpers/index.js";
import templates from "../pages/index.js";
import { SpinnerInit } from "../helpers/spinner/spinerOptions.js";

import {
  InfluencersChoice,
  free,
  save,
  fromm,
  getCode,
  getCodes,
  chooseFrom,
  watchNow,
  soonEndingCampaigns,
  shopNow,
  shopAll,
  YouMayBeAlsoInterestedIn,
  ThisMayAlsoInterestYou,
  products,
  categories,
  codes,
  text,
} from "../data/index.js";
import {
  fetchHeader,
  fetchToken,
  getLink,
  getProductsPrice,
} from "../api/index.js";
import { utils } from "../utils/index.js";
import { handleCategories, handleProducts } from "./handlers/index.js";
import { parseLinkToCountry } from "../helpers/parseLinkToCountry.js";
import { mainValidation } from "../validation/mainValidation.js";
import {
  fetchCategories,
  fetchProductsShopIds,
  fetchTranslations,
  parseLinks,
} from "../api/fetch/fetch.js";
import { addParams } from "../helpers/addQueryParams.js";
import origins from "../data/templates/origins.js";

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
  productsImages,
  tableQueries,
  tableColumns,
  productsOrder,
  startId,
  countries,
  newsletterLinks,
  landingLinks,
  serverProducts,
  serverCategories,
  serverHeader,
  token,
}) {
  mainValidation({
    tableQueries,
    tableColumns,
    startId,
    newsletterLinks,
    landingLinks,
    token,
  });

  setState("ids", incrementId(startId, countries));
  setEvents();
  attachCss(state);
  async function render() {
    setState("loading", true);
    const country = getState("country");
    const template = getState("template");
    const countryRelativeToIds = getState("ids");

    let headerHtmlTemplate;
    if (serverHeader) {
      headerHtmlTemplate = await fetchHeader({
        type: template,
        country: country,
        id: countryRelativeToIds[country],
      });
    }

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

    if (productsOrder) {
      setState(
        "products_main_id",
        productsOrder.map((product) => ({
          main_id: product["SA#"],
          name: product["SA Name"],
        }))
      );
      if (serverProducts) {
        const ids = await fetchProductsShopIds();
        setState("productsIds", ids);
        const country = getState("country");

        //1. Получаю айдишники на которые мне нужны цены и ссылки
        const XLSProducts = getState("XLSProducts");
        const sortedRequestIds = XLSProducts.map((item) => {
          return {
            id: ids[item.main_id][country],
            main_id: item.main_id,
            name: item.name,
          };
        });

        //2. Получаю цены на продукты
        const productsPrices = await getProductsPrice(
          sortedRequestIds.map((item) => item.id)
        );
        //3. Привожу данные в нужный вид
        const normalizedProduct = [];
        for (const sorted in sortedRequestIds) {
          const sortedProducts = sortedRequestIds[sorted];

          for (const productId in productsPrices) {
            if (sortedProducts.id === productId) {
              normalizedProduct.push({
                id: productId,
                name: sortedProducts.name,
                main_id: sortedProducts.main_id,
                lowPrice: productsPrices[productId].ShopPrice,
                highPrice: productsPrices[productId].ShopHPrice,
                country: country,
              });
            }
          }
        }
        //4. Получаю ссылки на продукты
        const links = [];
        let isError = false;
        for (const product of normalizedProduct) {
          let response;
          if (!isError) {
            response = await getLink(product.main_id);
          }
          links.push({
            id: product.id,
            links: parseLinkToCountry(response),
          });
          if (response.status === "error") {
            isError = true;
            Toastify({
              text:
                `Product ${product.id} link fetch Error ` +
                response.data.message,
              escapeMarkup: false,
              duration: 3000,
            }).showToast();
          }
        }
        // 5. Собираю продукты и ссылки вместе
        const productsWithHref = [];
        for (const product of normalizedProduct) {
          for (const link of links) {
            if (product.id === link.id) {
              productsWithHref.push({
                ...product,
                href: link.links[product.country],
              });
            }
          }
        }

        setState(
          "products",
          utils.addImageToProducts(productsWithHref, productsOrder)
        );
        handleProducts();
      } else {
        const country = getState("country");
        setState(
          "products",
          products.filter(
            (item) => item.country.toLowerCase() === country.toLowerCase()
          )
        );
        handleProducts();
      }
    }

    if (serverCategories) {
      const getSeverCategories = await fetchCategories({ categories });
      setState("categories", getSeverCategories);
      handleCategories();
    } else {
      setState("categories", categories);
      handleCategories();
    }

    if (tableQueries?.length > 0) {
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
      const country = getState("country");
      if (country in text) {
        setState("translations", text[country]);
      } else {
        Toastify({
          text: country + " has been not found in local text. (data/text.js)",
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
      }
    }
    setState(
      "header",
      headerHtmlTemplate?.header !== undefined ? headerHtmlTemplate.header : ""
    );
    // addParams check the link on "query" key and execute with origin.
    const links = addParams(parseLinks({ newsletterLinks, landingLinks }));
    setState("links", links);
    setState("loading", false);

    if (state.products.length < productsOrder.length) {
      return Toastify({
        text: "Products not found.",
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
    }
    try {
      const html = getTemplate();
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
    const copyFormula = document.querySelector(".copyFormula");
    const copyTemplate = document.querySelector(".copyTemplate");
    const openCampaign = document.querySelector(".openCampaign");
    const renderTemplateBtn = document.querySelector(".renderTemplate");
    const sync = syncHash(tabsChildNodes);

    window.addEventListener("popstate", () => sync());
    openCampaign.addEventListener("click", (e) =>
      openCampaignHandler(state.ids[state.country])
    );
    copyFormula.addEventListener("click", (e) =>
      copyHandlerFormula(e, copyFormula)
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
      tabs.map(tab => tab.setAttribute("disabled", true))
      const [, country, , template] = window.location.hash
        .replace("#", "")
        .split("=")
        .map((item) => item.split("&"))
        .flat();

      if (!acceptedLocationHash.includes(country)) {
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
      tabs.map(tab => tab.removeAttribute("disabled"))
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

  function getTemplate() {
    const country = getState("country");
    const template = getState("template");
    const products = getState("products");
    const ids = getState("ids");
    return templates[template]({
      shopAll: shopAll[country],
      shopNow: shopNow[country],
      getCode: getCode[country],
      getCodes: getCodes[country],
      chooseFrom: chooseFrom[country],
      watchNow: watchNow[country],
      from: fromm[country],
      free: free[country],
      code: codes[country],
      origin: origins[country],
      influencersChoice: InfluencersChoice[country],
      thisMayAlsoInterestYou: ThisMayAlsoInterestYou[country],
      youMayBeAlsoInterestedIn: YouMayBeAlsoInterestedIn[country],
      soonEnding: soonEndingCampaigns[country],
      id: ids[country],
      save: save[country],
      getProductByName: ((products, productsImages) => {
        return (productName) => {
          const product = products.find(
            (product) => product.name === productName
          );

          if (!product) {
            return {
              name: "Product not found",
            }
          } 
          if (productsImages) {
            return (
              { ...product, src: productsImages[product.main_id] || "" }
            );
          } else {
            return product
          }
        };
      })(products, productsImages),
      getProductById: ((products, productsImages) => {
        return (productId) => {
          const product = products.find(
            (product) => Number(product.main_id) === Number(productId)
          );

          if (!product) {
            return {
              name: "Product not found",
            }
          } 
          if (productsImages) {
            return (
              { ...product, src: productsImages[product.main_id] || "" }
            );
          } else {
            return product
          }
        };
      })(products, productsImages),
      ...state,
    });
  }
}
