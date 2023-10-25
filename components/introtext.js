export function IntroText({
  offerParts,
  getCode = {
    link,
    text,
  },
  offerValid,
  chooseFrom,
  type,
  style = { bgColor: "#ffffff", textColor: "#000000" },
}) {
  style = {
    bgColor: "#ffffff",
    textColor: "#000000",
    ...style,
  };


    return `
    <tr>
        <td class="newsletterIntroSection" style="background-color: ${
          style.bgColor
        };">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td align="center">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                    ${offerParts.map((item, i) => {
                                      return `
                                            <tr>
                                                <td align="center">
                                                    <span class="newsletterTitleBlackWeek" style="color: ${
                                                      style.textColor
                                                    };">
                                                        ${item.title}
                                                    </span>
                                                </td>
                                            </tr>
                                            ${
                                              "paragraph" in item
                                                ? `
                                                <tr>
                                                    <td align="center" ${(offerParts.length - 1) !== i ? 'class="newsletterIntroSectionItem"' : ''} >
                                                        <span class="newsletterParagraph" style="color: ${style.textColor}; line-height: 1.75">
                                                            ${item.paragraph}
                                                        </span>
                                                    </td>
                                                </tr>
                                                `
                                                : ""
                                            }
                                            `;
                                    }).join('')}
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    ${
                      type === "newsletter"
                        ? `
                        <tr>
                            <td align="center" class="newsletterBlackWeekCode" style="background-color: ${style.bgColor};">
                                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td align="center" style="background-color: ${style.bgColor}; ">
                                                <a href=${getCode.link} style="color: ${style.textColor}; text-decoration:underline!important;">
                                                    <span class="newsletterTitle">${getCode.text}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        `
                        : `
                        <tr>
                            <td align="center" class="newsletterIntroSectionItem">
                                <span class="newsletterParagraph" style="font-size: 20px; color: ${style.textColor};">
                                    ${getCode.text}
                                </span>
                            </td>
                        </tr>
                        `
                    }
                    ${
                      offerValid
                        ? `
                        <tr>
                            <td align="center" class="newsletterBottom30px">
                                <span class="newsletterParagraph" style="color: ${style.textColor};">
                                    ${offerValid}
                                </span>
                            </td>
                        </tr>
                        `
                        : ""
                    }
                    ${
                      chooseFrom
                        ? `
                        <tr>
                            <td align="center">
                                <span class="newsletterParagraph">
                                    ${chooseFrom}
                                </span>
                            </td>
                        </tr>
                        `
                        : ""
                    }
                </tbody>
            </table>
        </td>
    </tr>
    `;
}
