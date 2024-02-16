import { initApp } from "./main/initApp.js";

initApp({
  startId: "21362",
  token: "1//04iVDJJCNJ4ijCgYIARAAGAQSNwF-L9Ir0FS3yVd0qZrC9PgYvFSVLMZgOm94zrVrQeCScPCZpj_PIuChRbSNNfze-LphFwLlLGA",
  tableQueries: [
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 19.02.24 - Free beanbag cover",
      tableRange: "18:22",
      name: "offer",
      tableColumns: true,
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 19.02.24 - Free beanbag cover",
      tableRange: "23:24",
      name: "intro",
      tableColumns: true,
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 19.02.24 - Free beanbag cover",
      tableRange: "25:28",
      name: "category",
      tableColumns: true,
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 19.02.24 - Free beanbag cover",
      tableRange: "29",
      name: "code",
      tableColumns: true,
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 19.02.24 - Free beanbag cover",
      tableRange: "32",
      name: "shopNow",
      tableColumns: true,
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 19.02.24 - Free beanbag cover",
      tableRange: "35",
      name: "soonEnding",
      tableColumns: true,
    },
    {
      tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
      tableName: "Voucher - 19.02.24 - Free beanbag cover",
      tableRange: "37",
      name: "condition",
      tableColumns: true,
    },
    {
      tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
      tableName: "Categories",
      tableRange: "A:JS?majorDimension=COLUMNS",
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
      value: (origin) => origin + "content/lp24-02-19",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}240219_01.jpg`,
    },
    {
      value: (origin) => origin + "content/lp24-02-19",
      query: true,
    },
    {
      value: () => "https://upload.pictureserver.net/static/240219gif.gif",
    },
    {
      value: (origin) => origin + "content/lp24-02-16",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}240216.png`,
    },
    {
      value: (origin) => origin + "content/lp24-02-15",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}240215.png`,
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
