import {
  Line,
  Category,
  ThisMayInterestYou,
  Freebies,
  Intro,
  IntroText,
  Product,
  Timer
} from "../components/index.js";
import { priceFrom, priceFree } from "../helpers/index.js";
import { footer, header } from "../templates/index.js";

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

  return `
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="margin: 0 auto; max-width: 650px; width: 100%; background-color: #ffffff;" id="newsletter">
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
        code: true,
        offerParts: [
          {
            title: translations.seating[0],
            paragraph: translations.seating[1],
          },
          {
            title: translations.seating[2],
            paragraph: translations.seating[3],
          },
          {
            title: translations.seating[4],
            paragraph: translations.seating[5],
          },
          {
            title: translations.seating[6],
            paragraph: translations.seating[7],
          },
        ],
        offerValid: translations.seating[8],
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
          name: translations.seating[11],
          paragraph: translations.seating[12],
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
          name: translations.seating[15],
          paragraph: translations.seating[16],
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

          name: translations.seating[17],
          paragraph: translations.seating[18],
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
          name: translations.seating[13],
          paragraph: translations.seating[14],
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
  ${footer[country](translations.condition, "landing", id)}
`;
}
