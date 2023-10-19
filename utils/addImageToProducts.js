const addImageToProducts = (products, orders) => {
  const newProducts = [];
  for (const product of products) {
    for (const order of orders) {
      if (product.main_id === order.id) {
        newProducts.push({
          ...product,
          src: order.src,
        });
      }
    }
  }

  return newProducts;
};

export default addImageToProducts;
