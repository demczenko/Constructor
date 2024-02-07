import { Line, Category, GetCode, Intro, Paragraph } from "../components/index.js";
import { priceFree } from "../helpers/index.js";
import { footer, header } from "../templates/index.js";

export function newsletter({
  links,
  getProductByName,
  getProductById,
  getCategory,
  translations,
  id,
  origin,
  country,
  template,
}) {

  return `
  ${header[country]("newsletter", id)}
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #ffccb7;" >
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
                                <td align="center" class="newsletterBottom35px">
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
                    <td align="center" style="background-color: #ffccb7;" class="newsletterContainer">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                          <tr>
                              <td align="center" class="newsletterBottom35px">
                                <span class="newsletterParagraph">
                                    ${translations.offer[0]} 
                                </span>
                                <br />
                                <span class="newsletterParagraph" style="font-weight: bold;">
                                    ${translations.offer[1]} 
                                </span>
                                <span class="newsletterParagraph">
                                    ${translations.offer[2]}
                                </span>
                              </td>
                          </tr>
                          <tr>
                              <td align="center" class="newsletterBottom35px">
                                  <span class="newsletterParagraph">
                                      ${translations.offer[3]}
                                  </span>
                              </td>
                          </tr>
                        </table>
                    </td>
                </tr>
                
                ${GetCode({
                  code: translations.getCode,
                  link: links[0],
                  type: template,
                })}

                <tr>
                    <td align="center" style="background-color: #ffccb7;" class="newsletterContainer" >
                      ${Paragraph(translations.offer[4], "center")}
                    </td>
                </tr>
                <tr>
                    <td align="center" style="background-color: #ffccb7;" class="newsletterContainer" >
                      ${Paragraph(translations.offer[5], "center")}
                    </td>
                </tr>
              <tr>
                <td style="background-color: #ffccb7;" class="newsletterBottom80px">
                </td>
              </tr>

              <tr>
                <td class="newsletterContainer" style="background-color: #fd9000;">
                  ${Intro({
                    data: translations.intro,
                  })}
                </td>
              </tr>

                <tr>
                  <td class="newsletterBottom35px" style="background-color: #fd9000;">
                  </td>
                </tr>

                <tr>
                  <td style="background-color: #fd9000;">
                    ${Category({
                      name: translations.category[0],
                      src: "https://beliani.info/newsletter/2022/240212Category1.png",
                      href: getCategory(
                        "https://www.beliani.ch/sofas/test/?Colour=Red,Pink,Green,Orange,Yellow,Violet"
                      ),
                      products: [
                        getProductByName("SAVAR"),
                        getProductByName("EKSJO"),
                        getProductByName("LUCAN"),
                        getProductByName("ABERDEEN"),
                      ],
                      cta: translations.shopNow,
                    })}
                  </td>
                </tr>

                <tr>
                  <td class="newsletterBottom35px" style="background-color: #ffccb7;">
                  </td>
                </tr>

                <tr>
                  <td style="background-color: #ffccb7;">
                    ${Category({
                      name: translations.category[1],
                      src: "https://beliani.info/newsletter/2022/240212Category2.png",
                      href: getCategory(
                        "https://www.beliani.ch/beds/all+products/?Colour=Red,Pink,Green,Orange,Yellow,Violet"
                      ),
                      products: [
                        getProductByName("VION"),
                        getProductByName("NOYERS"),
                        getProductByName("MARVILLE"),
                        getProductByName("FLAYAT"),
                      ],
                      cta: translations.shopNow,
                    })}
                  </td>
                </tr>

                <tr>
                  <td class="newsletterBottom35px" style="background-color: #fd9000;">
                  </td>
                </tr>

                <tr>
                  <td style="background-color: #fd9000;">
                    ${Category({
                      name: translations.category[2],
                      src: "https://beliani.info/newsletter/2022/240212Category3.png",
                      href: getCategory(
                        "https://www.beliani.ch/rugs/all+products/?Colour=Red,Pink,Green,Orange,Yellow,Violet"
                      ),
                      products: [
                        getProductByName("NIGDE"),
                        getProductByName("LORUT"),
                        getProductByName("GESI II"),
                        getProductByName("AKALAN"),
                      ],
                      style: "background-color: #fd9000;",
                      cta: translations.shopNow,
                    })}
                  </td>
                </tr>

                <tr>
                <td class="newsletterBottom35px" style="background-color: #ffccb7;">
                </td>
              </tr>
                
                <tr>
                  <td style="background-color: #ffccb7;">
                    ${Category({
                      name: translations.category[3],
                      src: "https://beliani.info/newsletter/2022/240212Category4.png",
                      href: getCategory(
                        "https://www.beliani.ch/home-accessories/accessories-decor/all+products/?Colour=Red,Pink,Green,Orange,Yellow,Violet"
                      ),
                      products: [
                        getProductByName("SCANDIUM"),
                        getProductByName("DAPHNI"),
                        getProductByName("THETIDIO"),
                        getProductByName("KAMALIA"),
                      ],
                      style: "background-color: #ffccb7;",
                      cta: translations.shopNow,
                    })}
                  </td>
                </tr>
            <tbody>
        </table>

        <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;">
            <tbody>
                <tr>
                    <td align="left">
                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                              ${Line(undefined, false)}
                                <tr>
                                    <td align="left" class="newsletterBottom35px">
                                        <span class="newsletterSoonEndingTitle">${
                                          translations.soonEnding
                                        }</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" class="newsletterBottom20px">
                                        <a href=${links[4]}>
                                            <img loading="lazy" src=${
                                              links[5]
                                            } style="display: block;" width="100%">
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" class="newsletterBottom35px">
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
