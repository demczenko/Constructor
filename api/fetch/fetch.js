import { parseShopId, parseTemplate } from "../../helpers/index.js";
import { productsXLS } from "../../helpers/productsXLS.js";
import { sort } from "../../helpers/sort.js";
import { getState, setState } from "../../main/initApp.js";
import { utils } from "../../utils/index.js";
import { getCategory } from "../category.js";
import { getIds } from "../product.js";
import { getTranslations } from "../translations.js";

export const fetchTranslations = async ({ tableQueries, tableColumns }) => {
  const country = getState("country");

  const data = [];
  for (const query of tableQueries) {
    const queryWithAdjustedRange = utils.adjustTableRangeToCountry(
      query,
      tableColumns[country]
    );
    const result = await getTranslations(
      queryWithAdjustedRange,
      getState("token")
    );

    if (result.error) {
      return {
        data: result,
        name: query.name,
      };
    } else {
      if (result.values.length > 0) {
        data.push({
          data: utils.normalizeTranslations(result),
          name: query.name,
        });
      } else {
        throw new Error(`Probably translation cell is empty for ${country}. Try to render another country or use local text instead.`);
      }
    }
  }

  return {
    data,
  };
};

export const setProductandFixOrdering = async (productsOrder) => {
  let productsXls = await productsXLS();
  productsXls = sort(productsXls, productsOrder);
  setState("XLSProducts", productsXls);
};

export const fetchProductsShopIds = async () => {
  const XLSProducts = getState("XLSProducts");

  const shopsIDs = await getIds(XLSProducts);
  const parsedShopIds = parseShopId(XLSProducts, shopsIDs);
  return parsedShopIds;
};

export const fetchCategories = async ({ categories }) => {
  const country = getState("country");
  const parsedCategories = [];
  for (const category of categories) {
    const result = await getCategory(category.category, country);
    if (result.status === "success") {
      const { data } = result;
      parsedCategories.push({
        ...category,
        href: data.origin + data.category,
      });
    }
  }
  return parsedCategories;
};

export const parseLinks = ({ newsletterLinks, landingLinks }) => {
  const country = getState("country");
  const template = getState("template");

  const links = template === "newsletter" ? newsletterLinks : landingLinks;
  return parseTemplate(links, country);
};
