import { initApp } from "./main/initApp.js";

initApp({
  startId: "22555",
  optimizeImg: true,
  token: "",
  tableQueries: [
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 01.04.24 - Free cushion for chair",
      tableRange: "19:23",
      name: "offer",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 01.04.24 - Free cushion for chair",
      tableRange: "24:25",
      name: "intro",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 01.04.24 - Free cushion for chair",
      tableRange: "26:29",
      name: "category",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 01.04.24 - Free cushion for chair",
      tableRange: "30",
      name: "code",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 01.04.24 - Free cushion for chair",
      tableRange: "33",
      name: "shopNow",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 01.04.24 - Free cushion for chair",
      tableRange: "36",
      name: "soonEnding",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 01.04.24 - Free cushion for chair",
      tableRange: "38:39",
      name: "condition",
    },
    // {
    //   tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
    //   tableName: "Categories",
    //   tableRange: "A:JW?majorDimension=COLUMNS",
    //   name: "categories",
    //   tableColumns: false,
    // }
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
      value: (origin, country) => origin + "content/lp24-04-01",
      query: true,
    },
    {
      value: (origin, country) => `https://upload.pictureserver.net/static/2024/${country}240401_01.jpg`,
    },
    {
      value: (origin, country) => origin + "content/lp24-04-01",
      query: true,
    },
    {
      value: () => "https://upload.pictureserver.net/static/2024/240104gif.gif",
    },
    {
      value: (origin, country) => origin + "content/lp24-03-22",
      query: true,
    },
    {
      value: (origin, country) =>
        `https://beliani.info/newsletter/2024/${country}20240322b.png`,
    },
    {
      value: (origin, country) => origin + "content/lp24-03-21",
      query: true,
    },
    {
      value: (origin, country) =>
        `https://beliani.info/newsletter/2024/${country}20240321b.png`,
    },
  ],
  landingLinks: [
    {
      value: (origin, country) => origin + "content/lp24-04-01",
      query: true,
    },
    {
      value: (origin, country) => `https://upload.pictureserver.net/static/2024/${country}240401_01.jpg`,
    },
    {
      value: (origin, country) => origin + "content/lp24-04-01",
      query: true,
    },
    {
      value: () => "https://upload.pictureserver.net/static/2024/240104gif.gif",
    },
    {
      value: (origin, country) => origin + "content/lp24-03-22",
      query: true,
    },
    {
      value: (origin, country) =>
        `https://beliani.info/newsletter/2024/${country}20240322b.png`,
    },
    {
      value: (origin, country) => origin + "content/lp24-03-21",
      query: true,
    },
    {
      value: (origin, country) =>
        `https://beliani.info/newsletter/2024/${country}20240321b.png`,
    },
  ],
});
