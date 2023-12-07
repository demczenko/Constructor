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
                                    ${translations.tables[0]}
                                </span>
                              </td>
                          </tr>
                          <tr>
                              <td align="center" class="newsletterBottom30px">
                                  <span class="newsletterParagraph">
                                      ${translations.tables[1]}
                                  </span>
                              </td>
                          </tr>
                        </table>
                    </td>
                </tr>
                ${GetCode({
                  code: getCode,
                  link: links[0],
                  type: "landing",
                  style: {
                    bgColor: "#fff0e6",
                  },
                })}
                <tr>
                    <td align="center" style="background-color: #fff0e6;" class="newsletterBottom30px">
                        <span class="newsletterParagraph">
                            ${translations.tables[2]}
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
                    priceFree({...getProductByName("SONORA"), align: 'center'}),
                    priceFree({...getProductByName("TELMA"), align: 'center'}),
                    priceFree({...getProductByName("AMARGA"), align: 'center'}),
                    priceFree({...getProductByName("ROANA"), align: 'center'}),
                    priceFree({...getProductByName("BARINAS"), align: 'center'}),
                    priceFree({...getProductByName("RENGO"), align: 'center'})
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
                  title: translations.tables[3],
                  paragraph: translations.tables[4],
                  style: {
                    bgColor: "#fff0e6",
                  },
                })}
                ${Category({
                  name: translations.tables[5],
                  ...categories[0],
                  products: [
                    getProductById("232789"),
                    getProductByName("NEVIS"),
                    getProductByName("CARRERA"),
                    getProductByName("IBIZA"),
                  ],
                  style: {
                    bgColor: "#fff0e6",
                  },
                  cta: shopNow
                })}
                ${Line(undefined, true)}
                ${Category({
                  name: translations.tables[6],
                  ...categories[1],
                  products: [
                    getProductByName("DELLA"),
                    getProductByName("KAGERA"),
                    getProductByName("GURARA"),
                    getProductByName("VICTORIA"),
                  ],
                  style: {
                    bgColor: "#fff0e6",
                  },
                  cta: shopNow
                })}
                ${Line(undefined, true)}
                ${Category({
                  name: translations.tables[7],
                  ...categories[2],
                  products: [
                    getProductByName("TALPE"),
                    getProductByName("KALUTARA"),
                    getProductByName("ORNACH"),
                    getProductByName("TAYASU"),
                  ],
                  style: {
                    bgColor: "#fff0e6",
                  },
                  cta: shopNow
                })}
                ${Line(undefined, true)}
                ${Category({
                  name: translations.tables[8],
                  ...categories[3],
                  products: [
                    getProductByName("YVELINES"),
                    getProductByName("CHATEAUROUX"),
                    getProductByName("MARTINET"),
                    getProductByName("VIRIAT"),
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
