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

export async function SundayNslt({
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
  const Link = {
    CHDE: ["https://www.beliani.ch/"],
    CHFR: ["https://www.beliani.ch/"],
    UK: ["https://www.beliani.co.uk/"],
    DE: ["https://www.beliani.de/"],
    FR: ["https://www.beliani.fr/"],
    AT: ["https://www.beliani.at/"],
    ES: ["https://www.beliani.es/"],
    PL: ["https://www.beliani.pl/"],
    NL: ["https://www.beliani.nl/"],
    PT: ["https://www.beliani.pt/"],
    IT: ["https://www.beliani.it/"],
    SE: ["https://www.beliani.se/"],
    HU: ["https://www.beliani.hu/"],
    DK: ["https://www.beliani.dk/"],
    CZ: ["https://www.beliani.cz/"],
    FI: ["https://www.beliani.fi/"],
    NO: ["https://www.beliani.no/"],
    SK: ["https://www.beliani.sk/"],
  };

  const gif_src = {
    CHDE: ["https://gen.sendtric.com/countdown/bh8a6vza6x"],
    CHFR: ["https://gen.sendtric.com/countdown/g6uo5i3jb9"],
    UK: ["https://gen.sendtric.com/countdown/1zm4ubxe0x"],
    DE: ["https://gen.sendtric.com/countdown/bbrm7gdq78"],
    FR: ["https://gen.sendtric.com/countdown/6q0vefx9yf"],
    AT: ["https://gen.sendtric.com/countdown/rjn3t5gays"],
    ES: ["https://gen.sendtric.com/countdown/a13fm2edkk"],
    PL: ["https://gen.sendtric.com/countdown/kulo0o5js0"],
    NL: ["https://gen.sendtric.com/countdown/xwotwje9sp"],
    PT: ["https://gen.sendtric.com/countdown/b0ohen2yk0"],
    IT: ["https://gen.sendtric.com/countdown/4pz6n4u80j"],
    SE: ["https://gen.sendtric.com/countdown/0i0euq1d4c"],
    HU: ["https://gen.sendtric.com/countdown/i6t3lwbklf"],
    DK: ["https://gen.sendtric.com/countdown/wy5fz2dghd"],
    CZ: ["https://gen.sendtric.com/countdown/vmn3l9161l"],
    FI: ["https://gen.sendtric.com/countdown/xegntpjm8x"],
    NO: ["https://gen.sendtric.com/countdown/tb5z32mwkr"],
    SK: ["https://gen.sendtric.com/countdown/n7eo4k07yq"],
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
                <tr>
                    <td align="center">
                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                            <tr>
                                <td align="center">
                                    <a href=${Link[country][0] + "?utm_source=newsletter&utm_medium=email&utm_campaign=" + id}>
                                        <img loading="lazy" width="100%" src=${
                                          links[0]
                                        } style="display: block;">
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                ${Category({
                  type:"sunday",
                  href: links[1],
                  src: links[2],
                  align: "center",
                  style: {
                    bgColor: "#dbd9d7",
                  },
                  cta: queries.sunday[0]
                })}
                ${Space("newsletterBottom80px")}
                ${["CHDE", "CHFR"].includes(country) ? 
                  Category({
                    type:"sunday",
                    href: links[3],
                    src: links[4],
                    align: "center",
                    style: {
                      bgColor: "#dbd9d7",
                    },
                    cta: queries.sunday[0]
                  })
                 : ""
                }
                ${ country === "CHDE" || country === "CHFR" ? Space("newsletterBottom80px") : "" }
                <tr>
                    <td align="center">
                      ${ImageWithLink(links[5], links[6])}
                    </td>
                </tr>
                ${Timer({
                  title: queries.timer[0],
                  subtitle: queries.timer[2],
                  imageSrc: gif_src[country],
                  ctaHref: links[1],
                  ctaText: queries.timer[3],
                  style: {
                    bgColor: "#FFCCB7",
                    textColor: "#000",
                    align: "center",
                  },
                })}
                ${Space("newsletterBottom80px")}
                ${Category({
                  type:"sunday",
                  href: links[7],
                  src: links[8],
                  align: "center",
                  style: {
                    bgColor: "#dbd9d7",
                  },
                  cta: queries.sunday[0]
                })}
                ${Space("newsletterBottom80px")}
                ${Category({
                  type:"sunday",
                  href: links[9],
                  src: links[10],
                  align: "center",
                  style: {
                    bgColor: "#dbd9d7",
                  },
                  cta: queries.sunday[0]
                })}
                ${Space("newsletterBottom80px")}
                
            <tbody>
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