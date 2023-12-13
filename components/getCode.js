export function GetCode({ type, style = {}, code, link }) {
  return `
  ${
    type === "newsletter"
      ? `
      <tr>
        <td align="center" class="newsletterIntroSectionItem">
            <a href=${link} style="text-decoration:underline!important; color: #000">
                <span class="newsletterParagraph" style="font-size: 20px;  color: #000">
                ${code}
                </span>
            </a>
        </td>
    </tr>
        `
      : `
        <tr>
            <td align="center" class="newsletterIntroSectionItem">
                <span class="newsletterParagraph" style="font-size: 20px; color: #000">
                    ${code}
                </span>
            </td>
        </tr>
        `
  }
  `;
}
