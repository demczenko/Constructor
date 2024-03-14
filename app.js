import { initApp } from "./main/initApp.js";

initApp({
  startId: "22166",
  token:
    "1//046Em-dQr4gIGCgYIARAAGAQSNwF-L9IrnjDjRrEnomjZ9NorIXQBkhkaKe2U9mgA6wPyWmKmB5a7bnjXwiH1Xd22e7pPhSDy7nA",
  tableQueries: [
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "18.03.24 - Free rain cover",
      tableRange: "18:22",
      name: "offer",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "18.03.24 - Free rain cover",
      tableRange: "23:24",
      name: "intro",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "18.03.24 - Free rain cover",
      tableRange: "25:28",
      name: "category",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "18.03.24 - Free rain cover",
      tableRange: "29",
      name: "code",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "18.03.24 - Free rain cover",
      tableRange: "32",
      name: "shopNow",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "18.03.24 - Free rain cover",
      tableRange: "35",
      name: "soonEnding",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "18.03.24 - Free rain cover",
      tableRange: "37:38",
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
      value: (origin, country) => origin + "content/lp24-03-18",
      query: true,
    },
    {
      value: (origin, country) => `https://upload.pictureserver.net/static/2024/${country}240318_01.jpg`,
    },
    {
      value: (origin, country) => origin + "content/lp24-03-18",
      query: true,
    },
    {
      value: () => "https://upload.pictureserver.net/static/2024/20240318gif.gif",
    },
    {
      value: (origin, country) => origin + "content/lp24-03-08",
      query: true,
    },
    {
      value: (origin, country) =>
        `https://beliani.info/newsletter/2022/${country}20240308b.png`,
    },
    {
      value: (origin, country) => origin + "content/lp24-03-07",
      query: true,
    },
    {
      value: (origin, country) =>
        `https://beliani.info/newsletter/2022/${country}20240307b.png`,
    },
  ],
  landingLinks: [
    {
      value: (origin, country) => origin + "content/lp24-03-18",
      query: true,
    },
    {
      value: (origin, country) => `https://upload.pictureserver.net/static/2024/${country}240318_01.jpg`,
    },
    {
      value: (origin, country) => origin + "content/lp24-03-18",
      query: true,
    },
    {
      value: () => "https://upload.pictureserver.net/static/2024/20240318gif.gif",
    },
    {
      value: (origin, country) => origin + "content/lp24-03-08",
      query: true,
    },
    {
      value: (origin, country) =>
        `https://beliani.info/newsletter/2022/${country}20240308b.png`,
    },
    {
      value: (origin, country) => origin + "content/lp24-03-07",
      query: true,
    },
    {
      value: (origin, country) =>
        `https://beliani.info/newsletter/2022/${country}20240307b.png`,
    },
  ],
});
