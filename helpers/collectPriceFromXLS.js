function parseExcel(file) {
  var reader = new FileReader();

  function read() {
    reader.readAsBinaryString(file);

    return new Promise((resolve, reject) => {
      reader.addEventListener("load", (ev) => {
        const data = ev.target.result;
        const workbook = XLSX.read(data, {
          type: "binary",
        });

        for (const key in workbook.SheetNames) {
          const sheetName = workbook.SheetNames[key];
          resolve(
            XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName])
          );
        }
      });
    });
  }

  return read();
}

function sort(data, productsOrdering) {

  const products = [];
  for (const key in productsOrdering) {
    const productName = productsOrdering[key].name
    const productImage = productsOrdering[key].src

    data.forEach((dataItem) => {
      const lowPrice = dataItem["Newsletter_Price_Low"]
      const highPrice = dataItem["Newsletter_Price_High"]
      const href = dataItem["Shop URL"]
      
      if (productName.includes("II") ? href.includes(productName.split(" ")[0].toLowerCase()) : href.includes(productName.toLowerCase())) {
        products.push({
          name: productName,
          lowPrice: lowPrice,
          highPrice: highPrice,
          href: href,
          src: productImage
        });
      }
    });
  }

  return products;
}

export async function getProductsFromXLS(country, productsOrdering, xlsPath) {

  return await fetch(xlsPath + `${country.toLowerCase()}.xls`)
        .then((data) => {
          if (data.ok) {
            return data.blob()
          }
          throw new Error("File with name: " + country + ".xls not found")
        })
        .then((r) => parseExcel(r))
        .then((r) => sort(r, productsOrdering))
        .catch(err => {
          Toastify({
            text: err,
            escapeMarkup: false,
            duration: 3000
          }).showToast();
        })
}
