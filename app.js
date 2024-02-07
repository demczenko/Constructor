import { initApp } from "./main/initApp.js";

initApp({
  startId: "21266",
  token:
    "1//044Oh7LiV11ZyCgYIARAAGAQSNwF-L9IremJVAQepwtwvFj7qQxnVzwaR-_3PPvH2tieNpTMdbUv_vXjLdUNT1YAatBmAnbg_MCk",
  tableQueries: [
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 12.02.24 - Mardi Gras",
      tableRange: "18:23",
      name: "offer",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 12.02.24 - Mardi Gras",
      tableRange: "24:25",
      name: "intro",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 12.02.24 - Mardi Gras",
      tableRange: "26:29",
      name: "category",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 12.02.24 - Mardi Gras",
      tableRange: "30",
      name: "code",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 12.02.24 - Mardi Gras",
      tableRange: "31",
      name: "getCode",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 12.02.24 - Mardi Gras",
      tableRange: "35",
      name: "shopNow",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 12.02.24 - Mardi Gras",
      tableRange: "38",
      name: "soonEnding",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 12.02.24 - Mardi Gras",
      tableRange: "40",
      name: "condition",
    },
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
