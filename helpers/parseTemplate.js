import origins from "../data/templates/origins.js";
import countries from "../data/templates/countries.js";

let links = []

export function parseTemplate(template, country) {

  const functions = {
    addOrigin: (data) => {
      return origins[country] + data;
    },
    addContentOrigin: (data) => {
      return origins[country] + "content/" + data;
    },
    addServer: (data) => {
      return "https://beliani.info/newsletter/2022/" + countries[country] + data
    },
  };

  for (const key in template) {
    let partOfTemplate = template[key];

    for (const j in partOfTemplate) {
      if (j in functions && partOfTemplate[j] === true) {
        links[key] = functions[j](partOfTemplate.value);
      } else {
        links[key] = partOfTemplate.value;
      }
    }
  }

  return links
}