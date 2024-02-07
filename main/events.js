import { copyNewsletterWithHeaderAndStyles } from "../helpers/copyNewsletter.js";
import { getCss } from "../helpers/getCss.js";
import { setState } from "./initApp.js";

function copyHandlerTemplate(e, copyTemplate, html, state) {
  if (state.template === "newsletter") {
    Promise.resolve()
      .then(() => getCss(state.template))
      .then((css) => {
        navigator.clipboard.writeText(
          copyNewsletterWithHeaderAndStyles(html, css)
        );
        copyTemplate.textContent = "Copied to clipboard";
        let id = setTimeout(() => {
          copyTemplate.textContent = "Copy template";
          clearInterval(id);
        }, 2000);
      });
  }

  if (state.template === "landing") {
    Promise.resolve()
      .then(() => getCss(state.template))
      .then((css) => {
        navigator.clipboard.writeText(
          `
            <style>
                ${css}
            </style>` + html
        );
        copyTemplate.textContent = "Copied to clipboard";
        let id = setTimeout(() => {
          copyTemplate.textContent = "Copy template";
          clearInterval(id);
        }, 2000);
      });
  }
}

function clickRenderBtnHandler(template, render) {
  if (template === "landing") {
    render();
    return setState("template", "newsletter");
  }

  if (template === "newsletter") {
    render();
    return setState("template", "landing");
  }
}

function openCampaignHandler(id) {
  window.open("https://www.prologistics.info/news_email.php?id=" + id, "blank");
}

export {
  copyHandlerTemplate,
  clickRenderBtnHandler,
  openCampaignHandler,
};
