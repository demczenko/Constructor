import { Matrix } from "./matrix.js";
import { Product } from "./product.js";

export function Freebies({
  products,
  style = { bgColor: "#ffffff" },
  size = { row: 2, col: 2 },
  className,
}) {

  style = {
    bgColor: "#ffffff",
    ...style,
  };

  size = {
    row: 2,
    col: 2,
    ...size,
  };

  return `
    <tr>
        <td ${className? `class="${className}"` : ''} style="background-color: ${style.bgColor}">
        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
        ${Matrix({
          col: size.col,
          row: size.row,
          html: products.map((product) =>
            Product({
              product: {
                ...product,
                style: {
                  bgColor: style.bgColor,
                  ...product.style,
                },
              },
            })
          ),
        })}
            </table>
        </td>
    </tr>
    `;
}

{
  /* <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
            <tbody>
                <tr>
                    <td>
                      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                        <tr>
                          <td class="newsletterFreebieTopLeft" style="vertical-align: top;">
                            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                <tbody>
                                    <tr>
                                        <td align="center">
                                            <a
                                                href="${products[0].href}">
                                                <img src="https://beliani.info/newsletter/2022/231016Freebie1.jpg"
                                                    style="display: block; max-width: 100%">
                                            </a>
                                            <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%"
                                                style="background-color: #fcf6f5;">
                                                <tbody>
                                                    <tr>
                                                        <td align="center" class="newsletterProductTitleContainer">
                                                            <span class="newsletterProductTitle">FILPUS</span>
                                                        </td>
                                                    </tr>
            
                                                    <tr>
                                                        <td align="center">
                                                        <span class="newsletterProductLowPrice">${products[0].lowPrice} </span>
                                                        <span class="newsletterProductHightPrice">${products[0].highPrice}</span>
                                                        </td>
                                                      </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td class="newsletterFreebieTopRight" style="vertical-align: top;">
                            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                <tbody>
                                    <tr>
                                        <td align="center">
                                            <a
                                                href="${products[1].href}">
                                                <img src="https://beliani.info/newsletter/2022/231016Freebie2.jpg"
                                                    style="display: block; max-width: 100%">
                                            </a>
                                            <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%"
                                                style="background-color: #fcf6f5;">
                                                <tbody>
                                                    <tr>
                                                        <td align="center" class="newsletterProductTitleContainer">
                                                            <span class="newsletterProductTitle">FILPUS</span>
                                                        </td>
                                                    </tr>
            
                                                    <tr>
                                                        <td align="center">
                                                        <span class="newsletterProductLowPrice">${products[1].lowPrice} </span>
                                                        <span class="newsletterProductHightPrice">${products[1].highPrice}</span>
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
                    </td>
                </tr>
                <tr>
                    <td>
                      <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                        <tr>
                          <td style="vertical-align: top;">
                            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                <tbody>
                                    <tr>
                                        <td align="center">
                                            <a
                                                href="${products[2].href}">
                                                <img src="https://beliani.info/newsletter/2022/231016Freebie3.jpg"
                                                    style="display: block; max-width: 100%">
                                            </a>
                                            <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%"
                                                style="background-color: #fcf6f5;">
                                                <tbody>
                                                    <tr>
                                                        <td align="center" class="newsletterProductTitleContainer">
                                                            <span class="newsletterProductTitle">TIEVA</span>
                                                        </td>
                                                    </tr>
            
                                                    <tr>
                                                        <td align="center">
                                                        <span class="newsletterProductLowPrice">${products[2].lowPrice} </span>
                                                        <span class="newsletterProductHightPrice">${products[2].highPrice}</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td style="vertical-align: top;">
                            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                <tbody>
                                    <tr>
                                        <td align="center">
                                            <a
                                                href="${products[3].href}">
                                                <img src="https://beliani.info/newsletter/2022/231016Freebie4.jpg"
                                                    style="display: block; max-width: 100%">
                                            </a>
                                            <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%"
                                                style="background-color: #fcf6f5;">
                                                <tbody>
                                                    <tr>
                                                        <td align="center" class="newsletterProductTitleContainer">
                                                            <span class="newsletterProductTitle">NURMES</span>
                                                        </td>
                                                    </tr>
            
                                                    <tr>
                                                        <td align="center">
                                                        <span class="newsletterProductLowPrice">${products[3].lowPrice} </span>
                                                        <span class="newsletterProductHightPrice">${products[3].highPrice}</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td style="vertical-align: top;">
                            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                <tbody>
                                    <tr>
                                        <td align="center">
                                            <a
                                                href="${products[4].href}">
                                                <img src="https://beliani.info/newsletter/2022/231016Freebie5.jpg"
                                                    style="display: block; max-width: 100%">
                                            </a>
                                            <table align="center" cellspacing="0" cellpadding="0" border="0" width="100%"
                                                style="background-color: #fcf6f5;">
                                                <tbody>
                                                    <tr>
                                                        <td align="center" class="newsletterProductTitleContainer">
                                                            <span class="newsletterProductTitle">JURMU</span>
                                                        </td>
                                                    </tr>
            
                                                    <tr>
                                                        <td align="center">
                                                            <span class="newsletterProductLowPrice">${products[4].lowPrice} </span>
                                                            <span class="newsletterProductHightPrice">${products[4].highPrice}</span>
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
                    </td>
                </tr>
            </tbody>
</table> */
}
