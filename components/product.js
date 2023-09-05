










export function Product({ product }) {
    product.style = {
      bgColor: "#ffffff",
      paddingLeft: "0px",
      paddingRight: "0px",
      paddingTop: "0px",
      paddingBottom: "0px",
      ...product.style,
    }

    product.align = product.align ? product.align : "left"

    return `
      <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
        <tr>
          <td ${product.className ? `class=${product.className}` : ""} style="padding-left: ${product.style.paddingLeft}; padding-right: ${product.style.paddingRight}; padding-bottom: ${product.style.paddingBottom}; padding-top: ${product.style.paddingTop};">
            <a href=${product?.href}>
                <img width="100%" src=${product?.src} style="display: block;">
            </a>
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: ${product.style.bgColor};">
                      <tbody>
                        <tr>
                            <td align=${product?.align} class="newsletterProductTitleContainer">
                              <span class="newsletterProductTitle">${product?.name}</span>
                            </td>
                        </tr>
                        ${
                          product?.size
                          ?
                          `
                            <tr>
                                <td align=${product.align}>
                                  <span class="newsletterProductTitle">${product.size}</span>
                                </td>
                            </tr>
                          `
                          :
                          ""
                        }
                        <tr>
                          <td align=${product?.align} style="padding-bottom: 10px;">
                              <span class="newsletterProductLowPrice">${product?.lowPrice} </span> 
                              <span class="newsletterProductHightPrice">${product?.highPrice}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
    `;
}
