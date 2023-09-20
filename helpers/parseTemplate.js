import origins from "../data/templates/origins.js";
import countries from "../data/templates/countries.js";

let links = []

export function parseTemplate(template, country) {

  const functions = {
    addOrigin: ({value}) => {
      return origins[country] + value;
    },
    addContentOrigin: ({value}) => {
      return origins[country] + "content/" + value;
    },
    addServer: ({value, server = "https://beliani.info/newsletter/2022/"}) => {
      return server + countries[country] + value
    },
  };

  for (const key in template) {
    let partOfTemplate = template[key];

    for (const j in partOfTemplate) {
      if (j in functions && partOfTemplate[j] === true) {
        links[key] = functions[j](partOfTemplate);
      } else {
        links[key] = partOfTemplate.value;
      }
    }
  }

  return links
}