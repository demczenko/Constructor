import { newsletter } from "./campaigns/newsletter.js";
import { landing } from "./campaigns/landing.js";
import { SundayLP } from "./campaigns/SundayLP.js";
import { SundayNslt } from "./campaigns/SundayNslt.js";

import { newsletter0524 } from "./campaigns/newsletter120724.js";
import { landing0524 } from "./campaigns/landing120724.js";

import { initApp } from "./main/initApp.js";

initApp({
  optimizeImg: false,
  campaigns: [
    {
      startId: "23649",
      name: "Sunday",
      templates: [
        {
          name: "Sunday - Newsletter",
          type: "newsletter",
          template: SundayNslt,
          links: [
            {
              value: (origin, country) =>
                `https://beliani.info/newsletter/2022/${country}240150_01.jpg`,
            },
            {
              value: (origin, country) => origin + "content/lp24-05-06",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}20240506_mb.png`,
            },
            {
              value: (origin, country) => origin + "content/lp24-05-07",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}20240507_mb.png`,
            },
            {
              value: (origin, country) => origin + "content/lp24-05-08",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}20240508_mb.png`,
            },
            {
              value: (origin, country) =>
                ["de", "at", "dk"].includes(country)
                  ? origin + "content/lp24-05-09fd"
                  : origin + "content/lp24-05-09",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}20240509_mb.png`,
            },
            {
              value: (origin, country) =>
                [
                  "chde",
                  "at",
                  "de",
                  "chfr",
                  "dk",
                  "cz",
                  "sk",
                  "it",
                  "nl",
                  "fi",
                ].includes(country)
                  ? origin + "content/lp24-05-10fd"
                  : origin + "content/lp24-05-10",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}20240510_mb.png`,
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Sunday Newsletter!",
              tableRange: "19",
              name: "sunday",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Sunday Newsletter!",
              tableRange: "16:19",
              name: "timer",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "Sunday Newsletter!",
              tableRange: "22:24",
              name: "condition",
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
        },
        {
          name: "Sunday - Landing",
          type: "landing",
          template: SundayLP,
          links: [
            {
              value: (origin, country) => origin + "content/lp24-04-01",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}240401_01.jpg`,
            },
            {
              value: (origin, country) => origin + "content/lp24-04-01",
              query: true,
            },
            {
              value: () =>
                "https://upload.pictureserver.net/static/2024/240104gif.gif",
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
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "19:23",
              name: "offer",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "24:25",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "26:29",
              name: "category",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "30",
              name: "code",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "33",
              name: "shopNow",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
              tableRange: "36",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName:
                "Voucher - 03.05.24 - Mid season sale 4 for 3 Reminder!",
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
        },
      ],
    },
    {
      startId: "25027",
      name: "24.07.12 - Category ",
      templates: [
        {
          name: "24.07.12 - Newsletter",
          type: "newsletter",
          template: newsletter0524,
          css: "newsletter.css",
          background: "#dbd9d7",
          links: [
            {
              value: (origin, country) => origin + "content/lp24-07-12",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}202407012_01.jpg`,
            },
            {
              value: (origin, country) => origin + "content/lp24-07-12",
              query: true,
            },
            {
              value: () =>
                "https://upload.pictureserver.net/static/2024/Gif_CategorySale24-07-12.gif",
            },
            {
              value: (origin, country) => origin + "content/lp24-07-05",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}20240705b.png`,
            },
            {
              value: (origin, country) => origin + "content/lp24-07-04",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}20240704b.png`,
            },
            {
              value: (origin, country) => origin + "content/lp24-07-08",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/20240712_freb.jpg`,
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "12.07.24-Bastill Day-Category Sale!",
              tableRange: "14",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "12.07.24-Bastill Day-Category Sale!",
              tableRange: "16:17",
              name: "timer",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "24.05.24 - May peak reminder!",
              tableRange: "31",
              name: "shopNow",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "12.07.24-Bastill Day-Category Sale!",
              tableRange: "6",
              name: "shopNow2",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "24.05.24 - May peak reminder!",
              tableRange: "34",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "24.05.24 - May peak reminder!",
              tableRange: "32",
              name: "watchNow",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "12.07.24-Bastill Day-Category Sale!",
              tableRange: "50:51",
              name: "condition",
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
          ],
        },
        {
          name: "24.07.12 - Landing",
          type: "landing",
          template: landing0524,
          css: "landing.css",
          background: "#dbd9d7",
          links: [
            {
              value: (origin, country) => origin + "content/lp24-07-12",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}202407012_01.jpg`,
            },
            {
              value: (origin, country) => origin + "content/lp24-07-12",
              query: true,
            },
            {
              value: () =>
                "https://upload.pictureserver.net/static/2024/Gif_CategorySale24-07-12.gif",
            },
            {
              value: (origin, country) => origin + "content/lp24-07-05",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}20240705b.png`,
            },
            {
              value: (origin, country) => origin + "content/lp24-07-04",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/${country}20240704b.png`,
            },
            {
              value: (origin, country) => origin + "content/lp24-07-08",
              query: true,
            },
            {
              value: (origin, country) =>
                `https://upload.pictureserver.net/static/2024/20240712_freb.jpg`,
            },
          ],
          tableQueries: [
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "12.07.24-Bastill Day-Category Sale!",
              tableRange: "14",
              name: "intro",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "12.07.24-Bastill Day-Category Sale!",
              tableRange: "16:17",
              name: "timer",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "24.05.24 - May peak reminder!",
              tableRange: "31",
              name: "shopNow",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "12.07.24-Bastill Day-Category Sale!",
              tableRange: "6",
              name: "shopNow2",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "24.05.24 - May peak reminder!",
              tableRange: "34",
              name: "soonEnding",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "24.05.24 - May peak reminder!",
              tableRange: "32",
              name: "watchNow",
            },
            {
              tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
              tableName: "12.07.24-Bastill Day-Category Sale!",
              tableRange: "50:51",
              name: "condition",
            },
            {
              tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
              tableName: "Header",
              tableRange: "?majorDimension=COLUMNS",
              name: "header",
              tableColumns: false,
            },
            {
              tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
              tableName: "Footer",
              tableRange: "?majorDimension=COLUMNS",
              name: "footer",
              tableColumns: false,
            },
            // {
            //   tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
            //   tableName: "Categories",
            //   tableRange: "A:JW?majorDimension=COLUMNS",
            //   name: "categories",
            //   tableColumns: false,
            // }
          ],
        },
      ],
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
});
