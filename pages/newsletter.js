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
  translations,
  // header,

  country,
  save,
  id,
  type,
  additionalTranslations,
}) {

  const { seating, condition } = translations;

  return `
  ${header[country]("newsletter", id)}
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="margin: 0 auto; max-width: 650px; width: 100%; background-color: #ffffff;" >
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
                  offerParts: [
                    {
                      title: seating[0],
                      paragraph: seating[1],
                    },
                    {
                      title: seating[2],
                      paragraph: seating[3],
                    },
                    {
                      title: seating[4],
                      paragraph: seating[5],
                    },
                    {
                      title: seating[6],
                      paragraph: seating[7],
                    },
                  ],
                  offerValid: seating[8],
                  getCode: {
                    link: links[0],
                    text: getCodes,
                  },
                  style: {
                    bgColor: "#ffffff",
                  },
                  type,
                })}
                ${Line(undefined, true)}
                ${Category({
                  category: {
                    ...categories[0],
                    name: seating[11],
                    paragraph: seating[12],
                  },
                  products: [
                    {
                      ...products[0],
                      src: "https://beliani.info/newsletter/2022/231113Category11.png",
                      type: "image",
                    },
                    products[0],
                    products[1],
                    {
                      ...products[1],
                      src: "https://beliani.info/newsletter/2022/231113Category14.png",
                      type: "image",
                    },
                  ],
                  cta: shopNow,
                  type: "monday",
                  style: {
                    bgColor: "#ffffff",
                  },
                })}
                ${Line(undefined, true)}
                ${Category({
                  category: {
                    ...categories[1],
                    name: seating[15],
                    paragraph: seating[16],
                  },
                  products: [
                    {
                      ...products[2],
                      type: "image",
                      src: "https://beliani.info/newsletter/2022/231113Category21.png",
                    },
                    products[2],
                    products[3],
                    {
                      ...products[3],
                      type: "image",
                      src: "https://beliani.info/newsletter/2022/231113Category24.png",
                    },
                  ],
                  cta: shopNow,
                  type: "monday",
                  style: {
                    bgColor: "#ffffff",
                  },
                })}
                ${Line(undefined, true)}
                ${Category({
                  category: {
                    ...categories[2],

                    name: seating[17],
                    paragraph: seating[18],
                  },
                  products: [
                    {
                      ...products[4],
                      type: "image",
                      src: "https://beliani.info/newsletter/2022/231113Category31.png",
                    },
                    products[4],
                    products[5],
                    {
                      ...products[5],
                      type: "image",
                      src: "https://beliani.info/newsletter/2022/231113Category34.png",
                    },
                  ],
                  cta: shopNow,
                  type: "monday",
                  style: {
                    bgColor: "#ffffff",
                  },
                })}
                ${Line(undefined, true)}
                ${Category({
                  category: {
                    ...categories[3],
                    name: seating[13],
                    paragraph: seating[14],
                  },
                  products: [
                    {
                      ...products[6],
                      type: "image",
                      src: "https://beliani.info/newsletter/2022/231113Category41.png",
                    },
                    products[6],
                    products[7],
                    {
                      ...products[7],
                      type: "image",
                      src: "https://beliani.info/newsletter/2022/231113Category44.png",
                    },
                  ],
                  cta: shopNow,
                  type: "monday",
                  style: {
                    bgColor: "#ffffff",
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
        ${footer[country](condition, "newsletter", id)}
    `;
}
