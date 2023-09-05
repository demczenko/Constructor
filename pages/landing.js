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
  const joinUs = {
    UK: "Join us backstage ",
    PL: "Zobacz jak wyglądał nasz backstage",
    DE: "Komm mit uns hinter die Kulissen",
    AT: "Komm mit uns hinter die Kulissen",
    CHDE: "Komm mit uns hinter die Kulissen",
    NL: "Neem een kijkje achter de schermen",
    FR: "Rejoignez-nous en coulisses",
    CHFR: "Rejoignez-nous en coulisses",
    ES: "Detrás de las cámaras",
    PT: "Junte-se a nós nos bastidores",
    IT: "Guarda il backstage",
    DK: "Kom med bag scenen",
    NO: "Bli med oss bak kulissene",
    FI: "Kurkkaa kulissien taakse",
    SE: "Häng med bakom kulisserna",
    CZ: "Z focení narozeninové kampaně",
    SK: "Nahliadnite do zákulisia",
    HU: "",
  };

  // console.log(categories);
  console.log(products);
  // console.log(translations);
  // console.log(links);

  return `
    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="margin: 0 auto; max-width: 650px; background-color: #ffffff;" id="newsletter" >
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
              text: code,
              link: links[0],
            },
            offerValid: translations[2],
            chooseFrom: chooseFrom,
            style: {
              bgColor: "#ffefd9",
            },
            type,
          })}
          ${Freebies({
            products: [
              priceFree({
                ...products[0],
                align: "center",
                style: {
                  paddingRight: '10px'
                } 
              }),
              priceFree({
                ...products[1],
                align: "center",
                style: {
                  paddingRight: '10px'
                } 
              }),
              priceFree({
                ...products[2],
                align: "center",
                style: {
                  paddingRight: '10px'
                } ,
              }),
              priceFree({
                ...products[3],
                align: "center",
                style: {
                  paddingRight: '10px'
                } ,
                className: "newsletterBottom80px",
              }),
              priceFree({
                ...products[4],
                align: "center",
                style: {
                  paddingRight: '10px'
                } ,
                className: "newsletterBottom80px",
              }),
              priceFree({
                ...products[5],
                align: "center",
                className: "newsletterBottom80px",
                style: {
                  paddingRight: '10px'
                } ,
              }),
            ],
            size: {
              col: 3,
              row: 2,
            },
            className: "newsletterProductContainer",
          })}
          ${Line("https://beliani.info/newsletter/2022/230828Line.jpg")}
          ${Intro({
            title: translations[3],
            paragraph: translations[4],
            style: {
              bgColor: "#ffefd9",
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
            country,
            style: {
              bgColor: "#ffefd9",
            },
          })}
          <tr>
          <td align="center" style="background-color: #ffefd9;" class="newsletterContainer">
              <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                  <tr>
                    <td align="center" class="newsletterBottom35px" >
                      <a href="https://www.youtube.com/watch?v=n9qWMPFJP_I">
                        <img width="100%" src="https://beliani.info/newsletter/2022/230828YouTubeImage.jpg" style="display: block;">
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" >
                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                            <tr>
                                <td align="center" class="newsletterCtaContainer" style="text-align: center;">
                                    <a href="https://www.youtube.com/watch?v=n9qWMPFJP_I" style="color: #000000; text-decoration: underline;" class="newsletterCta">${watchNow}</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                  </tr>
              </table>
          </td>
        </tr>
        ${Line("https://beliani.info/newsletter/2022/230828Line.jpg")}
          ${Category({
            category: {
              ...categories[1],
              name: translations[6],
            },
            products: [
              products[10],
              products[11],
              priceFrom(products[12]),
              products[13],
            ],
            cta: shopNow,
            style: {
              bgColor: "#ffefd9;",
            },
            type: "monday",
            country,
          })}
        ${Line("https://beliani.info/newsletter/2022/230828Line.jpg")}
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
              bgColor: "#ffefd9;",
            },
            country,
          })}
        ${Line("https://beliani.info/newsletter/2022/230828Line.jpg")}
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
            style: {
              bgColor: "#ffefd9;",
            },
            type: "monday",
            country,
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

        ${footer[country](conditions, "landing", id)}
    `;
}
