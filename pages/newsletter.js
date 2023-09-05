import { Line } from "../components/Line.js";
import { Category } from "../components/category.js";
import { ThisMayInterestYou } from "../components/interest_you.js";
import { Freebies } from "../components/freebies.js";
import { Intro } from "../components/intro.js";
import { IntoText } from "../components/introtext.js";
import { Matrix } from "../components/matrix.js";
import { Product } from "../components/product.js";
import { priceFrom } from "../helpers/from.js";
import { footer, header } from "../templates/index.js";
import { parsePrice } from "../helpers/parsePrice.js";
import { priceFree } from "../helpers/priceFree.js";

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
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="margin: 0 auto; max-width: 650px; background-color: #ffffff;" >
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
                ${IntoText({
                  shopMinimum: translations[0],
                  addPromoCode: translations[1],
                  getCode: {
                    text: getCode,
                    link: links[0],
                  },
                  offerValid: translations[2],
                  chooseFrom: chooseFrom,
                  style: {
                    bgColor: "#fed399",
                  },
                  type,
                })}
                ${Freebies({
                  products: [
                    priceFree({
                      ...products[0],
                      align: "center",
                      style: {
                        bgColor: "#fff4e6",
                        paddingRight: "5px",
                        paddingBottom: "10px",
                      },
                    }),
                    priceFree({
                      ...products[1],
                      align: "center",
                      style: {
                        bgColor: "#fff4e6",
                        paddingLeft: "5px",
                        paddingBottom: "10px",
                      },
                    }),
                    priceFree({
                      ...products[2],
                      align: "center",
                      style: {
                        bgColor: "#fff4e6",
                        paddingRight: "5px",
                        paddingBottom: "10px",
                      },
                    }),
                    priceFree({
                      ...products[3],
                      align: "center",
                      style: {
                        bgColor: "#fff4e6",
                        paddingLeft: "5px",
                        paddingBottom: "10px",
                      },
                    }),
                  ],
                  size: {
                    col: 2,
                    row: 2,
                  },
                  style: {
                    bgColor: '#fed399'
                  },
                  className: "newsletterFreebies",
                })}
                ${Line("https://beliani.info/newsletter/2022/230911freebieline.jpg")}
                ${Intro({
                  title: translations[3],
                  paragraph: translations[4],
                  style: {
                    bgColor: "#ffe8de",
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
                    priceFrom(products[6]),
                    products[7],
                  ],
                  cta: shopNow,

                  type: "monday",
                  country,
                  style: {
                    bgColor: "#ffe8de",
                  },
                })}
              ${Line("https://beliani.info/newsletter/2022/230911line.jpg")}
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
                  style: {
                    bgColor: "#ffe8de;",
                  },
                  type: "monday",
                  country,
                })}
                ${Line("https://beliani.info/newsletter/2022/230911line.jpg")}
                <tr>
                  <td align="center" class="newsletterContainer" style="background-color: #ffe8de;">
                      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                          <tr>
                              <td align="left" class="newsletterBottom35px" >
                                  <span class="newsletterTitle">
                                      ${translations[9]}
                                  </span>
                              </td>
                          </tr>
                      </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="background-color: #ffe8de;">
                      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                          <tr>
                            <td align="center" class="newsletterBottom35px" >
                              <a href="https://www.youtube.com/watch?v=KsQWHKvjH-4">
                                <img width="100%" src="https://beliani.info/newsletter/2022/230911YouTubeImage.jpg" style="display: block;">
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" >
                                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                    <tr>
                                        <td align="center" class="newsletterCtaContainer" style="text-align: center;">
                                            <a href="https://www.youtube.com/watch?v=KsQWHKvjH-4" style="color: #000000; text-decoration: underline;" class="newsletterCta">${watchNow}</a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                          </tr>
                      </table>
                  </td>
                </tr>
              ${Line("https://beliani.info/newsletter/2022/230911line.jpg")}
                ${Category({
                  category: {
                    ...categories[2],
                    name: translations[7],
                  },
                  products: [
                    products[12],
                    priceFrom(products[13]),
                    products[14],
                    products[15],
                  ],
                  cta: shopNow,
                  type: "monday",
                  style: {
                    bgColor: "#ffe8de;",
                  },
                  country,
                })}
              ${Line("https://beliani.info/newsletter/2022/230911line.jpg")}
                ${Category({
                  category: {
                    ...categories[3],
                    name: translations[8],
                  },
                  products: [
                    products[16],
                    priceFrom(products[17]),
                    products[18],
                    products[19],
                  ],
                  cta: shopNow,
                  style: {
                    bgColor: "#ffe8de;",
                  },
                  type: "monday",
                  country,
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
        ${footer[country](conditions, "newsletter", id)}
    `;
}
