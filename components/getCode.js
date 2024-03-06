export function GetCode({ type, code, link }) {
  return `
  ${
    type === "newsletter"
      ? `

        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
              <tr>
                  <td align="center">
                  <a href=${link} style="text-decoration:underline!important; color: #fff">
                      <span class="newsletterParagraph" style="font-size: 20px;  color: #fff">
                      ${code}
                      </span>
                  </a>
                  </td>
              </tr>
          </tbody>
        </table>

        `
      : `
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
          <tbody>
            <tr>
                <td align="center">
                    <span class="newsletterParagraph" style="font-size: 20px; color: #fff">
                        ${code}
                    </span>
                </td>
            </tr>
          </tbody>
        </table>
        `
  }
  `;
}
