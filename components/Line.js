






export function Line(img = "https://beliani.info/newsletter/2022/line.jpg", isWithClass = false) {


    return `
    <tr>
        <td ${isWithClass ? `class="newsletterLine"` : ""}>
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td>
                            <img src=${img} style="display:block" width="100%" alt="">
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
    `
}