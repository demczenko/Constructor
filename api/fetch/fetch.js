import { parseShopId } from "../../helpers/index.js";
import { getState } from "../../main/initApp.js";
import { utils } from "../../utils/index.js";
import { getCategory } from "../category.js";
import { getIds } from "../product.js";
import { getTranslations } from "../translations.js";

export const fetchTranslations = async ({ tableQueries, tableColumns }) => {
  const country = getState("country");
  const token = localStorage.getItem("token")
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
      getTranslations(queryWithAdjustedRange, token)
    )
  );

  const computedPromise = [];
  for (const { value } of promisesResult) {
    if (value.error && value.error.code === 400) {
      throw new Error(value.error.message)
    }
    if (value.error && value.error.code === 401) {
      throw new Error("Please, update token.")
    }
    if (value.error && value.error.code === 429) {
      throw new Error("Too many request. Please, try again later.")
    }
    if (value.error && value.error.code === 503) {
      throw new Error("Service currently unavailable")
    }
    if ("values" in value && value.values.length > 0) {
      computedPromise.push({
        data:
          value.majorDimension === "COLUMNS"
            ? value.values
            : utils.normalizeTranslations(value.values),
        name: value.name,
      });
    } else {
      computedPromise.push({
        data: undefined,
        name: value.name,
      });
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