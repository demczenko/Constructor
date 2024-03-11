import { initApp } from "./main/initApp.js";

initApp({
  startId: "22166",
  token:
    "1//04I_0h7H_nbuSCgYIARAAGAQSNwF-L9IryNTDjGcyylXy3fZf_kKVGmAj0q2Zd259uBRg0L3RP0EFPBzVgKikC271UCBaT3uUyuY",
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
      value: (origin) => origin + "content/lp24-03-18",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}240318_01.jpg`,
    },
    {
      value: (origin) => origin + "content/lp24-03-18",
      query: true,
    },
    {
      value: () => "https://upload.pictureserver.net/static/240318gif.gif",
    },
    {
      value: (origin) => origin + "content/lp24-03-08",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}20240308b.png`,
    },
    {
      value: (origin) => origin + "content/lp24-03-07",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}20240307b.png`,
    },
  ],
  landingLinks: [
    {
      value: (origin) => origin + "content/lp24-03-18",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}240318_01.jpg`,
    },
    {
      value: (origin) => origin + "content/lp24-03-18",
      query: true,
    },
    {
      value: () => "https://upload.pictureserver.net/static/240318gif.gif",
    },
    {
      value: (origin) => origin + "content/lp24-03-08",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}20240308.png`,
    },
    {
      value: (origin) => origin + "content/lp24-03-07",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}20240307.png`,
    },
  ],
});
