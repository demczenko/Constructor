import { fetchToken } from "./api/fetchToken.js";
import { initApp } from "./main/initApp.js";

const token = await fetchToken(
  "1//04sWfF8Rjrp0sCgYIARAAGAQSNwF-L9IrW89ut870o5P0RpcNfZvWapkUhQvNVLpuF644Qi4fAVJtmUXiaqyiwJS5lRBU5o3t9tM"
);
if (token.Response["Status-Code"] === 200) {
  initApp({
    startId: "18060",
    translationsTableName: "Voucher 11.09.23 Clock for free",
    translationsRange: "17:26",
    conditionsRow: "36",
    countriesColumns: {
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
    token: token.access_token,
    newsletterLinks: [
      {
        value: "lp23-09-11",
        addContentOrigin: true,
      },
      {
        value: "230911_01.jpg",
        addServer: true,
      },
      {
        value: "lp23-09-11",
        addContentOrigin: true,
      },
      {
        value: "https://upload.pictureserver.net/static/230911gif.gif",
      },
      {
        value: "lp23-09-04",
        addContentOrigin: true,
      },
      {
        value: "230904.png",
        addServer: true,
      },
      {
        value: "lp23-09-01",
        addContentOrigin: true,
      },
      {
        value: "230901.png",
        addServer: true,
      },
    ],
    landingLinks: [
      {
        value: "lp23-09-11",
        addContentOrigin: true,
      },
      {
        value: "230911_01.jpg",
        addServer: true,
      },
      {
        value: "lp23-09-11",
        addContentOrigin: true,
      },
      {
        value: "https://upload.pictureserver.net/static/230911gif.gif",
      },
      {
        value: "lp23-09-04",
        addContentOrigin: true,
      },
      {
        value: "230904.png",
        addServer: true,
      },
      {
        value: "lp23-09-01",
        addContentOrigin: true,
      },
      {
        value: "230901.png",
        addServer: true,
      },
    ],
    productsOrder: [
      {
        id: "110400",
        src: "https://beliani.info/newsletter/2022/230911Freebie1.jpg",
      },
      {
        id: "249276",
        src: "https://beliani.info/newsletter/2022/230911Freebie2.jpg",
      },
      {
        id: "246185",
        src: "https://beliani.info/newsletter/2022/230911Freebie3.jpg",
      },
      {
        id: "110381",
        src: "https://beliani.info/newsletter/2022/230911Freebie4.jpg",
      },
      {
        id: "399491",
        src: "https://beliani.info/newsletter/2022/230911Category11.png",
      },
      {
        id: "356965",
        src: "https://beliani.info/newsletter/2022/230911Category12.png",
      },
      {
        id: "377788",
        src: "https://beliani.info/newsletter/2022/230911Category13.png",
      },
      {
        id: "398257",
        src: "https://beliani.info/newsletter/2022/230911Category14.png",
      },

      {
        id: "82053",
        src: "https://beliani.info/newsletter/2022/230911Category21.png",
      },
      {
        id: "375474",
        src: "https://beliani.info/newsletter/2022/230911Category22.png",
      },
      {
        id: "259052",
        src: "https://beliani.info/newsletter/2022/230911Category23.png",
      },
      {
        id: "232809",
        src: "https://beliani.info/newsletter/2022/230911Category24.png",
      },

      {
        id: "382804",
        src: "https://beliani.info/newsletter/2022/230911Category31.png",
      },
      {
        id: "364321",
        src: "https://beliani.info/newsletter/2022/230911Category32.png",
      },
      {
        id: "227452",
        src: "https://beliani.info/newsletter/2022/230911Category33.png",
      },
      {
        id: "209663",
        src: "https://beliani.info/newsletter/2022/230911Category34.png",
      },

      {
        id: "337551",
        src: "https://beliani.info/newsletter/2022/230911Category41.png",
      },
      {
        id: "300770",
        src: "https://beliani.info/newsletter/2022/230911Category42.png",
      },
      {
        id: "178034",
        src: "https://beliani.info/newsletter/2022/230911Category43.png",
      },
      {
        id: "370782",
        src: "https://beliani.info/newsletter/2022/230911Category44.png",
      },
    ],
  });
} else {
  Toastify({
    text: "Please check refresh token. " + token.error,
    escapeMarkup: false,
    duration: 3000,
  }).showToast();
}
