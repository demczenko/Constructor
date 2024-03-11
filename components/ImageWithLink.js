export const ImageWithLink = (link, src) => {
  return `
  <table cellspacing="0" cellpadding="0" style="max-width: 650px; width: 100%;">
        <tbody>
            <tr>
                <td>
                    <a href="${link}">
                        <img alt="" src="${src}" style="display: block; width: 100%;" loading="lazy">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
  `;
};
