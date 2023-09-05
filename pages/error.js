





export function errorPage(message = "Something went wrong") {
    return `
        <div class="error">
            <h3>${message}</h3>
        </div>
    `
}