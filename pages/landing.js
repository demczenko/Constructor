import { Line } from "../components/Line.js";
import { Category } from "../components/category.js";
import { ThisMayInterestYou } from "../components/interest_you.js";
import { Freebies } from "../components/freebies.js";
import { Intro } from "../components/intro.js";
import { IntroText } from "../components/introtext.js";
import { Matrix } from "../components/matrix.js";
import { Product } from "../components/product.js";
import { priceFrom } from "../helpers/from.js";
import { footer, header } from "../templates/index.js";
import { parsePrice } from "../helpers/parsePrice.js";
import { priceFree } from "../helpers/priceFree.js";

export function landing({
  text: {
    shopAll,
    getCode,
    getCodes,
    chooseFrom,
    watchNow,
    shopNow,
    free,
    code,
    from,
    conditions,
    translations,
    soonEnding,
    influencersChoice,
    thisMayAlsoInterestYou,
    youMayBeAlsoInterestedIn,
  },

  links,
  products,
  categories,

  country,
  save,
  id,
  type,
  additionalTranslations,
}) {

  const category = {
    CZ: "https://www.beliani.cz/podzimni-trendy/prirodni-nabytek/",
    DK: "https://www.beliani.dk/efterar-trends/naturlige-materialer/",
    NL: "https://www.beliani.nl/herfst-trends/natuurlijke-materialen/",
    UK: "https://www.beliani.co.uk/autumn-trends/natural-materials/",
    FI: "https://www.beliani.fi/syksyn-trendit/luonnolliset-materiaalit/",
    FR: "https://www.beliani.fr/tendances-automnales/materiaux-naturels/",
    CHFR: "https://www.beliani.ch/tendances-automnales/materiaux-naturels",
    DE: "https://www.beliani.de/herbsttrends-2022/natuerliche-materialien/",
    CHDE: "https://www.beliani.ch/herbsttrends-2022/natuerliche-materialien/",
    AT: "https://www.beliani.at/herbsttrends-2022/natuerliche-materialien/",
    HU: "https://www.beliani.hu/oszi-trendek/termeszetes-anyagok/",
    IT: "https://www.beliani.it/trend-autunno-it/materiali-naturali-it/",
    NO: "https://www.beliani.no/hosttrender/naturlig-materiale/",
    PL: "https://www.beliani.pl/jesienne-trendy/naturalne-materialy/",
    PT: "https://www.beliani.pt/autumn-trends-pt/natural-materials-pt/",
    SK: "https://www.beliani.sk/jesenne-trendy/prirodne-materialy/",
    ES: "https://www.beliani.es/tendencias-de-otono-es/materiales-naturales-es/",
    SE: "https://www.beliani.se/hosttrender/naturliga-material/",
  };

  return `
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="margin: 0 auto; max-width: 650px; width: 100%; background-color: #e3cccc;" id="newsletter">
  <tbody>
      <tr>
          <td align="center">
              <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                  <tr>
                      <td align="center">
                          <a href=${links[0]}>
                              <img width="100%" src=${
                                links[1]
                              } style="display: block;">
                          </a>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
      <tr>
          <td align="center">
              <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                  <tr>
                      <td align="center">
                          <a href=${links[2]}>
                              <img width="100%" src=${
                                links[3]
                              } style="display: block;">
                          </a>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
      ${IntroText({
        offerPart1: translations[0],
        offerPart2: translations[1],
        offerValid: translations[2],
        chooseFrom: chooseFrom,
        getCode: {
          link: links[0],
          text: code,
        },
        style: {
          bgColor: "#f6e7e6",
        },
        type,
      })}
      ${Freebies({
        products: [
          priceFree({
            ...products[0],
            align: "center",
            style: { bgColor: "#ffffff" },
            className: "newsletterProductContainerLEFT",
          }),
          priceFree({
            ...products[1],
            align: "center",
            style: { bgColor: "#ffffff" },
            className: "newsletterProductContainerRIGHT",
          }),
          priceFree({
            ...products[2],
            align: "center",
            style: { bgColor: "#ffffff" },
            className: "newsletterProductContainerLEFT",
          }),
          priceFree({
            ...products[3],
            align: "center",
            style: { bgColor: "#ffffff" },
            className: "newsletterProductContainerRIGHT",
          }),
        ],
        style: { bgColor: "#f6e7e6" },
      })}
      ${Line(undefined, true)}
      ${Intro({
        title: translations[3],
        paragraph: translations[4],
        style: {
          bgColor: "#e3cccc",
        },
      })}
      ${Category({
        category: {
          ...categories[0],
          name: translations[5],
        },
        products: [
          products[4],
          products[5],
          products[6],
          products[7],
        ],
        cta: shopNow,
        type: "monday",
        style: {
          bgColor: "#e3cccc",
        },
      })}
      ${Line(undefined, true)}
      ${Category({
        category: {
          ...categories[1],
          name: translations[6],
        },
        products: [
          products[8],
          products[9],
          products[10],
          products[11],
        ],
        cta: shopNow,
        type: "monday",
        style: {
          bgColor: "#e3cccc",
        },
      })}
      ${Line(undefined, true)}
      ${Category({
        category: {
          ...categories[2],
          href: category[country],
          name: translations[7],
        },
        products: [
          products[12],
          products[13],
          products[14],
          products[15],
        ],
        cta: shopNow,
        type: "monday",
        style: {
          bgColor: "#e3cccc",
        },
      })}
      ${Line(undefined, true)}
      ${Category({
        category: {
          ...categories[3],
          name: translations[8],
        },
        products: [
          products[16],
          products[17],
          products[18],
          products[19],
        ],
        cta: shopNow,
        type: "monday",
        style: {
          bgColor: "#e3cccc",
        },
      })}
      ${Line(undefined, true)}
  <tbody>
</table>

<table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterSoonEndingTable" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#e3cccc;" id="newsletter">
  <tbody>
      <tr>
          <td align="left" class="newsletterSoonEndingContainer">
              <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tbody>
                      <tr>
                          <td align="left" class="newsletterSoonEndingTitleContainer">
                              <span class="newsletterSoonEndingTitle">${soonEnding}</span>
                          </td>
                      </tr>
                      <tr>
                          <td align="left" class="newsletterSoonEndingBanner">
                              <a href=${links[4]}>
                                  <img src=${
                                    links[5]
                                  } style="display: block;" width="100%">
                              </a>
                          </td>
                      </tr>
                      <tr>
                          <td align="left">
                              <a href=${links[6]}>
                                  <img src=${
                                    links[7]
                                  } style="display: block;" width="100%">
                              </a>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </td>
      </tr>
  </tbody>
</table>
  ${footer[country](conditions, "landing", id)}
`;
}
