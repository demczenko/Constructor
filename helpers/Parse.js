export function getFormula(products) {
    return `
      const links = {}
      const parsedShopIds = []
      let products = []
  
      const origins = {
          CHDE: "https://www.beliani.ch/",
          CHFR: "https://www.beliani.ch/",
          UK: "https://www.beliani.co.uk/",
          DE: "https://www.beliani.de/",
          FR: "https://www.beliani.fr/",
          AT: "https://www.beliani.at/",
          ES: "https://www.beliani.es/",
          PL: "https://www.beliani.pl/",
          NL: "https://www.beliani.nl/",
          PT: "https://www.beliani.pt/",
          IT: "https://www.beliani.it/",
          SE: "https://www.beliani.se/",
          HU: "https://www.beliani.hu/",
          DK: "https://www.beliani.dk/",
          CZ: "https://www.beliani.cz/",
          FI: "https://www.beliani.fi/",
          NO: "https://www.beliani.no/",
          SK: "https://www.beliani.sk/",
      };
  
      const api = myFetch({
          baseUrl: "https://www.prologistics.info/api/condensedSA",
          options: {
              headers: {
                  accept:
                      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "accept-language": "en-US,en;q=0.9,ru;q=0.8",
                  "sec-ch-ua":
                      '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
                  "sec-ch-ua-mobile": "?0",
                  "sec-ch-ua-platform": '"Windows"',
                  "sec-fetch-dest": "document",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-site": "none",
                  "sec-fetch-user": "?1",
                  "upgrade-insecure-requests": "1",
              },
              referrerPolicy: "strict-origin-when-cross-origin",
              body: null,
              method: "GET",
              mode: "cors",
              credentials: "include",
          }
      })
  
      function myFetch(config) {
          const baseUrl = config.baseUrl
          
          async function get(url) {
              const response = await fetch(baseUrl + url, config.options)
              const data = await response.json()
              return data
          }
  
          return {
              get
          }
      }
  
      const ids = ${products}
  
      function getID(arr, productId) {
          let ids = [];
          const shopId = {
              "DE": "3",
              "CHDE": "1",
              "AT": "8",
              "FR": "7",
              "IT": "21",
              "UK": "2",
              "ES": "10",
              "PT": "22",
              "PL": "12",
              "HU": "24",
              "NL": "17",
              "SE": "23",
              "DK": "25",
              "CZ": "26",
              "FI": "27",
              "NO": "28",
              "SK": "29",
          };
  
          Object.values(shopId).forEach((elem, index) => {
              arr.forEach(({ shop_id, id }) => {
              if (elem === shop_id) {
                  ids.push({
                      country: Object.keys(shopId)[index],
                      id: id,
                  });
              }
              });
          });
  
          ids.push({
              country: "CHDE",
              id: String(productId),
          });
          
          return ids;
      }
  
      function pricesToArray(resultPrices) {
          const result = {};
          for (let index = 0; index < resultPrices.length; index++) {
              for (let name in resultPrices[index]) {
                  if (result[name]) {
                      result[name] = [...result[name], ...resultPrices[index][name]];
                  } else {
                      result[name] = resultPrices[index][name];
                  }
              }
          }
      }
  
    function parseLinkToCountry(data) {
        let links = {}
        const originCountries = Object.keys(origins)

        for(let i in data) {
            const link = data[i]
            Object.values(origins).forEach((origin, index) => {
                if (link.includes(origin)) {
                    links[originCountries[index]] = (new URL(link).origin + new URL(link).pathname).replace(".desc", ".html")
                }
            })
        }

        return links
    }
  
    for (const product of ids) {
        const mainId = product.main_id

        const response = await api.get(\`/getShops/?id=\${mainId}\`)
        const parsedShopIdsToCountry = getID(response.slaves, mainId)
        
        parsedShopIds.push({
            relativeCountriesToId: parsedShopIdsToCountry,
            productName: product.name,
            mainId: mainId,
        })

        links[mainId] = parseLinkToCountry(response.templates[0].preview)
        console.log(\`Product \${product.name} with id \${mainId} has been parsed.\`)

        if (parsedShopIds.length === ids.length) {

            console.log(\`All links has been collected. Wait until low and high price will be collected.\`)

            for (const item of parsedShopIds) {

                const productName = item.productName
                const mainId = item.mainId

                for (const object of item.relativeCountriesToId) {
                    let id = object.id
                    let country = object.country
                    let getDataShopIds = await api.get(\`/getSlave/?id=\${id}&block=buttons\`)


                    products = [
                        ...products,
                        {
                            id: id,
                            main_id: mainId,
                            country: country,
                            name: productName,
                            href: links[mainId][country] ? links[mainId][country] : null,
                            highPrice: getDataShopIds.sa.saved_params.ShopHPrice,
                            lowPrice: getDataShopIds.sa.saved_params.ShopPrice,
                        }
                    ]
                }

                let getDataShopIds = await api.get(\`/getSlave/?id=\${mainId}&block=buttons\`)

                products = [
                    ...products,
                    {
                        main_id: mainId,
                        country: "CHFR",
                        name: productName,
                        href: (links[mainId]["FR"] && links[mainId]["CHDE"]) ? new URL(links[mainId]["CHDE"]).origin + new URL(links[mainId]["FR"]).pathname: null,
                        highPrice: getDataShopIds.sa.saved_params.ShopHPrice,
                        lowPrice: getDataShopIds.sa.saved_params.ShopPrice,
                    }
                ]
            }
            console.log("Products: ", products)
        }
      }
    `
  }
  