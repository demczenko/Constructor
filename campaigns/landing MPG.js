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

export async function landing_MPG({
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
}) {
  const categories = [
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_04.jpg",
      },
      href: getCategory(
        "https://www.beliani.ch/garden-furniture/outdoor-furniture/lounge-sets/"
      ),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_05.jpg",
      },
      href: getCategory(
        "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/"
      ),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_06.jpg",
      },
      href: getCategory(
        "https://www.beliani.ch/outdoor-furniture/sun-loungers/"
      ),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_07.jpg",
      },
      href: getCategory(
        "https://www.beliani.ch/outdoor-furniture/storage-boxes/"
      ),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_08.jpg",
      },
      href: getCategory(
        "https://www.beliani.ch/outdoor-furniture/balcony-furniture/"
      ),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_09.jpg",
      },
      href: getCategory(
        "https://www.beliani.ch/garden-furniture/garden-accessories/pots-and-planters/"
      ),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_10.jpg",
      },
      href: getCategory(
        "https://www.beliani.ch/garden-furniture/garden-accessories/fire-pits/"
      ),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_11.jpg",
      },
      href: getCategory("https://www.beliani.ch/garden-furniture/parasols/"),
    },
    {
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "45",
        value: "https://upload.pictureserver.net/static/2024/20240520_12.jpg",
      },
      href: getCategory(
        "https://www.beliani.ch/garden-furniture/outdoor-textiles/"
      ),
    },
  ];

  return `
  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 650px; width: 100%; background-color: #ff2f00; color: #000;" id="newsletter">
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
                <td style="background-color: #ff2f00; ">
                  ${Space()}
                </td>
              </tr>

              <tr>
                <td class="newsletterContainer"style="background-color: #ff2f00; ">
                  <table cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tbody>
                          <tr>
                              <td align="center">
                                  <span class="newsletterTitleNew" style="color: #ffffff;">
                                      ${queries.intro}
                                  </span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="background-color: #ff2f00;">
                  ${Space("newsletterBottom80px")}
                </td>
              </tr>

              <tr>
                <td style="background-color: #ff2f00;">
                  <table cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tbody>
                          ${categories
                            .map((item) => {
                              const computed = computeValue(item);
                              return `
                            <tr>
                                <td align="center">
                                  <a href="${computed.href}">
                                    <img alt="" src="${computed.src}" style="vertical-align: middle; max-width: 100%;" loading="lazy">
                                  </a>
                                </td>
                            </tr>
                            `;
                            })
                            .join("")}
                      </tbody>
                  </table>
                </td>
              </tr>

              <tr>
              <td align="center" style="background-color: #ffccb7;" class="newsletterContainer">
                  <iframe id="newsletterIFrame" class="newsletterIFrame" src="https://www.youtube.com/embed/${path}?enablejsapi=1&amp;mute=1&amp;playlist=${path}&amp;loop=1" width="610" height="400" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
              </td>
            </tr>

            <tr>
              <td class="newsletterBottom35px" >
              </td>
            </tr>

            <tr>
              <td align="center">
                <a href="${getField(
                  queries.youtubeHref,
                  "Href"
                )}" style="color:#000; text-decoration: underline;">
                  <span class="newsletterCta">${queries.watchNow}</span>
                </a>
              </td>
            </tr>
            <tr>
              <td class="newsletterBottom80px" >
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
