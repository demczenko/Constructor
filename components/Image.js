
export const Image = (src) => {
  return `
  <table cellspacing="0" cellpadding="0" style="width: 100%; ">
    <tbody>
        <tr>
            <td>
                <img alt="" src="${src}" style="display: block; width: 100%">
            </td>
        </tr>
    </tbody>
  </table>
  `;
};
