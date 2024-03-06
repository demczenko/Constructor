import { initApp } from "./main/initApp.js";

initApp({
  startId: "21910",
  token: "1//04xxn4hLWkbOvCgYIARAAGAQSNwF-L9Irrg3byUyyVC4bGe-I7QXLqA2SK7BmJoC7FzpuPDeMsoDGJh5uwKmTQnKKRlsW1sscgig",
  tableQueries: [
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "11.03.24 - Voucher - Free mirror",
      tableRange: "18:22",
      name: "offer",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "11.03.24 - Voucher - Free mirror",
      tableRange: "23:24",
      name: "intro",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "11.03.24 - Voucher - Free mirror",
      tableRange: "25:28",
      name: "category",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "11.03.24 - Voucher - Free mirror",
      tableRange: "29",
      name: "code",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "11.03.24 - Voucher - Free mirror",
      tableRange: "32",
      name: "shopNow",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "11.03.24 - Voucher - Free mirror",
      tableRange: "35",
      name: "soonEnding",
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "11.03.24 - Voucher - Free mirror",
      tableRange: "37:38",
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
      value: (origin) => origin + "content/lp24-03-11",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}240311_01.jpg`,
    },
    {
      value: (origin) => origin + "content/lp24-03-11",
      query: true,
    },
    {
      value: () => "https://upload.pictureserver.net/static/240311gif.gif",
    },
    {
      value: (origin) => origin + "content/lp24-03-01",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}20240301.png`,
    },
    {
      value: (origin) => origin + "content/lp24-02-29",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}20240229.png`,
    },
  ],
  landingLinks: [
    { 
      value: (origin) => origin + "content/lp24-03-11",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}240311_01.jpg`,
    },
    {
      value: (origin) => origin + "content/lp24-03-11",
      query: true,
    },
    {
      value: () => "https://upload.pictureserver.net/static/240311gif.gif",
    },
    {
      value: (origin) => origin + "content/lp24-03-01",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}240301.png`,
    },
    {
      value: (origin) => origin + "content/lp24-02-29",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}240229.png`,
    },
  ],
});
