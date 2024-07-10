import { OfferPart } from "../components/OfferPart.js";
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
} from "../components/index.js";
import { computeValue } from "../helpers/computeValue.js";

export async function CategoriesGridOffertPart({
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
  categories,
  background
}) {
  const codes = queries.getCode.join("").split("<br />");
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
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #ececec; color: #000;" id="newsletter">
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
                  <td align="center">
                    ${ImageWithLink({
                      href: links[2],
                      src: links[3],
                    })}
                  </td>
              </tr>

              <tr>
                <td align="center" style="background-color: #ffccb7;">
                  ${OfferPart({
                    type,
                    offerDate: queries.offerDate,
                    code: queries.getCodes,
                    href: links[0],
                    offers: [
                      {
                        title: queries.intro[0],
                        paragraph: queries.intro[1],
                        code: codes[0],
                      },
                      {
                        title: queries.intro[2],
                        paragraph: queries.intro[3],
                        code: codes[1],
                      },
                      {
                        title: queries.intro[4],
                        paragraph: queries.intro[5],
                        code: codes[2],
                      },
                    ],
                  })}
                  </td>
              </tr>

              <tr>
                <td style="background-color: #ffccb7;" class="newsletterContainer">
                  <table cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tbody>
                          ${categories
                            .map((item) => {
                              const columns = [];
                              for (const category of item) {
                                const computed = computeValue({ ...category });

                                const html = `
                                  <td align="center">
                                    <a href="${getCategory(computed.href)}">
                                      <img alt="" src="${
                                        computed.src
                                      }" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                                    </a>
                                  </td>
                                  `;
                                columns.push(html);
                              }
                              return `
                                <tr>
                                  ${columns.join("")}
                                </tr>
                              `;
                            })
                            .join("")}
                      </tbody>
                  </table>
                </td>
              </tr>

              <tr>
                <td align="center" style="background-color: #ffccb7;">
                    ${Space()}
                </td>
              </tr>

              <tr>
                <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px; text-align: center; background-color: #ffccb7;">
                  <a href="${origin}" style="color:#750000; text-decoration: underline;">
                    <span class="newsletterCta">${getField(queries.templates, "Shop All Categories")}</span>
                  </a>
                </td>
              </tr>

              <tr>
                <td align="center" style="background-color: #ffccb7;">
                    ${Space()}
                </td>
              </tr>

              <tr>
                <td class="newsletterContainer" style="background-color: #ffccb7;">
                  ${Line()}
                </td>
              </tr>
          <tbody>
      </table>

      <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
          <tbody>
              <tr>
                <td align="left">
                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                          <tr>
                            <td class="newsletterBottom35px" >
                            </td>
                          </tr>
                            <tr>
                                <td align="left" class="newsletterBottom35px">
                                    <span class="newsletterSoonEndingTitle">${queries.soonEnding}</span>
                                </td>
                            </tr>
                            <tr>
                                <td align="left" class="newsletterBottom20px">
                                    <a href=${links[4]}>
                                        <img loading="lazy" src=${links[5]} style="display: block;" width="100%">
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td align="left" class="newsletterBottom35px">
                                    <a href=${links[6]}>
                                        <img loading="lazy" src=${links[7]} style="display: block;" width="100%">
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
              </tr>
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
                    <a href="${getField(queries.footer, "Asembly href")}?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                      <img loading="lazy" src=${getField(queries.footer, "Asembly src")} style="display: block; max-width: 100%;">
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
