import { SundayCategory } from "../components/SundayCategory.js";
import { YouTube } from "../components/YouTube.js";
import { Footer } from "../components/footer.js";
import { Header } from "../components/header.js";
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
  Timer,
} from "../components/index.js";
import { computeValue } from "../helpers/computeValue.js";

export async function Sunday({
  links,
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
  categories,
}) {
  const timers = {
    UK: "https://gen.sendtric.com/countdown/o1dplny8s5",
    PL: "https://gen.sendtric.com/countdown/3n25mj88tl",
    DE: "https://gen.sendtric.com/countdown/ck8eoh8wjy",
    AT: "https://gen.sendtric.com/countdown/c3cqeuz7rt",
    CHDE: "https://gen.sendtric.com/countdown/ocnkyc14lm",
    FR: "https://gen.sendtric.com/countdown/dn5cw37vp9",
    CHFR: "https://gen.sendtric.com/countdown/8vqxpgy5em",
    ES: "https://gen.sendtric.com/countdown/f7eayb03vm",
    NL: "https://gen.sendtric.com/countdown/9ibmpsyj4s",
    IT: "https://gen.sendtric.com/countdown/l8doxazm4m",
    PT: "https://gen.sendtric.com/countdown/yjxsw6d4w0",
    DK: "https://gen.sendtric.com/countdown/gnxa2i2kz4",
    NO: "https://gen.sendtric.com/countdown/comah6jid3",
    FI: "https://gen.sendtric.com/countdown/2mtlt267yp",
    SE: "https://gen.sendtric.com/countdown/eenxvsb1hj",
    CZ: "https://gen.sendtric.com/countdown/lemtov2mpr",
    HU: "https://gen.sendtric.com/countdown/63dw6tkv8f",
    SK: "https://gen.sendtric.com/countdown/hws59n10kz",
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
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #dbd9d7; color: #000;" id="newsletter">
          <tbody>
              <tr>
                  <td align="center">
                    ${ImageWithLink({
                      href: links[0],
                      src: links[1],
                    })}
                  </td>
              </tr>
              

              <tr>
                <td align="center" style="background-color: #dbd9d7;">
                    ${SundayCategory({
                      cta: getField(queries.templates, "See more"),
                      href: links[2],
                      src: links[3],
                    })}
                </td>
              </tr>

            <tr>
                <td style="background-color: #dbd9d7; ">
                  ${Space({ className: "newsletterBottom80px" })}
                </td>
            </tr>

            <tr>
                <td align="center" style="background-color: #dbd9d7;">
                    ${SundayCategory({
                      cta: getField(queries.templates, "See more"),
                      href: links[4],
                      src: links[5],
                    })}
                </td>
            </tr>

            <tr>
                <td style="background-color: #dbd9d7; ">
                  ${Space({ className: "newsletterBottom80px" })}
                </td>
            </tr>
            
            <tr>
                <td align="center" style="background-color: #dbd9d7;">
                    ${SundayCategory({
                      cta: getField(queries.templates, "See more"),
                      href: links[6],
                      src: links[7],
                    })}
                </td>
            </tr>

            <tr>
                <td style="background-color: #dbd9d7; ">
                  ${Space({ className: "newsletterBottom80px"})}
                </td>
            </tr>

            <tr>
                <td align="center" style="background-color: #dbd9d7;">
                    ${SundayCategory({
                      cta: getField(queries.templates, "See more"),
                      href: links[8],
                      src: links[9],
                    })}
                </td>
            </tr>

            <tr>
                <td style="background-color: #dbd9d7; ">
                  ${Space({ className: "newsletterBottom80px"})}
                </td>
            </tr>
            
            <tr>
                <td align="center" style="background-color: #dbd9d7;">
                    ${SundayCategory({
                      cta: getField(queries.templates, "See more"),
                      href: null,
                      src: null,
                      renderOn: [
                        {
                          field: "href",
                          PL:
                            "https://www.beliani.pl/content/lp24-06-22fd?utm_source=newsletter&utm_medium=email&utm_campaign=" +
                            id,
                        },
                        {
                          field: "src",
                          PL: "https://upload.pictureserver.net/static/2024/pl20240622fd_mb.png",
                        },
                      ],
                    })}
                </td>
            </tr>

            <tr>
                <td style="background-color: #dbd9d7; ">
                  ${Space({ className: null, renderOn: [
                    {
                      field: "className",
                      "PL": "newsletterBottom80px"
                    }
                  ]})}
                </td>
            </tr>

          <tbody>
      </table>

      <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
          <tbody>
            ${
              country === "UK"
                ? `
                <tr>
                    <td class="newsletterBottom35px" >
                    ${Line()}
                    </td>
                </tr>
                    <tr>
                    <td>
                    <a href="#">
                    <img loading="lazy" src=${getField(
                      queries.footer,
                      "Asembly src"
                    )} style="display: block; max-width: 100%;">
                    </a>
                    </td>
                </tr>
                <tr>
                    <td class="newsletterBottom35px" >
                    </td>
                </tr>
                `
                : ""
            }
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
