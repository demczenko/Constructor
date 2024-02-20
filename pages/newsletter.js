import {
  Line,
  Category,
  GetCode,
  Intro,
  Paragraph,
  ImageWithLink,
  Space,
  Freebies,
  Product,
  ProductWithSize,
} from "../components/index.js";
import { priceFree } from "../helpers/index.js";
import { footer, header } from "../templates/index.js";

export async function newsletter({
  links,
  getProductFromServer,
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
                      ${ImageWithLink(links[0], links[1])}
                    </td>
                </tr>
                <tr>
                    <td align="center">
                      ${ImageWithLink(links[2], links[3])}
                    </td>
                </tr>

                <tr>
                  <td class="newsletterContainer"style="background-color: #fd9000; color: white;">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                      <tr>
                        <td>
                          ${Space("newsletterBottom35px")}
                        </td>
                      </tr>
                      <tr>
                        <td align="center" >
                            ${Paragraph(translations.offer[0], "center")}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          ${Space("newsletterBottom35px")}
                        </td>
                      </tr>
                      <tr>
                          <td align="center" >
                              ${Paragraph(translations.offer[1], "center")}
                          </td>
                      </tr>
                      <tr>
                        <td>
                          ${Space("newsletterBottom35px")}
                        </td>
                      </tr>
                      <tr>
                        <td align="center"  >
                          ${GetCode({
                            code: translations.offer[2],
                            link: links[0],
                            type: template,
                          })}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          ${Space("newsletterBottom35px")}
                        </td>
                      </tr>
                      <tr>
                          <td align="center"  >
                            ${Paragraph(translations.offer[3], "center")}
                          </td>
                      </tr>
                      <tr>
                        <td>
                          ${Space("newsletterBottom35px")}
                        </td>
                      </tr>
                      <tr>
                          <td align="center"  >
                            ${Paragraph(translations.offer[4], "center")}
                          </td>
                      </tr>

                      <tr>
                        <td>
                          ${Space("newsletterBottom35px")}
                        </td>
                      </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" class="newsletterFreebieContainer" style="background-color: #fd9000; color: white; padding-right: 10px" >
                    ${Freebies({
                      products: [
                        priceFree({
                          ...getProductById("379354"),
                          style: "background-color: #ffffff;",
                        }),
                        priceFree({
                          ...getProductById("379635"),
                          style: "background-color: #ffffff;",
                        }),
                        priceFree({
                          ...getProductById("379739"),
                          style: "background-color: #ffffff;",
                        }),
                        priceFree({
                          ...getProductById("380988"),
                          style: "background-color: #ffffff;",
                        }),
                        priceFree({
                          ...getProductById("380833"),
                          style: "background-color: #ffffff;",
                        }),
                        priceFree({
                          ...getProductById("378651"),
                          style: "background-color: #ffffff;",
                        }),
                      ],
                      size: {
                        row: 2,
                        col: 3,
                      },
                    })}
                    ${Space("newsletterBottom80px")}

                    </td>
                  </tr>
                <tr>
                  <td class="newsletterContainer" >
                    ${Line()}
                  </td>
                </tr>

                <tr>
                  <td>
                    ${Space("newsletterBottom35px")}
                  </td>
                </tr>

              <tr>
                <td class="newsletterContainer" >
                  ${Intro({
                    data: translations.intro,
                  })}
                </td>
              </tr>

              <tr>
                <td>
                  ${Space("newsletterBottom80px")}
                </td>
              </tr>

                <tr>
                  <td >
                    ${Category({
                      name: translations.category[0],
                      src: "https://beliani.info/newsletter/2022/240226Category1.png",
                      href: getCategory("https://www.beliani.ch/desks-eng/"),
                      products: [
                        getProductById("183024"),
                        getProductById("229882"),
                        getProductById("244778"),
                        getProductById("196950"),
                      ],
                      cta: translations.shopNow,
                    })}
                  </td>
                </tr>


                <tr>
                  <td class="newsletterContainer" >
                    ${Line()}
                  </td>
                </tr>

                <tr>
                  <td class="newsletterBottom35px" >
                  </td>
                </tr>

                <tr>
                  <td >
                    ${Category({
                      name: translations.category[1],
                      src: "https://beliani.info/newsletter/2022/240226Category2.png",
                      href: getCategory(
                        "https://www.beliani.ch/office-chairs/gaming-chairs/"
                      ),
                      products: [
                        getProductById("56088"),
                        getProductById("123426"),
                        getProductById("376076"),
                        getProductById("178944"),
                      ],
                      cta: translations.shopNow,
                    })}
                  </td>
                </tr>

                <tr>
                  <td class="newsletterContainer" >
                    ${Line()}
                  </td>
                </tr>

                <tr>
                  <td class="newsletterBottom35px" >
                  </td>
                </tr>

                <tr>
                  <td >
                    ${Category({
                      name: translations.category[2],
                      src: "https://beliani.info/newsletter/2022/240226Category3.png",
                      href: getCategory(
                        "https://www.beliani.ch/storage/office-cabinets/"
                      ),
                      products: [
                        getProductById("195370"),
                        getProductById("330127"),
                        getProductById("424305"),
                        getProductById("259091"),
                      ],
                      cta: translations.shopNow,
                    })}
                  </td>
                </tr>

                
                <tr>
                  <td class="newsletterContainer" >
                    ${Line()}
                  </td>
                </tr>

                <tr>
                  <td class="newsletterBottom35px" >
                  </td>
                </tr>
                
                <tr>
                  <td >
                    ${Category({
                      name: translations.category[3],
                      src: "https://beliani.info/newsletter/2022/240226Category4.png",
                      href: getCategory(
                        "https://www.beliani.ch/home-accessories/accessories-decor/"
                      ),
                      products: [
                        getProductById("212038"),
                        getProductById("305750"),
                        getProductById("367200"),
                        getProductById("432027"),
                      ],
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
                            <tr>
                              <td class="newsletterBottom35px" >
                                ${Line(undefined, false)}
                              </td>
                            </tr>
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
