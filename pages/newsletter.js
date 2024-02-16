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
                  <td>
                    ${Space("newsletterBottom35px")}
                  </td>
                </tr>
                <tr>
                    <td align="center" class="newsletterContainer">
                        ${Paragraph(translations.offer[0], "center")}
                    </td>
                </tr>
                <tr>
                  <td>
                    ${Space("newsletterBottom35px")}
                  </td>
                </tr>
                <tr>
                    <td align="center" class="newsletterContainer">
                        ${Paragraph(translations.offer[1], "center")}
                    </td>
                </tr>
                <tr>
                  <td>
                    ${Space("newsletterBottom35px")}
                  </td>
                </tr>
                <tr>
                  <td align="center" class="newsletterContainer" >
                    ${GetCode({
                      code: translations.offer[3],
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
                    <td align="center" class="newsletterContainer" >
                      ${Paragraph(translations.offer[2], "center")}
                    </td>
                </tr>
                <tr>
                  <td>
                    ${Space("newsletterBottom35px")}
                  </td>
                </tr>
                <tr>
                    <td align="center" class="newsletterContainer" >
                      ${Paragraph(translations.offer[4], "center")}
                    </td>
                </tr>

                <tr>
                  <td>
                    ${Space("newsletterBottom35px")}
                  </td>
                </tr>

                
                <tr>
                  <td align="center" class="newsletterContainer" >
                  ${ProductWithSize(
                    priceFree(getProductById("414803")),
                    "center"
                  )}
                  </td>
                </tr>

                
                <tr>
                  <td>
                    ${Space("newsletterBottom35px")}
                  </td>
                </tr>

                                
                <tr>
                  <td align="center" class="newsletterContainer" >
                  ${ProductWithSize(
                    priceFree(getProductById("414522")),
                    "center"
                  )}
                  </td>
                </tr>

                <tr>
                  <td>
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
                      src: "https://beliani.info/newsletter/2022/240219Category1.png",
                      href: getCategory(
                        "https://www.beliani.ch/children-room/kids-beds/"
                      ),
                      products: [
                        await getProductFromServer("422441"),
                        getProductById("440578"),
                        getProductById("422028"),
                        getProductById("392610"),
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
                      src: "https://beliani.info/newsletter/2022/240219Category2.png",
                      href: getCategory(
                        "https://www.beliani.ch/children-room/kids-chairs/"
                      ),
                      products: [
                        getProductById("428726"),
                        getProductById("428608"),
                        getProductById("428692"),
                        getProductById("428743"),
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
                      src: "https://beliani.info/newsletter/2022/240219Category3.png",
                      href: getCategory(
                        "https://www.beliani.ch/children-room/kids-rugs/"
                      ),
                      products: [
                        getProductById("333858"),
                        getProductById("400222"),
                        getProductById("395976"),
                        getProductById("407758"),
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
                      src: "https://beliani.info/newsletter/2022/240219Category4.png",
                      href: getCategory(
                        "https://www.beliani.ch/children-room/kids-decor/"
                      ),
                      products: [
                        getProductById("368545"),
                        getProductById("431976"),
                        getProductById("345636"),
                        getProductById("368601"),
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
