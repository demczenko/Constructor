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

export function landing({
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

  const codes = translations.code[0].split('<br />')
  console.log(codes);
  return `
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="margin: 0 auto; max-width: 650px; width: 100%; background-color: #ffffff;" id="newsletter">
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
      ${IntroText({
        offerParts: [
          {
            title: translations.tables[0],
            paragraph: translations.tables[1],
            code: codes[0]
          },
          {
            title: translations.tables[2],
            paragraph: translations.tables[3],
            code: codes[1]
          },
          {
            title: translations.tables[4],
            paragraph: translations.tables[5],
            code: codes[2]
          },
          {
            title: translations.tables[6],
            paragraph: translations.tables[7],
            code: codes[3]
          },
        ],
        offerValid: translations.tables[8],
        style: {
          bgColor: "#ffffff",
        },
        type: template,
      })}
      ${Line(undefined, true)}
      ${Category({
        category: {
          ...categories[0],
          name: translations.tables[11],
          paragraph: translations.tables[12],
        },
        products: [
          {
            ...products[0],
            src: "https://beliani.info/newsletter/2022/231120Category11.png",
            type: "image",
          },
          products[0],
          products[1],
          {
            ...products[1],
            src: "https://beliani.info/newsletter/2022/231120Category14.png",
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
          name: translations.tables[13],
          paragraph: translations.tables[14],
        },
        products: [
          {
            ...products[2],
            type: "image",
            src: "https://beliani.info/newsletter/2022/231120Category21.png",
          },
          products[2],
          products[3],
          {
            ...products[3],
            type: "image",
            src: "https://beliani.info/newsletter/2022/231120Category24.png",
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

          name: translations.tables[15],
          paragraph: translations.tables[16],
        },
        products: [
          {
            ...products[4],
            type: "image",
            src: "https://beliani.info/newsletter/2022/231120Category31.png",
          },
          products[4],
          products[5],
          {
            ...products[5],
            type: "image",
            src: "https://beliani.info/newsletter/2022/231120Category34.png",
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
          name: translations.tables[17],
          paragraph: translations.tables[18],
        },
        products: [
          {
            ...products[6],
            type: "image",
            src: "https://beliani.info/newsletter/2022/231120Category41.png",
          },
          products[6],
          products[7],
          {
            ...products[7],
            type: "image",
            src: "https://beliani.info/newsletter/2022/231120Category44.png",
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

<table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterSoonEndingTable" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
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
