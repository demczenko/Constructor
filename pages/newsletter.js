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
import Timer from "../components/timer.js";

export function newsletter({
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
  // console.log("Categories", categories);
  // console.log("Translations", translations);
  // console.log(additionalTranslations);
  // console.log("Products", products);
  // console.log(additionalTranslations);
  // console.log(links);

  return `
    ${header[country]("newsletter", id)}
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="margin: 0 auto; max-width: 650px; width: 100%; background-color: #fff0d1;" >
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
                    text: getCode,
                  },
                  style: {
                    bgColor: "#fff0d1",
                  },
                  type,
                })}
                ${Freebies({
                  products: [
                    priceFree({...products[0], align: 'center'}),
                    priceFree({...products[1], align: 'center'}),
                    priceFree({...products[2], align: 'center'}),
                    priceFree({...products[3], align: 'center'}),
                    priceFree({...products[4], align: 'center'}),
                    priceFree({...products[5], align: 'center'}),
                  ],
                  style: { bgColor: "#fff0d1" },
                  size: {
                    row: 2,
                    col: 3,
                  },
                })}
                ${Line(undefined, true)}
                ${Intro({
                  title: translations[3],
                  paragraph: translations[4],
                  style: {
                    bgColor: "#fff0d1",
                  },
                })}
                ${Category({
                  category: {
                    ...categories[0],
                    name: translations[5],
                  },
                  products: [
                    products[6],
                    products[7],
                    products[8],
                    products[9],
                  ],
                  cta: shopNow,
                  type: "monday",
                  style: {
                    bgColor: "#fff0d1",
                  },
                })}
                ${Line(undefined, true)}
                ${Category({
                  category: {
                    ...categories[1],
                    name: translations[6],
                  },
                  products: [
                    products[10],
                    products[11],
                    products[12],
                    products[13],
                  ],
                  cta: shopNow,
                  type: "monday",
                  style: {
                    bgColor: "#fff0d1",
                  },
                })}
                ${Line(undefined, true)}
                ${Category({
                  category: {
                    ...categories[2],
                    name: translations[7],
                  },
                  products: [
                    products[14],
                    products[15],
                    products[16],
                    products[17],
                  ],
                  cta: shopNow,
                  type: "monday",
                  style: {
                    bgColor: "#fff0d1",
                  },
                })}
                ${Line(undefined, true)}
                ${Category({
                  category: {
                    ...categories[3],
                    name: translations[8],
                  },
                  products: [
                    products[18],
                    products[19],
                    products[20],
                    products[21],
                  ],
                  cta: shopNow,
                  type: "monday",
                  style: {
                    bgColor: "#fff0d1",
                  },
                })}
                ${Line(undefined, true)}
            <tbody>
        </table>

        <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterSoonEndingTable" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#fff0d1;">
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
        ${footer[country](conditions, "newsletter", id)}
    `;
}
