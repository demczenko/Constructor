export function FreebieProduct(product, align = "left", style) {

  return `
  <table cellspacing="0" cellpadding="0" style="width: 100%; ${style ?? ""}">
    <tbody>
      <tr>
        <td style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px;">
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td align="${align}" class="newsletterBottom20px" style="padding-top: 0px; padding-left: 0px; padding-right: 0px;">
                  <a href="${product.href}">
                    <img src="${product.src}" alt="${product.name}"
                      style="display: block; max-width: 100%">
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <table cellspacing="0" cellpadding="0" style="width: 100%; ">
            <tbody>
              <tr>
                <td align="${align}" style="padding-top: 0px; padding-left: 0px; padding-right: 0px; padding-bottom: 0px;">
                  <span class="newsletterProductTitleFreebie">${product.name}</span>
                </td>
              </tr>
              <tr>
                <td align="${align}" style="padding-top: 0px; padding-bottom: 8px; padding-left: 0px; padding-right: 0px;">
                  <span class="newsletterProductLowPrice">${product.lowPrice} </span>
                  <span class="newsletterProductHightPrice">${product.highPrice}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
    `;
}
