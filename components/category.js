import { Product } from "./product.js";




export function Category({ name, href, src, products, paragraph, align = "center", cta ="CTA", style = { bgColor: "#ffffff" }, type = "monday", country, revert = false }) {

    style = {
        bgColor: "#ffffff",
        ...style
    }

    if (!type) {
        return "Please specify type for category. Monday, Wednesday"
    }

    if (type === "monday") {
        return `
        <tr>
            <td align="${align}" style="background-color: ${style.bgColor}">
                <table cellspacing="0" cellpadding="0" border="0" align="${align}" width="100%">
                    <tr>
                        <td align="left" class="newsletterContainer" style="background-color: ${style.bgColor}">
                            <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                <tr>
                                    <td align="left" class="newsletterBottom35px" >
                                        <span class="newsletterTitle">
                                            ${name}
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="${align}">
                            <table cellspacing="0" cellpadding="0" border="0" align="${align}" width="100%">
                                <tr>
                                    <td align="${align}">
                                        <a href=${href}>
                                            <img loading="lazy" width="100%" src=${src()} style="display: block;">
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    ${
                        paragraph
                        ?
                        `
                        <tr>
                            <td align="left" class="newsletterContainer" style="background-color: ${style.bgColor}">
                                <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                    <tr>
                                        <td align="left" class="newsletterBottom35px" >
                                            <span class="newsletterParagraph">
                                                ${paragraph}
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        `
                        :
                        ''
                    }
                    <tr>
                        <td align="${align}" style="background-color: ${style.bgColor}">
                            <table cellspacing="0" cellpadding="0" border="0" align="${align}" width="100%">
                                <tr>
                                    <td align="${align}" class="newsletterProductContainer" >
                                        <table cellspacing="0" cellpadding="0" border="0" align="${align}" width="100%">
                                            <tr>
                                                <td align="${align}" class="newsletterProductContainerLEFT" width="50%">
                                                    ${Product({
                                                        product: {...products[0], style: { bgColor: style.bgColor }},
                                                    })}
                                                </td>
                                                <td align="${align}" class="newsletterProductContainerRIGHT" width="50%">
                                                    ${Product({
                                                        product: {...products[1], style: { bgColor: style.bgColor }},
                                                    })}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="${align}" class="newsletterProductContainerLEFT" width="50%">
                                                    ${Product({
                                                        product: {...products[2], style: { bgColor: style.bgColor }},
                                                    })}
                                                </td>
                                                <td align="${align}" class="newsletterProductContainerRIGHT" width="50%">
                                                    ${Product({
                                                        product: {...products[3], style: { bgColor: style.bgColor }},
                                                    })}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="${align}" >
                                        <table cellspacing="0" cellpadding="0" border="0" align="${align}" width="100%">
                                            <tr>
                                                <td align="${align}" class="newsletterCtaContainer" style="text-align: center;">
                                                    <a href=${href} style="color: #000000; text-decoration: underline;" class="newsletterCta">${cta}</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        `
    }

}