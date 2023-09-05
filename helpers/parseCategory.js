import categories from "../data/templates/categories.js";
import origins from "../data/templates/origins.js";

export function parseCategory(category, country) {
  // split category "/garden-furniture/outdoor-furniture/balcony-furniture/" by "/" to array
  let collectedCategory = origins[country];
  const categoriesArr = category.category.split("/");

  // iterate over each category
  categoriesArr.forEach((element) => {
    // check if the category is available in the categories
    if (element in categories) {
      collectedCategory += categories[element][country] + "/";
    }
  });

  category = {
    ...category,
    href: collectedCategory,
  };

  return category;
}


