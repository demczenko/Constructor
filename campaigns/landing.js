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
import { Timer } from "../components/timer.js";
import { priceFree } from "../helpers/index.js";
import { Footer } from "../components/footer.js";
import { Header } from "../components/header.js";

export async function landing({
  links,
  getProductFromServer,
  getProductByName,
  getProductById,
  getCategory,
  queries,
  getField,
  id,
  origin,
  country,
  type,
  background,
}) {
  const Link = {
    CHDE: ["https://www.beliani.ch/content/lp24-05-27"],
    CHFR: ["https://www.beliani.ch/content/lp24-05-27"],
    UK: ["https://www.beliani.co.uk/content/lp24-05-27"],
    DE: ["https://www.beliani.de/content/lp24-05-27"],
    FR: ["https://www.beliani.fr/content/lp24-05-27"],
    AT: ["https://www.beliani.at/content/lp24-05-27"],
    ES: ["https://www.beliani.es/content/lp24-05-27"],
    PL: ["https://www.beliani.pl/content/lp24-05-27"],
    NL: ["https://www.beliani.nl/content/lp24-05-27"],
    PT: ["https://www.beliani.pt/content/lp24-05-27"],
    IT: ["https://www.beliani.it/content/lp24-05-27"],
    SE: ["https://www.beliani.se/content/lp24-05-27"],
    HU: ["https://www.beliani.hu/content/lp24-05-06"],
    DK: ["https://www.beliani.dk/content/lp24-05-27"],
    CZ: ["https://www.beliani.cz/content/lp24-05-27"],
    FI: ["https://www.beliani.fi/content/lp24-05-27"],
    NO: ["https://www.beliani.no/content/lp24-05-27"],
    SK: ["https://www.beliani.sk/content/lp24-05-27"],
  };

  const gif_src = {
    CHDE: ["https://gen.sendtric.com/countdown/u0qskvjdz3"],
    CHFR: ["https://gen.sendtric.com/countdown/bbxburfq2d"],
    UK: ["https://gen.sendtric.com/countdown/zrwkl2lzlq"],
    DE: ["https://gen.sendtric.com/countdown/u0qskvjdz3"],
    FR: ["https://gen.sendtric.com/countdown/bbxburfq2d"],
    AT: ["https://gen.sendtric.com/countdown/u0qskvjdz3"],
    ES: ["https://gen.sendtric.com/countdown/t51k3dwsq4"],
    PL: ["https://gen.sendtric.com/countdown/x38nniwryq"],
    NL: ["https://gen.sendtric.com/countdown/n6qe3ouy1d"],
    PT: ["https://gen.sendtric.com/countdown/zv9zzmbe8j"],
    IT: ["https://gen.sendtric.com/countdown/wea2sp3mt2"],
    SE: ["https://gen.sendtric.com/countdown/1dswinlt5n"],
    HU: ["https://gen.sendtric.com/countdown/84x4yhnlg6"],
    DK: ["https://gen.sendtric.com/countdown/oqjj78r6ya"],
    CZ: ["https://gen.sendtric.com/countdown/fzu8rn8n4h"],
    FI: ["https://gen.sendtric.com/countdown/xcwplgjr4g"],
    NO: ["https://gen.sendtric.com/countdown/pqtboz8d5f"],
    SK: ["https://gen.sendtric.com/countdown/d881g4bvil"],
  };

  return `
  ${Header(
    {
      id,
      advantages: {
        freeDelivery: getField(queries.header, "Free Delivery"),
        daysReturn: getField(queries.header, "365-Day Return"),
      },
      paragraph: {
        troubleViewing: getField(queries.header, "Trouble viewing"),
        troubleViewingHrefText: getField(
          queries.header,
          "Trouble viewing href text"
        ),
        addBeliani: getField(queries.header, "Add Beliani to your"),
        whiteList: getField(queries.header, "Whitelist"),
        whitelistHref: getField(queries.header, "Whitelist href"),
      },
      topImage: {
        src: getField(queries.header, "Top image src"),
        href: getField(queries.header, "Top image href"),
      },
      categories: {
        firstCategory: {
          src: getField(queries.header, "Header Category 1 src"),
          href: getField(queries.header, "Header Category 1 href"),
        },
        secondCategory: {
          src: getField(queries.header, "Header Category 2 src"),
          href: getField(queries.header, "Header Category 2 href"),
        },
        thirdCategory: {
          src: getField(queries.header, "Header Category 3 src"),
          href: getField(queries.header, "Header Category 3 href"),
        },
      },
      assembly: {
        src: ["AT", "PL", "FR", "UK"].includes(country)
          ? ["#fd9000"].includes(background)
            ? getField(queries.header, "Header delivery_cosy src")
            : getField(queries.header, "Header delivery src")
          : ["#750000"].includes(background)
          ? getField(queries.header, "Header asembly src")
          : getField(queries.header, "Header asembly_cosy src"),
        href: getField(queries.header, "Header asembly href"),
        exclude: ["SK", "CHIT", "SE", "NO", "FI"].includes(country),
      },
    },
    { type }
  )}
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #ffccb7; color: #000;" id="newsletter">
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
      
          ${Timer({
            title: queries.timer[0],
            subtitle: queries.timer[1],
            imageSrc: gif_src[country],
            imageHref:
              Link[country] +
              "?utm_source=newsletter&utm_medium=email&utm_campaign=" +
              id,
            ctaText: queries.shopNow[0],
            ctaHref:
              Link[country] +
              "?utm_source=newsletter&utm_medium=email&utm_campaign=" +
              id,
            style: {
              bgColor: "#ff2f00",
              textColor: "#FFF",
              align: "center",
            },
          })}
        
      

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
                  ${Paragraph(queries.offer[0], "center")}
              </td>
            </tr>
            <tr>
              <td>
                ${Space("newsletterBottom35px")}
              </td>
            </tr>
            <tr>
                <td align="center" class="newsletterParagraph">
                    ${Paragraph(queries.offer[1], "center")}
                </td>
            </tr>
            <tr>
              <td>
                ${Space("newsletterBottom35px")}
              </td>
            </tr>
            <tr>
                <td align="center"  >
                  ${Paragraph(queries.offer[2], "center")}
                </td>
            </tr>
            <tr>
              <td>
                ${Space("newsletterBottom35px")}
              </td>
            </tr>
            <tr>
              <td align="center"  >
              ${Paragraph(queries.code[0], "center")}
              </td>
            </tr>
            <tr>
              <td>
                ${Space("newsletterBottom35px")}
              </td>
            </tr>
            <tr>
                <td align="center"  >
                  ${Paragraph(queries.offer[4], "center")}
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
                ...getProductById(
                  "159511",
                  "https://upload.pictureserver.net/static/2024/240531Freebie1.png"
                ),
                align: "center",
              }),
              priceFree({
                ...getProductById(
                  "164754",
                  "https://upload.pictureserver.net/static/2024/240531Freebie2.png"
                ),
                align: "center",
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
          <td>
            ${Space("newsletterBottom20px")}
          </td>
        </tr>
        <tr>
        <td align="center" class="newsletterFreebieContainer" style="background-color: #ffccb7;" >
        ${Freebies({
          products: [
            priceFree({
              ...getProductById(
                "224652",
                "https://upload.pictureserver.net/static/2024/240531Freebie3.png"
              ),
              align: "center",
            }),
            priceFree({
              ...getProductById(
                "159513",
                "https://upload.pictureserver.net/static/2024/240531Freebie4.png"
              ),
              align: "center",
            }),
          ],
          size: {
            row: 1,
            col: 2,
          },
        })}
        ${Space("newsletterBottom80px")}
        </td>
      </tr>
      
      <tr>
      <td class="newsletterContainer">
      ${Line()}
      </td>
    </tr>

    <tr>
      <td style="color: #000; background-color: #ffccb7;">
        ${Space("newsletterBottom35px")}
      </td>
    </tr>

    


    <tr>
      <td class="newsletterContainer" style="color: #000; background-color: #ffccb7;" >
        ${Intro({
          data: queries.intro,
        })}
      </td>
    </tr>

    <tr>
      <td style="color: #000; background-color: #ffccb7;">
        ${Space("newsletterBottom80px")}
      </td>
    </tr>

      <tr>
        <td style="color: #000; background-color: #ffccb7;">
          ${Category({
            type: "monday",
            name: queries.category[0],
            src: "https://upload.pictureserver.net/static/2024/240531Category1.png",
            href: getCategory(
              "https://www.beliani.ch/children-room/kids-beds/"
            ),
            products: [
              getProductById(
                "412662",
                "https://upload.pictureserver.net/static/2024/240531Category11.png"
              ),
              getProductById(
                "466721",
                "https://upload.pictureserver.net/static/2024/240531Category12.png"
              ),
              getProductById(
                "450444",
                "https://upload.pictureserver.net/static/2024/240531Category13.png"
              ),
              getProductById(
                "467657",
                "https://upload.pictureserver.net/static/2024/240531Category14.png"
              ),
            ],
            cta: queries.shopNow,
          })}
        </td>
      </tr>

      <tr>
        <td class="newsletterContainer">
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
            type: "monday",
            name: queries.category[1],
            src: "https://upload.pictureserver.net/static/2024/240531Category2.png",
            href: getCategory(
              "https://www.beliani.ch/children-room/kids-desks/"
            ),
            products: [
              getProductById(
                "391674",
                "https://upload.pictureserver.net/static/2024/240531Category21.png"
              ),
              getProductById(
                "305942",
                "https://upload.pictureserver.net/static/2024/240531Category22.png"
              ),
              getProductById(
                "319062",
                "https://upload.pictureserver.net/static/2024/240531Category23.png"
              ),
              getProductById(
                "36143",
                "https://upload.pictureserver.net/static/2024/240531Category24.png"
              ),
            ],
            cta: queries.shopNow,
          })}
        </td>
      </tr>

      <tr>
        <td class="newsletterContainer">
        ${Line()}
        </td>
      </tr>
      <tr>
        <td style="color: #000; background-color: #ffccb7;" class="newsletterBottom35px" >
        </td>
      </tr>

      <tr>
        <td style="color: #000; background-color: #ffccb7;">
          ${Category({
            type: "monday",
            name: queries.category[2],
            src: "https://upload.pictureserver.net/static/2024/240531Category3.png",
            href: getCategory(
              "https://www.beliani.ch/children-room/kids-rugs/"
            ),
            products: [
              getProductById(
                "463185",
                "https://upload.pictureserver.net/static/2024/240531Category31.png"
              ),
              getProductById(
                "459972",
                "https://upload.pictureserver.net/static/2024/240531Category32.png"
              ),
              getProductById(
                "460225",
                "https://upload.pictureserver.net/static/2024/240531Category33.png"
              ),
              getProductById(
                "460404",
                "https://upload.pictureserver.net/static/2024/240531Category34.png"
              ),
            ],
            cta: queries.shopNow,
          })}
        </td>
      </tr>

      <tr>
        <td class="newsletterContainer">
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
            type: "monday",
            name: queries.category[3],
            src: "https://upload.pictureserver.net/static/2024/240531Category4.png",
            href: getCategory(
              "https://www.beliani.ch/children-room/kids-decor/"
            ),
            products: [
              getProductById(
                "457331",
                "https://upload.pictureserver.net/static/2024/240531Category41.png"
              ),
              getProductById(
                "431976",
                "https://upload.pictureserver.net/static/2024/240531Category42.png"
              ),
              getProductById(
                "438559",
                "https://upload.pictureserver.net/static/2024/240531Category43.png"
              ),
              getProductById(
                "438058",
                "https://upload.pictureserver.net/static/2024/240531Category44.png"
              ),
            ],
            cta: queries.shopNow,
          })}
        </td>
      </tr>
  <tbody>
</table>

      <table id="newsletter" align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;">
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
                                        queries.soonEnding
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
      ${Footer(
        {
          id,
          assembly: {
            src: ["AT", "PL", "FR", "UK"].includes(country)
              ? getField(queries.footer, "Delivery src")
              : getField(queries.footer, "Asembly src"),
            href: getField(queries.footer, "Asembly href"),
            exclude: ["SK", "CHIT", "SE", "NO", "FI"].includes(country),
          },
          workBanner: {
            src: getField(queries.footer, "Job src"),
            href: getField(queries.footer, "Job href"),
            exclude: !["PL"].includes(country),
          },
          thousandsMore: {
            title: getField(queries.footer, "Title"),
            firstCategory: {
              src: getField(queries.footer, "Category src 1"),
              href: getField(queries.footer, "Category href 1"),
            },
            secondCategory: {
              src: getField(queries.footer, "Category src 2"),
              href: getField(queries.footer, "Category href 2"),
            },
            thirdCategory: {
              src: getField(queries.footer, "Category src 3"),
              href: getField(queries.footer, "Category href 3"),
            },
            foutrthCategory: {
              src: getField(queries.footer, "Category src 4"),
              href: getField(queries.footer, "Category href 4"),
            },
            fifthCategory: {
              src: getField(queries.footer, "Category src 5"),
              href: getField(queries.footer, "Category href 5"),
            },
            sixthCategory: {
              src: getField(queries.footer, "Category src 6"),
              href: getField(queries.footer, "Category href 6"),
            },
            seventhCategory: {
              src: getField(queries.footer, "Category src 7"),
              href: getField(queries.footer, "Category href 7"),
            },
            eigthCategory: {
              src: getField(queries.footer, "Category src 8"),
              href: getField(queries.footer, "Category href 8"),
            },
          },
          klarna: {
            src: getField(queries.footer, "Klarna src"),
            href: getField(queries.footer, "Klarna href"),
            exclude: ["SK", "HU"].includes(country),
          },
          socials: {
            title: getField(queries.footer, "Socials Title"),
            instagram: {
              src: getField(queries.footer, "Instagram src"),
              href: getField(queries.footer, "Instagram href"),
            },
            facebook: {
              src: getField(queries.footer, "Facebook src"),
              href: getField(queries.footer, "Facebook href"),
            },
            youtube: {
              src: getField(queries.footer, "Youtube src"),
              href: getField(queries.footer, "Youtube href"),
            },
            pinterest: {
              src: getField(queries.footer, "Pinterest src"),
              href: getField(queries.footer, "Pinterest href"),
            },
          },
          advantages: {
            firstAdvantage: {
              src: getField(queries.footer, "Advantages src 1"),
              href: getField(queries.footer, "Advantages href 1"),
            },
            secondAdvantage: {
              src: getField(queries.footer, "Advantages src 2"),
              href: getField(queries.footer, "Advantages href 2"),
            },
            thirdAdvantage: {
              src: getField(queries.footer, "Advantages src 3"),
              href: getField(queries.footer, "Advantages href 3"),
            },
            fourthAdvantage: {
              src: getField(queries.footer, "Advantages src 4"),
              href: getField(queries.footer, "Advantages href 4"),
            },
          },
          conditions: {
            conditionsTitle: getField(queries.footer, "Conditions title"),
            conditionsText: queries.condition,
          },
          companyDetails: {
            title: getField(queries.footer, "Company Details"),
            address: getField(queries.footer, "Address"),
            mobileNumber: getField(queries.footer, "Mobile number"),
            emailAddress: getField(queries.footer, "Email address"),
            mailTo: getField(queries.footer, "Mail to"),
            email: getField(queries.footer, "Email"),
            commercialRegister: getField(queries.footer, "Commercial register"),
            vat: getField(queries.footer, "VAT"),
          },
        },
        { country, type }
      )}
`;
}
