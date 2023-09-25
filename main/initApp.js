import {
  clickRenderBtnHandler,
  copyHandlerFormula,
  copyHandlerTemplate,
  openCampaignHandler,
} from "./events.js";
import acceptedLocationHash from "../data/templates/acceptedHash.js";
import { attachCss, incrementId } from "../helpers/index.js";
import { fetchData } from "./fetchData.js";
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
} from "../data/index.js";
import { sort } from "../helpers/sort.js";

const root = document.querySelector("#app");
const state = {
  country: "DE",
  loading: false,
  template: "newsletter",
  ids: [],

  products: [],
  categories: [],
  productsIds: [],
  translations: [],
  productsToParse: [],
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
  return state[key];
}

export function initApp({
  countriesColumns,
  productsOrder,
  startId,
  countries,
  xlsPath,
  newsletterLinks,
  additionalTranslations,
  landingLinks,
  apiCall,
  translationsTableName,
  translationsRange,
  conditionsRow,
  codesRow,
  token,
}) {
  if (!startId) {
    return Toastify({
      text: "Please set startId in app.js",
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
  }
  setState("ids", incrementId(startId, countries));

  if (!newsletterLinks || !landingLinks) {
    return Toastify({
      text: "Please set newsletterLinks, landingLinks in app.js",
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
  }

  window.location.hash = "country=DE&template=newsletter";
  attachCss(state);
  setEvents();
  function render() {
    setState("loading", true)
    // const header = fetchHeader({ type: state.template, country: state.country, id: state.ids[state.country] })
    fetchData({
      countriesColumns,
      state,
      xlsPath,
      apiCall,
      newsletterLinks,
      additionalTranslations,
      landingLinks,
      translationsTableName,
      translationsRange,
      conditionsRow,
      codesRow,
      token,
      productsOrder,
    })
      .then((data) => {
        return getTemplate({
          ...data,
          products: productsOrder && sort(data.products, productsOrder),
        });
        // return header.then(header => header.header + getTemplate(data))
      })
      .then((html) => {
        if (html.includes("undefined")) {
          if (confirm("Do you want to render template with undefined value?")) {
            // getCss(state.template).then((css) => {
            //     updateCampaign(state.ids[state.country], copyNewsletterWithHeaderAndStyles(html, css)).then(data => console.log(data))
            // }).then(() => {
            //     Toastify({
            //         text: `Campaign <a style="color: white;" href="https://www.prologistics.info/news_email.php?id=${state.ids[state.country]}">${state.ids[state.country]}</a> succesfully updated &#128516;`,
            //         escapeMarkup: false,
            //         duration: 3000
            //     }).showToast();
            // })
            return (root.innerHTML = html);
          }

          return (root.innerHTML = templates.errorPage(
            "Error rendering. HTML code has undefined value."
          ));
        } else {
          root.innerHTML = html;
        }
      })
      .catch((err) => {
        console.error(err);
        return Toastify({
          text: "Error, pls check console. " + err,
          escapeMarkup: false,
          duration: 3000,
        }).showToast();
      })
      .finally(() => setState("loading", false));
  }

  function setEvents() {
    const app = document.querySelector("#app");

    const first = document.querySelector("#first");
    const firstChildNodes = Array.from(
      document.querySelector("#first").children
    );
    const copyFormula = document.querySelector(".copyFormula");
    const copyTemplate = document.querySelector(".copyTemplate");
    const openCampaign = document.querySelector(".openCampaign");
    const renderTemplateBtn = document.querySelector(".renderTemplate");
    const sync = syncHash(firstChildNodes);

    window.addEventListener("popstate", () => sync());
    openCampaign.addEventListener("click", (e) =>
      openCampaignHandler(state.ids[state.country])
    );
    copyFormula.addEventListener("click", (e) =>
      copyHandlerFormula(e, copyFormula, state)
    );
    first.addEventListener("click", (e) =>
      firstChildNodes.forEach((node) => setCountry(node, e.target))
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

  function syncHash(first) {
    return () => {
      const [, country, , template] = window.location.hash
        .replace("#", "")
        .split("=")
        .map((item) => item.split("&"))
        .flat();

      if (!acceptedLocationHash.includes(country)) {
        state.country = "DE";
        window.location.hash = "country=DE&template=newsletter";
      }

      if (!template.includes("newsletter") && !template.includes("landing")) {
        state.country = "DE";
        window.location.hash = "country=DE&template=newsletter";
      }

      state.country = country.toUpperCase();
      state.template = template;

      setActive(first);
      render();
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

  function getTemplate(data) {
    return templates[state.template]({
      ...data,
      text: {
        shopAll: shopAll[state.country],
        shopNow: shopNow[state.country],
        getCode: getCode[state.country],
        getCodes: getCodes[state.country],
        chooseFrom: chooseFrom[state.country],
        watchNow: watchNow[state.country],
        from: fromm[state.country],
        free: free[state.country],
        influencersChoice: InfluencersChoice[state.country],
        thisMayAlsoInterestYou: ThisMayAlsoInterestYou[state.country],
        youMayBeAlsoInterestedIn: YouMayBeAlsoInterestedIn[state.country],

        code: data.code,
        conditions: data.conditions,
        translations: data.translations,

        soonEnding: soonEndingCampaigns[state.country],
      },
      links: data.links,
      products: data.products,
      categories: data.categories,

      id: state.ids[state.country],
      save: save[state.country],
      country: state.country,
      type: state.template,
    });
  }
}
