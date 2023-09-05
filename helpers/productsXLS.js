export async function productsXLS() {
    return fetch("data/products/products.xls")
    .then(r => {
        if (!r.ok) {
            throw new Error("Looks like file products.xlsx not found. Pls check name and try again.");
        }
        return r.blob()
    })
    .then(r => {
        let reader = new FileReader()
        reader.readAsBinaryString(r)
        
        return new Promise((resolve, reject) => {
            reader.addEventListener("load", (ev) => {
              const data = ev.target.result;
              const workbook = XLSX.read(data, {
                  type: "binary",
              });
              for (const key in workbook.SheetNames) {
                  const sheetName = workbook.SheetNames[key];
                  resolve(normalize(XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName])));
              }
            })
        })
    })
    .catch(err => {
        Toastify({
            text: err,
            escapeMarkup: false,
            duration: 3000,
          }).showToast();
    })

}

function normalize(arr) {
    let normalized = []

    for (const item of arr) {
        normalized.push({
            main_id: item["SA#"],
            name: item["SA Name"]
        })
    }

    return normalized
}