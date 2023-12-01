export function GetCode({ type, style = {}, code, link } ) {
  return `
  ${
    type === "newsletter"
      ? `
        <tr>
            <td align="center" class="newsletterBlackWeekCode" ${
              "container" in style ? 'style="${style?.container}"' : ""
            }>
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="center">
                                <a href=${link} style="text-decoration:underline!important; color: #000">
                                    <span class="newsletterTitle">${code}</span>
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
                <span class="newsletterParagraph" style="font-size: 20px; text-decoration:underline!important; color: #000">
                    <a href=${link} style="text-decoration:underline!important; color: #000">
                        ${code}
                    </a>
                </span>
            </td>
        </tr>
        `
  }
  `;
}
