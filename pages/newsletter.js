import {
  Line,
  Category,
  ThisMayInterestYou,
  Freebies,
  Intro,
  IntroText,
  Product,
  Timer,
  GetCode,
} from "../components/index.js";
import { priceFrom, priceFree } from "../helpers/index.js";
import { footer, header } from "../templates/index.js";

export function newsletter({
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

  links,
  getProductByName,
  getProductById,
  categories,
  translations,
  // header,
  origin,
  country,
  save,
  id,
  template,
  additionalTranslations,
}) {

  return `
  ${header[country]("newsletter", id)}
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="margin: 0 auto; max-width: 650px; width: 100%; background-color: #fff0e6;" >
            <tbody>
                <tr>
                    <td align="center">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                            <tr>
                                <td align="center">
                                    <a href=${links[0]}>
                                        <img loading="lazy" width="100%" src=${
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
                                        <img loading="lazy" width="100%" src=${
                                          links[3]
                                        } style="display: block;">
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="background-color: #fff0e6;" class="newsletterContainer">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                          <tr>
                              <td align="center" class="newsletterBottom30px">
                                <span class="newsletterParagraph">
                                    ${translations.sheepskin[0]}
                                </span>
                              </td>
                          </tr>
                          <tr>
                              <td align="center" class="newsletterBottom30px">
                                  <span class="newsletterParagraph">
                                      ${translations.sheepskin[1]}
                                  </span>
                              </td>
                          </tr>
                        </table>
                    </td>
                </tr>
                ${GetCode({
                  code: getCode,
                  link: links[0],
                  type: template,
                  style: {
                    bgColor: "#fff0e6",
                  },
                })}
                <tr>
                    <td align="center" style="background-color: #fff0e6;" class="newsletterBottom30px">
                        <span class="newsletterParagraph">
                            ${translations.sheepskin[2]}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="background-color: #fff0e6;">
                        <span class="newsletterParagraph">
                            ${chooseFrom}
                        </span>
                    </td>
                </tr>
                ${Freebies({
                  products: [
                    priceFree({...getProductById("82891"), align: 'center'}),
                    priceFree({...getProductById("82893"), align: 'center'}),
                    priceFree({...getProductById("82884"), align: 'center'}),
                    priceFree({...getProductById("82895"), align: 'center'}),
                    priceFree({...getProductById("176749"), align: 'center'}),
                    priceFree({...getProductById("259716"), align: 'center'})
                  ],
                  size: {
                    col: 3,
                    row: 2,
                  },
                  style: {
                    bgColor: "#fff0e6",
                  },
                  className: "newsletterFreebies"
                })}
                ${Line(undefined, true)}
                ${Intro({
                  title: translations.sheepskin[3],
                  paragraph: translations.sheepskin[4],
                  style: {
                    bgColor: "#fff0e6",
                  },
                })}
                ${Category({
                  name: translations.sheepskin[5],
                  ...categories[0],
                  products: [
                    getProductById("158574"),
                    getProductById("411277"),
                    getProductById("385317"),
                    getProductById("423221"),
                  ],
                  style: {
                    bgColor: "#fff0e6",
                  },
                  cta: shopNow
                })}
                ${Line(undefined, true)}
                ${Category({
                  name: translations.sheepskin[6],
                  ...categories[1],
                  products: [
                    getProductById("198537"),
                    getProductById("418494"),
                    getProductById("415176"),
                    getProductById("419508"),
                  ],
                  style: {
                    bgColor: "#fff0e6",
                  },
                  cta: shopNow
                })}
                ${Line(undefined, true)}
                ${Category({
                  name: translations.sheepskin[7],
                  ...categories[2],
                  products: [
                    getProductById("94520"),
                    getProductById("392941"),
                    getProductById("416731"),
                    getProductById("354829"),
                  ],
                  style: {
                    bgColor: "#fff0e6",
                  },
                  cta: shopNow
                })}
                ${Line(undefined, true)}
                ${Category({
                  name: translations.sheepskin[8],
                  ...categories[3],
                  products: [
                    getProductById("103988"),
                    getProductById("359399"),
                    getProductById("374306"),
                    getProductById("200061"),
                  ],
                  style: {
                    bgColor: "#fff0e6",
                  },
                  cta: shopNow
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
                                            <img loading="lazy" src=${
                                              links[5]
                                            } style="display: block;" width="100%">
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left">
                                        <a href=${links[6]}>
                                            <img loading="lazy" src=${
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
        ${footer[country](translations.condition, template, id)}
    `;
}
