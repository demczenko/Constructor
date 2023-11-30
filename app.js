import { initApp } from "./main/initApp.js";

initApp({
  startId: "20017",
  // serverProducts: true,
  // serverCategories: true,
  // serverHeader: true,
  token:
    "1//04Gy_s8ZYSeweCgYIARAAGAQSNwF-L9IruXVczHsL893Pu1N6dW0idwAtjr37flzjosVZ7Xx757HrEoLeMYH6lmPgFgQGBmgtKUg",
  tableQueries: [
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 08.01.24 - Winter sale start",
      tableRange: "27:36",
      name: "tables",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 08.01.24 - Winter sale start",
      tableRange: "39:42",
      name: "code",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 08.01.24 - Winter sale start",
      tableRange: "75",
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
      value: (origin) => origin + "lp24-01-08",
      query: true
    },
    {
      value: (country) => `https://beliani.info/newsletter/2022/${country}240108_01.png`,
    },
    {
      value: (origin) => origin + "lp24-01-08",
      query: true
    },
    {
      value: () => "https://upload.pictureserver.net/static/240108gif.gif",
    },
    {
      value: (origin) => origin + "lp24-01-01",
      query: true
    },
    {
      value: (country) => `https://beliani.info/newsletter/2022/${country}240101.png`,
    },
    {
      value: (origin) => origin + "lp23-12-29",
      query: true
    },
    {
      value: (country) => `https://beliani.info/newsletter/2022/${country}231229.png`,
    },
  ],
  landingLinks: [
    {
      value: (origin) => origin + "lp24-01-08",
      query: true
    },
    {
      value: (country) => `https://beliani.info/newsletter/2022/${country}240108_01.png`,
    },
    {
      value: (origin) => origin + "lp24-01-08",
      query: true
    },
    {
      value: () => "https://upload.pictureserver.net/static/240108gif.gif",
    },
    {
      value: (origin) => origin + "lp24-01-01",
      query: true
    },
    {
      value: (country) => `https://beliani.info/newsletter/2022/${country}240101.png`,
    },
    {
      value: (origin) => origin + "lp23-12-29",
      query: true
    },
    {
      value: (country) => `https://beliani.info/newsletter/2022/${country}231229.png`,
    },
  ],
  productsOrder: [],
});
