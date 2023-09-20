export function Product({ product }) {
  product.style = {
    bgColor: "#ffffff",
    paddingLeft: "0px",
    paddingRight: "0px",
    paddingTop: "0px",
    paddingBottom: "0px",
    ...product.style,
  };

  product.align = product.align ? product.align : "left";
  product.type = product.type ? product.type : "priceBottom";

  return `
      <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%" style="background-color: ${product.style.bgColor}">
        <tr>
          <td align="center" ${product.className ? `class=${product.className}` : ""} style="width: 100%; padding-left: ${product.style.paddingLeft}; padding-right: ${product.style.paddingRight}; padding-top: ${ product.style.paddingTop }; padding-bottom: ${product.style.paddingBottom};">
            <a href=${product?.href}>
                <img src=${product?.src} style="display: block; max-width: 100%">
            </a>
            ${
              product.type === "priceBottom"
              ?
              `
                <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: ${ product.style.bgColor };">
                  <tbody>
                    <tr>
                        <td align=${ product.align } class="newsletterProductTitleContainer">
                          <span class="newsletterProductTitle">${ product.name }</span>
                        </td>
                    </tr>
                    ${
                      product.size
                        ? `
                        <tr>
                            <td align=${product.align}>
                              <span class="newsletterProductTitle">${product.size}</span>
                            </td>
                        </tr>
                      `
                        : ""
                    }
                    <tr>
                      <td align=${
                        product.align
                      } style="padding-bottom: 10px;">
                          <span class="newsletterProductLowPrice">${
                            product.lowPrice
                          } </span> 
                          <span class="newsletterProductHightPrice">${
                            product.highPrice
                          }</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              `
              : ""
            }
          </td>
          <td align="left" style="width: 60px; padding-left: 5px; background-color: ${product.style.bgColor };">
            ${
              product.type === "priceRight" ?
              `
                <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: ${product.style.bgColor};">
                  <tbody>
                    <tr>
                        <td align=${product.align}>
                          <span class="newsletterProductTitle">${product.name}</span>
                        </td>
                    </tr>
                    ${
                      product.size
                        ? `
                        <tr>
                            <td align=${product.align}>
                              <span class="newsletterProductTitle">${product.size}</span>
                            </td>
                        </tr>
                      `
                        : ""
                    }
                    <tr>
                      <td align=${ product.align }>
                          <span class="newsletterProductLowPrice">${ product.lowPrice }</span> 
                          <br />
                          <span class="newsletterProductHightPrice">${ product.highPrice }</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
            `
            : ""
            }
          </td>
        </tr>
      </table>
    `;
}
