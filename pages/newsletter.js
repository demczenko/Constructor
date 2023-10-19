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
    soonEnding,
    influencersChoice,
    thisMayAlsoInterestYou,
    youMayBeAlsoInterestedIn,
  },

  links,
  products,
  categories,
  translations: { translations },
  header,

  country,
  save,
  id,
  type,
  additionalTranslations,
}) {
  // ${header[country]("newsletter", id)}

  return `
  ${header}
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="margin: 0 auto; max-width: 650px; width: 100%; background-color: #f1e4e4;" >
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
                    bgColor: "#f1e4e4",
                  },
                  type,
                })}
                ${Freebies({
                  products: [
                    priceFree({
                      ...products[0],
                      src: links[8],
                      type: "image",
                    }),
                    priceFree({
                      ...products[1],
                      src: links[9],
                      type: "image",
                    }),
                    priceFree({
                      ...products[2],
                      src: links[10],
                      type: "image",
                    }),
                    priceFree({
                      ...products[3],
                      src: links[11],
                      type: "image",
                    }),
                  ],
                  className: "newsletterBottom35px",
                  style: { bgColor: "#f1e4e4" },
                })}
                ${Line(undefined, true)}
                ${Intro({
                  title: translations[3],
                  paragraph: translations[4],
                  style: {
                    bgColor: "#f1e4e4",
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
                    bgColor: "#f1e4e4",
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
                    bgColor: "#f1e4e4",
                  },
                })}
                ${Line(undefined, true)}
                ${Category({
                  category: {
                    ...categories[2],
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
                    bgColor: "#f1e4e4",
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
                    bgColor: "#f1e4e4",
                  },
                })}
                ${Line(undefined, true)}
            <tbody>
        </table>

        <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterSoonEndingTable" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;">
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
                                        <a href=${
                                          ["FI", "NO", "SE"].includes(country)
                                            ? `https://www.beliani.${country.toLowerCase()}/content/lp23-10-17/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}`
                                            : links[6]
                                        }>
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
