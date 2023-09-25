import { Product } from "./product.js";




export function Category({ category, products, cta, style = { bgColor: "#ffffff" }, type, country, revert = false }) {

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
            <td align="center" style="background-color: ${style.bgColor}">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tr>
                        <td align="center" class="newsletterContainer" style="background-color: ${style.bgColor}">
                            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                <tr>
                                    <td align="left" class="newsletterBottom35px" >
                                        <span class="newsletterTitle">
                                            ${category.name}
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                <tr>
                                    <td align="center">
                                        <a href=${category.href}>
                                            <img width="100%" src=${category.src} style="display: block;">
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" style="background-color: ${style.bgColor}">
                            <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                <tr>
                                    <td align="center" class="newsletterProductContainer" >
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" height="100%" width="100%">
                                            <tr>
                                                <td align="center" class="newsletterProductContainerLEFT" width="50%">
                                                    ${Product({
                                                        product: {...products[0], style: { bgColor: style.bgColor }},
                                                    })}
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%">
                                                    ${Product({
                                                        product: {...products[1], style: { bgColor: style.bgColor }},
                                                    })}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="newsletterProductContainerLEFT" width="50%">
                                                    ${Product({
                                                        product: {...products[2], style: { bgColor: style.bgColor }},
                                                    })}
                                                </td>
                                                <td align="center" class="newsletterProductContainerRIGHT" width="50%">
                                                    ${Product({
                                                        product: {...products[3], style: { bgColor: style.bgColor }},
                                                    })}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" >
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center" class="newsletterCtaContainer" style="text-align: center;">
                                                    <a href=${category.href} style="color: #000000; text-decoration: underline;" class="newsletterCta">${cta}</a>
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

    if (type === "friday") {
        return `
        <tr>
            <td align="center" style="background-color: ${style.bgColor}">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tr>
                        <td align="center">
                            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                <tr>
                                    <td align="center">
                                        <a href=${category.href}>
                                            <img width="100%" src=${category.src} style="display: block;">
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" class="newsletterContainerLeftRigth" style="background-color: ${style.bgColor}">
                            <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                <tr>
                                    <td align="left" >
                                        <span class="newsletterTitle">
                                            ${category.name}
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" class="newsletterContainer" style="background-color: ${style.bgColor}">
                            <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                <tr>
                                    <td align="left" class="newsletterBottom35px" >
                                        <span class="newsletterParagraph">
                                            ${category.subtitle}
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" style="background-color: ${style.bgColor}">
                            <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                <tr>
                                    <td align="center" style="padding-left: 7px; padding-right: 7px;">
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                ${
                                                    revert
                                                    ?
                                                    `
                                                    <td align="center" width="50%" style="padding-right: 4px">
                                                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                            <tr>
                                                                <td style="padding-bottom: 10px;">
                                                                    ${Product({
                                                                        product: { style: { bgColor: style.bgColor }, ...products[1]},
                                                                    })}
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                            <tr>
                                                                <td>
                                                                    <a href=${products[2].href}>
                                                                        <img width="100%" src=${products[2].src} style="display: block;">
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>  
                                                    </td>
                                                    <td align="center" width="50%" style="padding-left: 4px">
                                                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                            <tr>
                                                                <td style="padding-bottom: 10px">
                                                                    <a href=${products[0].href}>
                                                                        <img width="100%" src=${products[0].src} style="display: block;">
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>  
                                                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                            <tr>
                                                                <td>
                                                                    ${Product({
                                                                        product: { style: { bgColor: style.bgColor }, ...products[3]},
                                                                    })}
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    `
                                                    :
                                                    `
                                                    <td align="center" width="50%" style="padding-right: 4px">
                                                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                            <tr>
                                                                <td style="padding-bottom: 10px">
                                                                    <a href=${products[0].href}>
                                                                        <img width="100%" src=${products[0].src} style="display: block;">
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>  
                                                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                            <tr>
                                                                <td>
                                                                    ${Product({
                                                                        product: { style: { bgColor: style.bgColor }, ...products[3]},
                                                                    })}
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td align="center" width="50%" style="padding-left: 4px">
                                                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                            <tr>
                                                                <td style="padding-bottom: 10px;">
                                                                    ${Product({
                                                                        product: { style: { bgColor: style.bgColor }, ...products[1]},
                                                                    })}
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table cellspacing="0" cellpadding="0" border="0" align="left" width="100%">
                                                            <tr>
                                                                <td>
                                                                    <a href=${products[2].href}>
                                                                        <img width="100%" src=${products[2].src} style="display: block;">
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>  
                                                    </td>
                                                    `
                                                }
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" >
                                        <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                                            <tr>
                                                <td align="center" class="newsletterTop35px" style="text-align: center;">
                                                    <a href=${category.href} style="color: #000000; text-decoration: underline;" class="newsletterCta">
                                                        <span>${cta}</span>
                                                    </a>
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