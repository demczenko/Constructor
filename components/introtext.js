
export function IntroText({
  offerPart1,
  offerPart2,
  getCode = {
    link,
    text
  },
  offerValid,
  chooseFrom,
  type,
  style = { bgColor: "", textColor: "" },
}) {

    style = {
        bgColor: "#ffffff",
        textColor: "#000000",
        ...style
    }
    
  return `
    <tr>
        <td class="newsletterIntroSection" style="background-color: ${style.bgColor};">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td align="center" class="newsletterIntroSectionItem">
                            <span class="newsletterParagraph" style="color: ${style.textColor};">
                                ${offerPart1}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" class="newsletterIntroSectionItem">
                            <span class="newsletterParagraph" style="color: ${style.textColor};">
                                ${offerPart2}
                            </span>
                        </td>
                    </tr>
                    ${
                      type === "newsletter"
                        ? `
                        <tr>
                            <td align="center" class="newsletterIntroSectionItem" style="background-color: ${style.bgColor};">
                                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td align="center" style="background-color: ${style.bgColor}; ">
                                                <a class="newsletterCta" href=${getCode.link} style="color: ${style.textColor};">
                                                    ${getCode.text}
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
                        ?
                        `
                        <tr>
                            <td align="center" class="newsletterIntroSectionItem">
                                <span class="newsletterParagraph" style="color: ${style.textColor};">
                                    ${offerValid}
                                </span>
                            </td>
                        </tr>
                        `
                        :
                        ""
                    }
                    ${
                        chooseFrom
                        ?
                        `
                        <tr>
                            <td align="center">
                                <span class="newsletterParagraph">
                                    ${chooseFrom}
                                </span>
                            </td>
                        </tr>
                        `
                        :
                        ""
                    }
                </tbody>
            </table>
        </td>
    </tr>
    `;
}
