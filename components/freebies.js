import { Matrix } from "./matrix.js";
import { Product } from "./product.js";

export function Freebies({
  products,
  style = { bgColor: "#ffffff" },
  size = { row: 2, col: 2 },
  className,
}) {
  className = className ? className : "newsletterFreebies";

  style = {
    bgColor: "#ffffff",
    ...style,
  };

  size = {
    row: 2,
    col: 2,
    ...size,
  };
  console.log(style);

  return `
    <tr>
        <td class=${className} style="background-color: ${style.bgColor}">
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
