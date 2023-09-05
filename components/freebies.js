import { Matrix } from "./matrix.js";
import { Product } from "./product.js";


export function Freebies({ products, style = { bgColor: "#ffffff"}, size, className }) {

    className = className ? className : "newsletterFreebies"

    style = {
        bgColor: "#ffffff",
        paddingLeft: "0px",
        paddingRight: "0px",
        ...style,
    }

    size = {
        row: 2,
        col: 2,
        ...size,
    }

    return `
    <tr>
        <td class=${className} style="background-color: ${style.bgColor}">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                ${
                    Matrix({
                        col: size.col,
                        row: size.row,
                        html: products.map(product => Product({
                            product: {
                                ...product,
                                style: {
                                    ...product.style,
                                }
                            }
                        }))
                    })
                }
            </table>
        </td>
    </tr>
    `;
}
