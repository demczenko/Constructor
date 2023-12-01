import { parseShopId } from "../../helpers/index.js";
import { getState } from "../../main/initApp.js";
import { utils } from "../../utils/index.js";
import { getCategory } from "../category.js";
import { getIds } from "../product.js";
import { getTranslations } from "../translations.js";

export const fetchTranslations = async ({ tableQueries, tableColumns }) => {
  const country = getState("country");

  const promises = [];
  for (const query of tableQueries) {
    const queryWithAdjustedRange = utils.adjustTableRangeToCountry(
      query,
      tableColumns[country]
    );
    promises.push(queryWithAdjustedRange);
  }


  const promisesResult = await Promise.allSettled(
    promises.map((queryWithAdjustedRange) =>
      getTranslations(queryWithAdjustedRange, getState("token"))
    )
  );


  const computedPromise = [];
  for (const { value } of promisesResult) {

    if (value.error) {
      computedPromise.push({
        data: value.error.message,
        name: value.name,
      });
      continue
    }
    if ("values" in value && value.values.length > 0) {
      computedPromise.push({
        data: utils.normalizeTranslations(value.values),
        name: value.name,
      });
    } else {
      throw new Error(
        `Probably translation cell is empty for ${country}. Try to render another country or use local text instead.`
      );
    }
  }

  return computedPromise;
};

export const fetchProductsShopIds = async () => {
  const XLSProducts = getState("products_main_id");

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
  const template = getState("template");

  return template === "newsletter" ? newsletterLinks : landingLinks;
};
