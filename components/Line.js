






export function Line(img = "https://beliani.info/newsletter/2022/line.jpg", insideContainer = true) {

    return `
    <tr>
        <td ${insideContainer ? `class="newsletterContainer"` : ""}>
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td class="newsletterBottom35px">
                            <img src=${img} style="display:block" width="100%" alt="">
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
    `
}