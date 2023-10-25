export function Product({ product }) {
  product.style = {
    bgColor: "#ffffff",
    ...product.style,
  };

  product.align = product.align ? product.align : "left";

  return `
      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%" height="100%" >
        <tr>
          <td align="center" ${product.className ? `class=${product.className}` : ""} >
          <a href=${product.href}>
            <img src=${product.src} style="display: block; max-width: 100%" >
          </a>
            ${
              product.type === 'image'
              ?
              ''
              :
              `
              <table align=${product.align} cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: ${ product.style.bgColor };">
                <tbody>
                  <tr>
                      <td align=${ product.align }>
                        <span class="newsletterProductTitle" style="line-height: 1">${ product.name }</span>
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
                    <td ${product.align === 'center' ? 'style="padding-bottom: 15px"' : ""} align=${product.align}>
                        <span class="newsletterProductLowPrice" style="line-height: 0.8">${product.lowPrice} </span> 
                        <span class="newsletterProductHightPrice" style="line-height: 0.8">${product.highPrice}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            `
            }
          </td>
        </tr>
      </table>
    `;
}
