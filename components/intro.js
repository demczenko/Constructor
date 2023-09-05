







export function Intro({ title = "Your text", paragraph = "Your text", style = {bgColor: "#ffffff"} }) {



    return `
    <tr>
        <td style="background-color: ${style.bgColor}" align="center" class="newsletterContainer">
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td align="left" class="newsletterBottom35px" >
                        <span class="newsletterTitle">${title}</span>
                    </td>
                </tr>
            </table>
            <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                <tr>
                    <td align="left" class="newsletterBottom35px" >
                        <span class="newsletterParagraph">${paragraph}</span>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    `
}