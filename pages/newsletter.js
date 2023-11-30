import {
  Line,
  Category,
  ThisMayInterestYou,
  Freebies,
  Intro,
  IntroText,
  Product,
  Timer,
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
  products,
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
  console.log(links);
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
                  <td align="center" style="background-color: #ffe8df" class="newsletterContainer">
                      <span class="newsletterParagraph">
                          ${translations.tables[0]}
                      </span>
                  </td>
                </tr>
                ${IntroText({
                  code: true,
                  offerParts: [
                    {
                      title: translations.tables[1],
                      paragraph: translations.tables[2],
                    },
                    {
                      title: translations.tables[3],
                      paragraph: translations.tables[4],
                    },
                    {
                      title: translations.tables[5],
                      paragraph: translations.tables[6],
                    },
                    {
                      title: translations.tables[7],
                      paragraph: translations.tables[8],
                    },
                  ],
                  offerValid: translations.tables[9],
                  getCode: {
                    link: links[0],
                    text: getCodes,
                  },
                  style: {
                    bgColor: "#ffe8df",
                  },
                  type: template,
                })}
                ${
                  categories.map(category => {
                    return `
                    <tr>
                      <td align="center">
                          <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                              <tr>
                                  <td align="center">
                                      <a href=${category.href}>
                                          <img loading="lazy" width="100%" src=${category.src(country.toLowerCase())} style="display: block;">
                                      </a>
                                  </td>
                              </tr>
                          </table>
                      </td>
                    </tr>
                    `
                  }).join(" ")
                }
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
