import { setState } from "./initApp.js";
import { handleProducts, handleLinks, handleCategories } from "./handlers/index.js";
import { parseTemplate, parseShopId, getProductsFromXLS } from "../helpers/index.js";
import { 
    getIds,
    getLink,
    getProductsPrice,
    getTranslationCell,
    getTranslationRange,
 } from "../api/index.js";
import { 
    text,
    products,
    categories,
    conditions,
    codes
} from "../data/index.js";
import { productsXLS } from "../helpers/productsXLS.js";
import { sort } from "../helpers/sort.js";
import { fetchToken } from "../api/fetchToken.js";
import { getCampaign } from "../api/category.js";

export async function fetchData({
    countriesColumns,
    state,
    xlsPath,
    newsletterLinks,
    additionalTranslations,
    landingLinks,
    apiCall,
    translationsTableName,
    translationsRange,
    conditionsRow,
    codesRow,
    token,
    productsOrder
}) {
    if (productsOrder) {
        let productsXls = await productsXLS()
        productsXls = sort(productsXls, productsOrder)
        setState("productsToParse", productsXls)
    }

    if (token) {
        const tokenResponse = await fetchToken(token);
        if (tokenResponse.Response["Status-Code"] === 200) {
            setState("token", tokenResponse.access_token)
        } else {
            Toastify({
              text: "Please refresh token. " + tokenResponse.error,
              escapeMarkup: false,
              duration: 3000,
            }).showToast();
          }
    }

    const translationsPromise = new Promise((resolve, reject) => {

        if (translationsTableName) {
            if (!translationsRange) {
                return Toastify({
                    text: "If you want to get text from spreadsheet. Please, set translationsRange. Also, you can set conditionsRow and codesRow in app.js",
                    escapeMarkup: false,
                    duration: 3000
                }).showToast();
            } 

            if (!countriesColumns) {
                return Toastify({
                    text: "If you want to get text from spreadsheet. Please, set countriesColumns.",
                    escapeMarkup: false,
                    duration: 3000
                }).showToast();
            } 
            let data = {}

            const range = countriesColumns[state.country] + translationsRange.split(":")[0] + ":" + countriesColumns[state.country] + translationsRange.split(":")[1]
            const conditionsCell = countriesColumns[state.country] + conditionsRow
            const codeCell = countriesColumns[state.country] + codesRow
            
            getTranslationRange(translationsTableName, range, state.token)
                .then((translations) => {
                    if (translations.error) {
                        throw new Error("Error while fetching translations. <br />" + translations.error.message)
                    } else {
                        if(translations.values) {
                            data = {
                                translations: translations.values.flat().map((t) => t.replaceAll("\n", "<br />")),
                            }
                        } else {
                            throw new Error(`Probably translation cell is empty for ${state.country}.`)
                        }

                    }
                })
                .then(async () =>{
                    if (conditionsRow) {
                        await getTranslationCell(translationsTableName, conditionsCell, state.token).then((conditionsData) => {
                            if (conditionsData.error) {
                                throw new Error(conditionsData.error.message)
                            } else {
                                if(conditionsData.values) {
                                    data = {
                                        ...data,
                                        conditions: conditionsData.values.flat(),
                                    }
                                } else {
                                    throw new Error(`Probably conditions cell is empty for ${state.country}.`)
                                }

                            }
                        })
                    }

                    if (codesRow) {
                        await getTranslationCell(translationsTableName, codeCell, state.token).then((codeData) => codeData).then(codes => {
                            if (codes.error) {
                                throw new Error(codes.error.message)
                            } else {
                                if(codes.values) {
                                    data = {
                                        ...data,
                                        code: codes.values.flat(),
                                    }
                                } else {
                                    throw new Error(`Probably code cell is empty for ${state.country}.`)
                                }

                            }
                        })
                    } else {
                        data = {
                            ...data,
                            code: codes[state.country],
                        }
                    }
        
                    if (additionalTranslations) {
                        return await getTranslationRange(translationsTableName, range, state.token).then(additionalData => {
                            if (additionalData.error) {
                                throw new Error(additionalData.error.message)
                            } else {
                                if(additionalData.values) {
                                    data = {
                                        ...data,
                                        additionalTranslations: additionalData.values.flat()
                                    }
                                } else {
                                    throw new Error(`Probably additional cells is empty for ${state.country}.`)
                                }

                            }
                        })
                    }
                })
                .then(() => resolve(data))
                .catch((err) => {
                    setState("loading", false)
                    return Toastify({
                        text: err,
                        escapeMarkup: false,
                        duration: 3000
                    }).showToast();
                })
        } else {
            resolve({
                translations: text[state.country].map((t) => t.replaceAll("\n", "<br />")),
                conditions: conditions[state.country],
                code: codes[state.country]
            })
        }
    })
    // console.log(await getCampaign("garden-furniture", "DE"))
    
    const categoriesPromise = new Promise((resolve, reject) => {
        resolve(categories)
    })
                        
    const productsPromise = new Promise((resolve, reject) => {
        if (apiCall) {
            //1. Получаю айдишники на продукты которые были поставлены для парсинга
            getIds(state.productsToParse)
                .then((shopsIDs) => parseShopId(state.productsToParse, shopsIDs))
                .then(data => {
                    setState("productsIds", data)
                    resolve()
                })
                .catch((err) => {
                    setState("loading", false)
                    return Toastify({
                        text: err,
                        escapeMarkup: false,
                        duration: 3000
                    }).showToast();
                })
        } else {
            resolve(products.filter(item => item.country === state.country))
        }
    })

    return Promise.allSettled([translationsPromise, categoriesPromise, productsPromise]).then(results => {
        const links = state.template === 'newsletter' ? newsletterLinks : landingLinks

        for (const key of results) {
            if (key.status === "rejected") {
                return Toastify({
                    text: "Something went wrong with fetching data." + key.status,
                    escapeMarkup: false,
                    duration: 3000
                }).showToast();
            }
        }

        setState("translations", results[0].value)
        setState("categories", results[1].value)
        setState("products", results[2].value)

        setState("links", parseTemplate([...links], state.country))
        
        if (apiCall && translationsTableName) {
            // Products from the API
            // Translations from the google spreadsheet
            //2. Получаю айдишники на которые мне нужны цены и ссылки
            const requestIds = state.productsToParse.map(item => state.productsIds[item.main_id][state.country])
            let finalProducts = state.productsToParse.map(item => ({...item, id: state.productsIds[item.main_id][state.country]}))
            
            // 3. Делаю запрос на сервер для получения данных 1 раз для всех айдишников.
            return getProductsPrice(requestIds)
                .then(data => {
                    return finalProducts.map(item => {
                        return {
                            ...item,
                            lowPrice: data[item.id].ShopPrice,
                            highPrice: data[item.id].ShopHPrice,
                            country: state.country
                        }
                    })
                })
                .then((finalProducts) => {
                    // 4.Делаю запрос на сервер для получения ссылок
                    return getLink(state.productsToParse.map(item => item.main_id), state.country)
                        .then(data => {
                            setState("products", finalProducts.map((item, i) => {
                                return {
                                    ...item,
                                    href: data[i]
                                }
                            }))
                        })
                        .then(() => {
                            return {
                                ...state.translations,
                                products: handleProducts(state),
                                categories: handleCategories(state),
                                links: handleLinks(state),
                            }
                        })
                })
        } else if (xlsPath && translationsTableName) {
            // Products from the data/xls/
            // Translations from the google spreadsheet
            if (state.productsToParse.length > 0) {
                return getProductsFromXLS(state.country, state.productsToParse, xlsPath)
                    .then(products => {
                        if (products) {
                            return {
                                ...state.translations,
                                links: handleLinks(state),
                                products: handleProducts({products: products, country: state.country}),
                                categories: handleCategories(state),
                            }
                        }
                        throw new Error("Data parse error.")
                    })
            } else {
                Toastify({
                    text: "Please set productsXls in data/products/products.xls",
                    escapeMarkup: false,
                    duration: 3000
                }).showToast();
            }
        } else if (apiCall) {
            // Products from the API 
            // Translations from the data/text.js
            //2. Получаю айдишники на которые мне нужны цены и ссылки
            const requestIds = state.productsToParse.map(item => state.productsIds[item.main_id][state.country])
            let finalProducts = state.productsToParse.map(item => ({...item,id: state.productsIds[item.main_id][state.country]}))
            return getProductsPrice(requestIds)
                .then(data => {
                    return finalProducts.map(item => {
                        return {
                            ...item,
                            lowPrice: data[item.id].ShopPrice,
                            highPrice: data[item.id].ShopHPrice,
                            country: state.country
                        }
                    })
                })
                .then((finalProducts) => {
                    // 4.Делаю запрос на сервер для получения ссылок
                    return getLink(state.productsToParse.map(item => item.main_id), state.country)
                        .then(data => {
                            setState("products", finalProducts.map((item, i) => {
                                return {
                                    ...item,
                                    href: data[i]
                                }
                            }))

                            return {
                                ...state.translations,
                                links: handleLinks(state),
                                products: handleProducts(state),
                                categories: handleCategories(state),
                            }
                        })
                })
        } else if (xlsPath) {
            // Products from the data/xls/
            // Translations from the data/text.js
            if (state.productsToParse.length > 0) {
                return getProductsFromXLS(state.country, state.productsToParse, xlsPath)
                    .then(products => {
                        if (products) {
                            return {
                                ...state.translations,
                                links: handleLinks(state),
                                products: handleProducts({products: products, ...state}),
                                categories: handleCategories(state),
                            }
                        }
                        throw new Error("Data parse error.")
                    })
            } else {
                Toastify({
                    text: "Please set products.xls in data/products/products.xls",
                    escapeMarkup: false,
                    duration: 3000
                }).showToast();
            }
        } else if (translationsTableName) {
            // Products from the data/products/data.js
            // Translations from the google spreadsheet
            return {
                ...state.translations,
                links: handleLinks(state),
                products: handleProducts(state, true),
                categories: handleCategories(state),
            }
        } else {
            // Products from the data/products/data.js
            // Translations from the data/text.js
            return {
                ...state.translations,
                links: handleLinks(state),
                products: handleProducts(state),
                categories: handleCategories(state),
            }
        }
    })
}
