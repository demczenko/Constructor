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
  const banners = {
    CHDE: "https://beliani.info/newsletter/2022/chde240311StaticBanner.png",
    FR: "https://beliani.info/newsletter/2022/fr240311StaticBanner.png",
    HU: "https://beliani.info/newsletter/2022/hu240311StaticBanner.png",
    IT: "https://beliani.info/newsletter/2022/it240311StaticBanner.png",
    NL: "https://beliani.info/newsletter/2022/nl240311StaticBanner.png",
    NO: "https://beliani.info/newsletter/2022/no240311StaticBanner.png",
    PL: "https://beliani.info/newsletter/2022/pl240311StaticBanner.png",
    PT: "https://beliani.info/newsletter/2022/pt240311StaticBanner.png",
    SE: "https://beliani.info/newsletter/2022/se240311StaticBanner.png",
    SK: "https://beliani.info/newsletter/2022/sk240311StaticBanner.png",
    ES: "https://beliani.info/newsletter/2022/es240311StaticBanner.png",
    UK: "https://beliani.info/newsletter/2022/uk240311StaticBanner.png",
    CHFR: "https://beliani.info/newsletter/2022/chfr240311StaticBanner.png",
    AT: "https://beliani.info/newsletter/2022/at240311StaticBanner.png",
    CZ: "https://beliani.info/newsletter/2022/cz240311StaticBanner.png",
    DE: "https://beliani.info/newsletter/2022/de240311StaticBanner.png",
    DK: "https://beliani.info/newsletter/2022/dk240311StaticBanner.png",
    FI: "https://beliani.info/newsletter/2022/fi240311StaticBanner.png",
  };

  const banners_link = {
    CHDE: "https://www.beliani.ch/content/lp24-03-04",
    CHFR: "https://www.beliani.ch/content/lp24-03-04",
    UK: "https://www.beliani.co.uk/content/lp24-03-04",
    DE: "https://www.beliani.de/content/lp24-03-04",
    AT: "https://www.beliani.at/content/lp24-03-04",
    ES: "https://www.beliani.es/content/lp24-03-04",
    PL: "https://www.beliani.pl/content/lp24-03-04",
    NL: "https://www.beliani.nl/content/lp24-03-04",
    IT: "https://www.beliani.it/content/lp24-03-04",
    PT: "https://www.beliani.pt/content/lp24-03-04",
    HU: "https://www.beliani.hu/content/lp24-03-04",
    DK: "https://www.beliani.dk/content/lp24-03-04",
    CZ: "https://www.beliani.cz/content/lp24-03-04",
    FI: "https://www.beliani.fi/content/lp24-03-04",
    NO: "https://www.beliani.no/content/lp24-03-04",
    SK: "https://www.beliani.sk/content/lp24-03-04",
    SE: "https://www.beliani.se/content/lp24-03-04",
    FR: "https://www.beliani.fr/content/lp24-03-04",
  };
  return `
  ${header[country]("newsletter", id)}
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #ffccb7; color: #000;" >
            <tbody>
                <tr>
                    <td align="center">
                      ${ImageWithLink(links[0], links[1])}
                    </td>
                </tr>
                <tr>
                    <td align="center" class="newsletterBottom35px">
                      ${ImageWithLink(links[2], links[3])}
                    </td>
                </tr>

                <tr>
                    <td align="center">
                      ${ImageWithLink(
                        banners_link[country] +
                          "?utm_source=newsletter&utm_medium=email&utm_campaign=" +
                          id,
                        banners[country]
                      )}
                    </td>
                </tr>

                <tr>
                  <td class="newsletterContainer"style="background-color: #ffccb7; ">
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
                    <td align="center" class="newsletterFreebieContainer" style="background-color: #ffccb7;" >
                    ${Freebies({
                      products: [
                        priceFree({
                          ...getProductById("1601"),
                          style: "background-color: #ffffff; ",
                          align: "center",
                          containerAlign: "right"
                        }),
                        priceFree({
                          ...getProductById("34094"),
                          style: "background-color: #ffffff; ",
                          align: "center",
                          containerAlign: "left"
                        }),
                      ],
                      size: {
                        row: 1,
                        col: 2,
                      },
                    })}
                    </td>
                  </tr>
                  <tr>
                  <td align="center" class="newsletterFreebieContainer" style="background-color: #ffccb7;" >
                  ${Freebies({
                    products: [
                      priceFree({
                        ...getProductById("2002"),
                        style: "background-color: #ffffff; ",
                        align: "center",
                      }),
                      priceFree({
                        ...getProductById("12427"),
                        style: "background-color: #ffffff; ",
                        align: "center",
                      }),
                      priceFree({
                        ...getProductById("1602"),
                        style: "background-color: #ffffff; ",
                        align: "center",
                      }),
                    ],
                    size: {
                      row: 1,
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
                <td class="newsletterContainer" style="color: #000" >
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
                  <td style="color: #000">
                    ${Category({
                      name: translations.category[0],
                      src: "https://beliani.info/newsletter/2022/240318Category1.png",
                      href: getCategory(
                        "https://www.beliani.ch/garden-furniture/outdoor-furniture/lounge-sets/"
                      ),
                      products: [
                        getProductById("326780"),
                        getProductById("376374"),
                        getProductById("321238"),
                        getProductById("248918"),
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
                  <td style="color: #000">
                    ${Category({
                      name: translations.category[1],
                      src: "https://beliani.info/newsletter/2022/240318Category2.png",
                      href: getCategory(
                        "https://www.beliani.ch/garden-furniture/outdoor-furniture/garden-dining-sets/"
                      ),
                      products: [
                        getProductById("82159"),
                        getProductById("360813"),
                        getProductById("374902"),
                        getProductById("249069"),
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
                  <td style="color: #000">
                    ${Category({
                      name: translations.category[2],
                      src: "https://beliani.info/newsletter/2022/240318Category3.png",
                      href: getCategory(
                        "https://www.beliani.ch/garden-furniture/outdoor-furniture/sun-loungers/"
                      ),
                      products: [
                        getProductById("416079"),
                        getProductById("270973"),
                        getProductById("395368"),
                        getProductById("386818"),
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
                  <td style="color: #000">
                    ${Category({
                      name: translations.category[3],
                      src: "https://beliani.info/newsletter/2022/240318Category4.png",
                      href: getCategory(
                        "https://www.beliani.ch/garden-furniture/garden-accessories/fire-pits/"
                      ),
                      products: [
                        getProductById("315877"),
                        getProductById("315896"),
                        getProductById("177344"),
                        getProductById("301788"),
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
                                ${Line()}
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
        ${footer[country](
          translations.condition[0] + " " + translations.condition[1],
          template,
          id
        )}
    `;
}
