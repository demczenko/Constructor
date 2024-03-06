export function FreebieProduct(product, align = "left", style) {
  return `
  <table cellspacing="0" cellpadding="0" style="width: 100%;">
    <tbody>
      <tr>
        <td style="padding-top: 0px; padding-left: 0px; padding-right: 0px;">
          <a href="${product.href}" style="text-decoration: none !important;">
            <table cellspacing="0" cellpadding="0">
              <tr>
                <td>
                  <img src="${product.src}" alt="${product.name}"
                  style="vertical-align: middle;  max-width: 100%">
                <td>
              </tr>
              <tr>
                  <td align="${align}" style="${style ?? ""}">
                    <table cellspacing="0" cellpadding="0" style="width: 100%;">
                      <tbody>
                      <tr>
                        <td class="newsletterBottom20px">
                        </td>
                      </tr>
                        <tr>
                          <td align="${align}" style="padding-top: 0px; padding-left: 0px; padding-right: 0px; padding-bottom: 0px;">
                            <span class="newsletterProductTitleFreebie">${
                              product.name
                            }</span>
                          </td>
                        </tr>
                        ${
                          "size" in product
                          ?
                          `<tr>
                            <td align="${align}" style="padding-top: 0px; padding-left: 0px; padding-right: 0px; padding-bottom: 0px;">
                              <span class="newsletterProductTitleFreebie">${
                                product.size
                              }</span>
                            </td>
                          </tr>`
                          :
                          ""
                        }
                        <tr>
                          <td align="${align}" style="padding-top: 0px; padding-bottom: 8px; padding-left: 0px; padding-right: 0px; color: #000">
                            <span class="newsletterProductLowPrice" >${
                              product.lowPrice
                            } </span>
                            <span class="newsletterProductHightPrice" >${
                              product.highPrice
                            }</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
            </table>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
    `;
}
