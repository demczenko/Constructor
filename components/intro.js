export function Intro({
  title,
  paragraph,
  style = { bgColor: "#ffffff" },
  align = "left",
}) {
  style = {
    bgColor: "#ffffff",
    ...style,
  };

  return `
    <tr>
        <td style="background-color: ${
          style.bgColor
        }" align="${align}" class="newsletterContainer">
        ${
          title
            ? `
            <table cellspacing="0" cellpadding="0" border="0" align="${align}" width="100%">
                <tr>
                    <td align="${align}" class="newsletterBottom35px" >
                        <span class="newsletterTitle">${title}</span>
                    </td>
                </tr>
            </table>
            `
            : ""
        }
            ${
                paragraph
                ? `
                <table cellspacing="0" cellpadding="0" border="0" align="${align}" width="100%">
                <tr>
                    <td align="${align}" class="newsletterBottom35px" >
                        <span class="newsletterParagraph">${paragraph}</span>
                    </td>
                </tr>
            </table>
                `
                : ""
            }
        </td>
    </tr>
    `;
}
