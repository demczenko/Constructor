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
import { priceFree } from "../helpers/priceFree.js";

export async function mondayOffer({
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
  freebies,
  background,
  header,
}) {
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
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: ${
    background || "#ffffff"
  }; color: #000;" id="newsletter">
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
                <td class="newsletterContainer" style="background-color: ${
                  background || "#ffffff"
                }; ">
                    ${Space()}
                    ${Paragraph(queries.offerPart[0], "center")}
                    ${Space()}
                    ${Paragraph(queries.offerPart[1], "center")}
                    ${Space()}
                  </td>
              </tr>
              <tr>
                <td class="newsletterContainer" style="background-color: ${
                  background || "#ffffff"
                }; ">
                    ${
                      type === "newsletter"
                        ? `<table cellspacing="0" cellpadding="0" border="0" width="100%" >
                      <tbody>
                          <tr>
                              <td align="center">
                              <a href=${
                                links[0]
                              } style="text-decoration:underline!important; color: #000">
                                  <span class="newsletterParagraph" style="font-size: 20px; font-weight: 400; color: #000">
                                  ${getField(queries.templates, "Get code")}
                                  </span>
                              </a>
                              </td>
                          </tr>
                      </tbody>
                    </table>`
                        : `<table cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tbody>
                          <tr>
                              <td align="center">
                                <span class="newsletterParagraph" style="font-size: 20px; font-weight: 400; color: #000">
                                  ${queries.code}
                                </span>
                              </td>
                          </tr>
                      </tbody>
                    </table>`
                    }
                  </td>
              </tr>
              <tr>
                <td class="newsletterContainer" style="background-color: ${
                  background || "#ffffff"
                }; ">
                    ${Space()}
                    ${Paragraph(queries.offerPart[2], "center")}
                    ${Space()}
                    ${Paragraph(
                      getField(queries.templates, "Choose from:"),
                      "center"
                    )}
                    ${Space()}
                </td>
              </tr>

              
              <tr>
                <td class="newsletterContainer" style="background-color: ${
                  background || "#ffffff"
                }; ">
                    ${Freebies({
                      products: freebies[0].products.map((item) => ({
                        ...item,
                        ...priceFree(getProductById(item.id, item.src)),
                        name: queries.freebieName || "Fullfil table 28"
                      })),
                      size: freebies[0].size,
                    })}
                </td>
              </tr>

              <tr>
                  <td style="background-color: ${background || "#ffffff"};">
                        ${Space({ className: "newsletterBottom80px" })}
                  </td>
              </tr>

                <tr>
                    <td class="newsletterContainer">
                        ${Line()}
                    </td>
                </tr>

                <tr>
                    <td style="background-color: ${background || "#ffffff"};">
                      ${Space()}
                    </td>
                </tr>

                <tr>
                    <td class="newsletterContainer">
                        ${Intro({
                          data: queries.intro,
                        })}
                    </td>
                </tr>

                <tr>
                    <td style="background-color: ${background || "#ffffff"};">
                        ${Space({ className: "newsletterBottom80px" })}
                    </td>
                </tr>

                
                <tr>
                    <td style="background-color: ${
                      categories[0]?.background || background || "#ffffff"
                    };">
                      ${Category({
                        href: getCategory(categories[0].href),
                        name: getField(queries.categories, categories[0].name),
                        src: categories[0].src,
                        cta: getField(queries.templates, "Shop now"),
                        type: "monday",
                        products: categories[0].products.map((item) =>
                          getProductById(item.id, item.src)
                        ),
                      })}
                    </td>
                </tr>

                <tr>
                    <td class="newsletterContainer">
                        ${Line()}
                    </td>
                </tr>

                <tr>
                    <td style="background-color: ${background || "#ffffff"};">
                        ${Space()}
                    </td>
                </tr>

                <tr>
                    <td style="background-color: ${
                      categories[1]?.background || background || "#ffffff"
                    };">
                        ${Category({
                          href: getCategory(categories[1].href),
                          name: getField(
                            queries.categories,
                            categories[1].name
                          ),
                          src: categories[1].src,
                          cta: getField(queries.templates, "Shop now"),
                          type: "monday",
                          products: categories[1].products.map((item) =>
                            getProductById(item.id, item.src)
                          ),
                        })}
                    </td>
                </tr>

                <tr>
                    <td class="newsletterContainer">
                        ${Line()}
                    </td>
                </tr>

                <tr>
                    <td style="background-color: ${background || "#ffffff"};">
                        ${Space()}
                    </td>
                </tr>

                <tr>
                    <td style="background-color: ${
                      categories[2]?.background || background || "#ffffff"
                    };">
                        ${Category({
                          href: getCategory(categories[2].href),
                          name: getField(
                            queries.categories,
                            categories[2].name
                          ),
                          src: categories[2].src,
                          cta: getField(queries.templates, "Shop now"),
                          type: "monday",
                          products: categories[2].products.map((item) =>
                            getProductById(item.id, item.src)
                          ),
                        })}
                    </td>
                </tr>

                <tr>
                    <td class="newsletterContainer">
                        ${Line()}
                    </td>
                </tr>

                
                <tr>
                    <td style="background-color: ${background || "#ffffff"};">
                        ${Space()}
                    </td>
                </tr>

                <tr>
                    <td style="background-color: ${
                      categories[3]?.background || background || "#ffffff"
                    };">
                        ${Category({
                          href: getCategory(categories[3].href),
                          name: getField(
                            queries.categories,
                            categories[3].name
                          ),
                          src: categories[3].src,
                          cta: getField(queries.templates, "Shop now"),
                          type: "monday",
                          products: categories[3].products.map((item) =>
                            getProductById(item.id, item.src)
                          ),
                        })}
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
                              ${Line()}
                            </td>
                          </tr>
                              <tr>
                                  <td align="left" class="newsletterBottom35px">
                                      <span class="newsletterSoonEndingTitle">${getField(
                                        queries.templates,
                                        "Shop limited-time deals"
                                      )}</span>
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
