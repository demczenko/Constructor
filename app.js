import { initApp } from "./main/initApp.js";

initApp({
  startId: "20209",
  // serverProducts: true,
  // serverCategories: true,
  // serverHeader: true,
  token:
    "1//040ElcPze-dB5CgYIARAAGAQSNwF-L9IrpIZFdbfyaSRXmpqzF7kZdh-zxNRQJAtLdIzzFCJUGIIbQ4_87lhoTsbjKAM1Axe7nEg",
  tableQueries: [
    {
      tableId: "15hF-nbul3ZtRqoMiIxI15Ez5lGhee1gUeM3njz5ixtE",
      tableName: "Voucher - 25.12.23 - Free sheepskin",
      tableRange: "18:26",
      name: "sheepskin",
    },
    {
      tableId: "15hF-nbul3ZtRqoMiIxI15Ez5lGhee1gUeM3njz5ixtE",
      tableName: "Voucher - 25.12.23 - Free sheepskin",
      tableRange: "27",
      name: "code",
    },
    {
      tableId: "15hF-nbul3ZtRqoMiIxI15Ez5lGhee1gUeM3njz5ixtE",
      tableName: "Voucher - 25.12.23 - Free sheepskin",
      tableRange: "36",
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
      value: (origin) => origin + "content/lp23-12-25",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}231225_01.jpg`,
    },
    {
      value: (origin) => origin + "content/lp23-12-25",
      query: true,
    },
    {
      value: () => "https://upload.pictureserver.net/static/231225gif.gif",
    },
    {
      value: (origin) => origin + "content/lp23-12-18",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}231218.png`,
    },
    {
      value: (origin) => origin + "content/lp23-12-15",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}231215.png`,
    },
  ],
  landingLinks: [
    {
      value: (origin) => origin + "content/lp23-12-25",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}231225_01.jpg`,
    },
    {
      value: (origin) => origin + "content/lp23-12-25",
      query: true,
    },
    {
      value: () => "https://upload.pictureserver.net/static/231225gif.gif",
    },
    {
      value: (origin) => origin + "content/lp23-12-18",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}231218.png`,
    },
    {
      value: (origin) => origin + "content/lp23-12-15",
      query: true,
    },
    {
      value: (country) =>
        `https://beliani.info/newsletter/2022/${country}231215.png`,
    },
  ],
  productsOrder: [
    {
      "SA#": 94520,
      "SA Name": "KOCHI",
    },
    {
      "SA#": 103988,
      "SA Name": "KARIS",
    },
    {
      "SA#": 158574,
      "SA Name": "DOLVA",
    },
    {
      "SA#": 198537,
      "SA Name": "NANTILLY",
    },
    {
      "SA#": 200061,
      "SA Name": "MOLLE",
    },
    {
      "SA#": 354829,
      "SA Name": "ROJHAN",
    },
    {
      "SA#": 359399,
      "SA Name": "ARCO",
    },
    {
      "SA#": 374306,
      "SA Name": "NYBRO",
    },
    {
      "SA#": 385317,
      "SA Name": "APRICA",
    },
    {
      "SA#": 392941,
      "SA Name": "MUKKI",
    },
    {
      "SA#": 411277,
      "SA Name": "SERSAN",
    },
    {
      "SA#": 415176,
      "SA Name": "ALLIER",
    },
    {
      "SA#": 416731,
      "SA Name": "SHASA",
    },
    {
      "SA#": 418494,
      "SA Name": "MERI",
    },
    {
      "SA#": 419508,
      "SA Name": "PESSAC",
    },
    {
      "SA#": 423221,
      "SA Name": "MALUNG",
    },
  ],
  productsImages: {
    82891: "https://beliani.info/newsletter/2022/231225Freebie1.jpg",
    82893: "https://beliani.info/newsletter/2022/231225Freebie2.jpg",
    82884: "https://beliani.info/newsletter/2022/231225Freebie3.jpg",
    82895: "https://beliani.info/newsletter/2022/231225Freebie4.jpg",
    176749: "https://beliani.info/newsletter/2022/231225Freebie5.jpg",
    259716: "https://beliani.info/newsletter/2022/231225Freebie6.jpg",

    158574: "https://beliani.info/newsletter/2022/231225Category11.png",
    411277: "https://beliani.info/newsletter/2022/231225Category12.png",
    385317: "https://beliani.info/newsletter/2022/231225Category13.png",
    423221: "https://beliani.info/newsletter/2022/231225Category14.png",

    198537: "https://beliani.info/newsletter/2022/231225Category21.png",
    418494: "https://beliani.info/newsletter/2022/231225Category22.png",
    415176: "https://beliani.info/newsletter/2022/231225Category23.png",
    419508: "https://beliani.info/newsletter/2022/231225Category24.png",

    94520: "https://beliani.info/newsletter/2022/231225Category31.png",
    392941: "https://beliani.info/newsletter/2022/231225Category32.png",
    416731: "https://beliani.info/newsletter/2022/231225Category33.png",
    354829: "https://beliani.info/newsletter/2022/231225Category34.png",

    103988: "https://beliani.info/newsletter/2022/231225Category41.png",
    359399: "https://beliani.info/newsletter/2022/231225Category42.png",
    374306: "https://beliani.info/newsletter/2022/231225Category43.png",
    200061: "https://beliani.info/newsletter/2022/231225Category44.png",
  },
});
