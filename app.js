import { initApp } from "./main/initApp.js";

initApp({
  startId: "21780",
  token: "1//04M0PpkC5CPDQCgYIARAAGAQSNwF-L9IrLJCOy-LxnLnVgrgypaOvXcEU09lr4NjKEk0A9wjriGaaIMxOu0pdSLxGTppm8q2lw_4",
  tableQueries: [
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher -  26.02.24 - Free office lamp",
      tableRange: "18:22",
      name: "offer",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher -  26.02.24 - Free office lamp",
      tableRange: "23:24",
      name: "intro",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher -  26.02.24 - Free office lamp",
      tableRange: "25:28",
      name: "category",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher -  26.02.24 - Free office lamp",
      tableRange: "29",
      name: "code",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher -  26.02.24 - Free office lamp",
      tableRange: "32",
      name: "shopNow",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher -  26.02.24 - Free office lamp",
      tableRange: "35",
      name: "soonEnding",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher -  26.02.24 - Free office lamp",
      tableRange: "37",
      name: "condition",
    },
    {
      tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
      tableName: "Categories",
      tableRange: "A:JW?majorDimension=COLUMNS",
      name: "categories",
      tableColumns: false,
    }
  ],
  tableColumns: {
    UK: "F",
    PL: "H",
    DE: "J",
    AT: "L",
    CHDE: "N",
    NL: "P",
    FR: "R",
    CHFR: "T",
    ES: "V",
    PT: "X",
    IT: "Z",
    DK: "AB",
    NO: "AD",
    FI: "AF",
    SE: "AH",
    CZ: "AJ",
    SK: "AL",
    HU: "AN",
  },
  newsletterLinks: [
    {
      value: (origin) => origin + "content/lp24-02-26",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}240226_01.jpg`,
    },
    {
      value: (origin) => origin + "content/lp24-02-19",
      query: true,
    },
    {
      value: () => "https://upload.pictureserver.net/static/240226gif.gif",
    },
    {
      value: (origin) => origin + "content/lp24-02-19",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}240219.png`,
    },
    {
      value: (origin) => origin + "content/lp24-02-16",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}240216.png`,
    },
  ],
  landingLinks: [
    {
      value: (origin) => origin + "content/lp24-02-12",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}240212_01.jpg`,
    },
    {
      value: (origin) => origin + "content/lp24-02-12",
      query: true,
    },
    {
      value: () => "https://upload.pictureserver.net/static/240212gif.gif",
    },
    {
      value: (origin) => origin + "content/lp24-02-05",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}240205.png`,
    },
    {
      value: (origin) => origin + "content/lp24-02-02",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}240202.png`,
    },
  ],
});
