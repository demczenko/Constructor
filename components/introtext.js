









export function IntoText({ shopMinimum, addPromoCode, getCode, offerValid, chooseFrom, type, style = { bgColor: "#ffffff"} }) {


    return `
    <tr>
        <td class="newsletterIntroSection" style="background-color: ${style.bgColor};">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td align="center" class="newsletterIntroSectionItem">
                            <span class="newsletterParagraph">
                                ${shopMinimum}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" class="newsletterIntroSectionItem">
                            <span class="newsletterParagraph">
                                ${addPromoCode}
                            </span>
                        </td>
                    </tr>
                    ${
                        type === "newsletter"
                        ?
                        `
                        <tr>
                            <td align="center" class="newsletterIntroSectionItem">
                                <a class="newsletterCta" href=${getCode.link} style="color: #000000;">
                                    ${getCode.text}
                                </a>
                            </td>
                        </tr>
                        `
                        :
                        `
                        <tr>
                            <td align="center" class="newsletterIntroSectionItem">
                                <span class="newsletterParagraph" style="font-size: 20px;">
                                    ${getCode.text}
                                </span>
                            </td>
                        </tr>
                        `
                    }
                    <tr>
                        <td align="center" class="newsletterIntroSectionItem">
                            <span class="newsletterParagraph">
                                ${offerValid}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <span class="newsletterParagraph">
                                ${chooseFrom}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
    `
}