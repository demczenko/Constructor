import { Footer } from "../components/footer.js";
import { Header } from "../components/header.js";
import { Timer } from "../components/timer.js";
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

export async function newsletter0524({
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
  background
}) {
  const categories = [
    [
      {
        href: "https://www.beliani.ch/outdoor-furniture/",
        src: `https://upload.pictureserver.net/static/2024/20240712${country.toLowerCase()}-13.png`,
      },
      {
        href: "https://www.beliani.ch/sofas/",
        src: `https://upload.pictureserver.net/static/2024/20240712${country.toLowerCase()}-12.png`,
      },
    ],
    [
      {
        href: " https://www.beliani.ch/beds/",
        src: `https://upload.pictureserver.net/static/2024/20240712${country.toLowerCase()}-10.png`,
      },
      {
        href: " https://www.beliani.ch/armchairs/",
        src: `https://upload.pictureserver.net/static/2024/20240712${country.toLowerCase()}-9.png`,
      },
    ],
    [
      {
        href: "https://www.beliani.ch/chairs/",
        src: `https://upload.pictureserver.net/static/2024/20240712${country.toLowerCase()}-8.png`,
      },
      {
        href: "https://www.beliani.ch/tables/",
        src: `https://upload.pictureserver.net/static/2024/20240712${country.toLowerCase()}-7.png`,
      },
    ],
    [
      {
        href: "https://www.beliani.ch/storage/",
        src: `https://upload.pictureserver.net/static/2024/20240712${country.toLowerCase()}-6.png`,
      },
      {
        href: "https://www.beliani.ch/children-room/",
        src: `https://upload.pictureserver.net/static/2024/20240712${country.toLowerCase()}-5.png`,
      },
    ],
    [
      {
        href: "https://www.beliani.ch/textiles/",
        src: `https://upload.pictureserver.net/static/2024/20240712${country.toLowerCase()}-11.png`,
      },
      {
        href: "https://www.beliani.ch/lighting/",
        src: `https://upload.pictureserver.net/static/2024/20240712${country.toLowerCase()}-4.png`,
      },
    ],
    [
      {
        href: "https://www.beliani.ch/bathtubs-hot-tubs/",
        src: `https://upload.pictureserver.net/static/2024/20240712${country.toLowerCase()}-3.png`,
      },
      {
        href: "https://www.beliani.ch/desks-eng/",
        src: `https://upload.pictureserver.net/static/2024/20240712${country.toLowerCase()}-2.png`,
      },
    ],
    [
      {
        href: "https://www.beliani.ch/rugs/",
        src: `https://upload.pictureserver.net/static/2024/20240712${country.toLowerCase()}-1.png`,
      },
      {
        href: "https://www.beliani.ch/home-accessories/",
        src: `https://upload.pictureserver.net/static/2024/20240712${country.toLowerCase()}.png`,
      },
    ],
  ];

  const Link = {
    CHDE: ["https://www.beliani.ch/content/lp24-07-08"],
    CHFR: ["https://www.beliani.ch/content/lp24-07-08"],
    UK: ["https://www.beliani.co.uk/content/lp24-07-08"],
    DE: ["https://www.beliani.de/content/lp24-07-08"],
    FR: ["https://www.beliani.fr/content/lp24-07-08"],
    AT: ["https://www.beliani.at/content/lp24-07-08"],
    ES: ["https://www.beliani.es/content/lp24-07-08"],
    PL: ["https://www.beliani.pl/content/lp24-07-08"],
    NL: ["https://www.beliani.nl/content/lp24-07-08"],
    PT: ["https://www.beliani.pt/content/lp24-07-08"],
    IT: ["https://www.beliani.it/content/lp24-07-08"],
    SE: ["https://www.beliani.se/content/lp24-07-08"],
    HU: ["https://www.beliani.hu/content/lp24-07-08"],
    DK: ["https://www.beliani.dk/content/lp24-07-08"],
    CZ: ["https://www.beliani.cz/content/lp24-07-08"],
    FI: ["https://www.beliani.fi/content/lp24-07-08"],
    NO: ["https://www.beliani.no/content/lp24-07-08"],
    SK: ["https://www.beliani.sk/content/lp24-07-08"],
  };
  const Link1 = {
    CHDE: ["https://www.beliani.ch"],
    CHFR: ["https://www.beliani.ch"],
    UK: ["https://www.beliani.co.uk"],
    DE: ["https://www.beliani.de"],
    FR: ["https://www.beliani.fr"],
    AT: ["https://www.beliani.at"],
    ES: ["https://www.beliani.es"],
    PL: ["https://www.beliani.pl"],
    NL: ["https://www.beliani.nl"],
    PT: ["https://www.beliani.pt"],
    IT: ["https://www.beliani.it"],
    SE: ["https://www.beliani.se"],
    HU: ["https://www.beliani.hu"],
    DK: ["https://www.beliani.dk"],
    CZ: ["https://www.beliani.cz"],
    FI: ["https://www.beliani.fi"],
    NO: ["https://www.beliani.no"],
    SK: ["https://www.beliani.sk"],
  };

  const gif_src = {
    CHDE: ["https://gen.sendtric.com/countdown/2v9m8qgzqh"],
    CHFR: ["https://gen.sendtric.com/countdown/y6dn8waxcl"],
    UK: ["https://gen.sendtric.com/countdown/497qf5tzud"],
    DE: ["https://gen.sendtric.com/countdown/2v9m8qgzqh"],
    FR: ["https://gen.sendtric.com/countdown/y6dn8waxcl"],
    AT: ["https://gen.sendtric.com/countdown/2v9m8qgzqh"],
    ES: ["https://gen.sendtric.com/countdown/j8zygdte7y"],
    PL: ["https://gen.sendtric.com/countdown/jz4xd5ppxh"],
    NL: ["https://gen.sendtric.com/countdown/rlg7d9mr9z"],
    PT: ["https://gen.sendtric.com/countdown/2dq7ycdxip"],
    IT: ["https://gen.sendtric.com/countdown/bbj0sero4c"],
    SE: ["https://gen.sendtric.com/countdown/gf56t87ao7"],
    HU: ["https://gen.sendtric.com/countdown/ebv84lz62s"],
    DK: ["https://gen.sendtric.com/countdown/4dnijk74wm"],
    CZ: ["https://gen.sendtric.com/countdown/z4exptldm8"],
    FI: ["https://gen.sendtric.com/countdown/mec5bnezdf"],
    NO: ["https://gen.sendtric.com/countdown/ty0ckz21nt"],
    SK: ["https://gen.sendtric.com/countdown/hxrobzuj1x"],
  };

  return `
  ${Header(
    {
      id,
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
      advantages: {
        freeDelivery: getField(queries.header, "Free Delivery"),
        daysReturn: getField(queries.header, "365-Day Return"),
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
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #dbd9d7; color: #000;" >
            <tbody>
                <tr style="background-color:#dbd9d7;">
                    <td align="center">
                      ${ImageWithLink(links[0], links[1])}
                    </td>
                </tr>
                <tr style="background-color:#dbd9d7;">
                    <td align="center">
                      ${ImageWithLink(
                        links[2],
                        ["FR"].includes(country)
                          ? "https://upload.pictureserver.net/static/2024/Gif_BastilleDay24-07-12.gif"
                          : links[3]
                      )}
                    </td>
                </tr>
                <tr>
                <td style="color: #000; background-color: #dbd9d7;">
                  ${Space("newsletterBottom35px")}
                </td>
              </tr>
            <tr class="newsletterContainer">
              <td>
                ${categories
                  .map((item, idx) => {
                    return `
                      <table cellspacing="0" cellpadding="0" style="width: 100%;">
                      <tr>
                        <td class="newsletterGridLeft">
                          <a href="${getCategory(item[0].href)}">
                            <img style="display: block; width: 100%;" src="${
                              item[0].src
                            }" />
                          </a>
                        </td>
                        <td class="newsletterGridRight">
                          <a href="${getCategory(item[1].href)}">
                            <img style="display: block; width: 100%;" src="${
                              item[1].src
                            }" />
                          </a>
                        </td>
                      </tr>
                    </table>
                  `;
                  })
                  .join("")}
              </td>
            </tr>
            <tr>
                <td style="color: #000; background-color: #dbd9d7;">
                  ${Space("newsletterBottom25px")}
                </td>
              </tr>
            <tr>
                <td align="center">
                  <a href="${
                    Link1[country] +
                    "?utm_source=newsletter&utm_medium=email&utm_campaign=" +
                    id
                  }" style="color:#000; text-decoration: underline;">
                    <span class="newsletterCta">${queries.shopNow}</span>
                  </a>
                </td>
            </tr>
            <tr>
                <td style="color: #000; background-color: #dbd9d7;">
                  ${Space("newsletterBottom35px")}
                </td>
              </tr>
            

              <tr>
                <td class="newsletterBottom35px" >
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
                style: {
                  bgColor: "#fd9000",
                  textColor: "#000",
                  align: "center",
                },
                ctaHref:
                  Link[country] +
                  "?utm_source=newsletter&utm_medium=email&utm_campaign=" +
                  id,
                ctaText: queries.shopNow2,
              })}
               <tr style="background-color:#FFCCB7;">
                    <td align="center">
                      ${ImageWithLink(links[8], links[9])}
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
                             <!-- ${Line()} -->
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
