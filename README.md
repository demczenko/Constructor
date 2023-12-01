# Available configuration options:

## productsOrder: OPTIONAL
It is data from the SA Details CHDE document parsed by https://www.papaparse.com/demo web page.
Choose: Local File(s) and Header row on the left side and upload file from SA details.
Copy object from console and paste it.
Example:
  productsOrder: [
    {
      "SA#": "232789",
      "SA Name": "NEIVA",
      Newsletter_Price_Low: "1'109.99",
      Newsletter_Price_High: "1'169.99",
      "Shop URL":
        "http://www./whirlpool-badewanne-weiss-eckmodell-mit-led-150-cm-links-neiva.html",
      "Parent category URL":
        "http://www./badewanne-and-whirlpools/alle+produkte/",
      "Main Category URL": "http://www./badewanne-and-whirlpools/eckbadewanne/",
    },
    {
      "SA#": "263355",
      "SA Name": "NEVIS",
      Newsletter_Price_Low: "ab 829.99",
      Newsletter_Price_High: "",
      "Shop URL":
        "http://www./badewanne-freistehend-schwarz-oval-170-x-80-cm-nevis.html",
      "Parent category URL":
        "http://www./badewanne-and-whirlpools/alle+produkte/",
      "Main Category URL":
        "http://www./badewanne-and-whirlpools/freistehende-badewanne/",
    },
    {
      "SA#": "252673",
      "SA Name": "CARRERA",
      Newsletter_Price_Low: "789.99",
      Newsletter_Price_High: "",
      "Shop URL":
        "http://www./badewanne-freistehend-burgunderrot-oval-170-x-80-cm-carrera.html",
      "Parent category URL":
        "http://www./badewanne-and-whirlpools/alle+produkte/",
      "Main Category URL":
        "http://www./badewanne-and-whirlpools/freistehende-badewanne/",
    },
    {
      "SA#": "93618",
      "SA Name": "IBIZA",
      Newsletter_Price_Low: "1'159.99",
      Newsletter_Price_High: "",
      "Shop URL": "http://www./badewanne-freistehend-rund-ibiza.html",
      "Parent category URL":
        "http://www./badewanne-and-whirlpools/alle+produkte/",
      "Main Category URL":
        "http://www./badewanne-and-whirlpools/freistehende-badewanne/",
    },
    {
      "SA#": "193864",
      "SA Name": "DELLA",
      Newsletter_Price_Low: "469.99",
      Newsletter_Price_High: "",
      "Shop URL":
        "http://www./wannenarmatur-freistehend-gold-glanzend-120-cm-della.html",
      "Parent category URL": "http://www./armaturen/alle+produkte/",
      "Main Category URL": "http://www./armaturen/wannenarmaturen./",
    },
    {
      "SA#": "193866",
      "SA Name": "KAGERA",
      Newsletter_Price_Low: "149.99",
      Newsletter_Price_High: "",
      "Shop URL": "http://www./wasserhahn-schwarz-kagera.html",
      "Parent category URL": "http://www./armaturen/alle+produkte/",
      "Main Category URL": "http://www./armaturen/wasserhahne/",
    },
    {
      "SA#": "198022",
      "SA Name": "GURARA",
      Newsletter_Price_Low: "269.99",
      Newsletter_Price_High: "",
      "Shop URL":
        "http://www./dusche-set-mit-kopfbrause-messing-silber-gurara.html",
      "Parent category URL": "http://www./armaturen/alle+produkte/",
      "Main Category URL": "http://www./armaturen/duschsets/",
    },
    {
      "SA#": "190626",
      "SA Name": "VICTORIA",
      Newsletter_Price_Low: "209.99",
      Newsletter_Price_High: "439.99",
      "Shop URL": "http://www./wannenarmatur-freistehend-kupfer-victoria.html",
      "Parent category URL": "http://www./armaturen/alle+produkte/",
      "Main Category URL": "http://www./armaturen/wannenarmaturen./",
    },
    {
      "SA#": "370713",
      "SA Name": "TALPE",
      Newsletter_Price_Low: "84.99",
      Newsletter_Price_High: "",
      "Shop URL":
        "http://www./aufbewahrungskorb-bambusholz-dunkelbraun-5er-set-talpe.html",
      "Parent category URL": "http://www./wohnaccessoires/alle+produkte/",
      "Main Category URL": "http://www./wohnaccessoires/boxen-and-kisten/",
    },
    {
      "SA#": "370679",
      "SA Name": "KALUTARA",
      Newsletter_Price_Low: "59.99",
      Newsletter_Price_High: "64.99",
      "Shop URL":
        "http://www./korb-mit-deckel-bambusholz-hellbraun-rechteckig-kalutara.html",
      "Parent category URL": "http://www./wohnaccessoires/alle+produkte/",
      "Main Category URL": "http://www./wohnaccessoires/boxen-and-kisten/",
    },
    {
      "SA#": "364482",
      "SA Name": "ORNACH",
      Newsletter_Price_Low: "99.99",
      Newsletter_Price_High: "",
      "Shop URL": "http://www./2er-set-jute-korbe-natur-ornach.html",
      "Parent category URL": "http://www./wohnaccessoires/alle+produkte/",
      "Main Category URL": "http://www./wohnaccessoires/boxen-and-kisten/",
    },
    {
      "SA#": "320369",
      "SA Name": "TAYASU",
      Newsletter_Price_Low: "79.99",
      Newsletter_Price_High: "",
      "Shop URL": "http://www./duschregal-eisen-schwarz-2-etagen-tayasu.html",
      "Parent category URL": "http://www./badaccessoires/alle+produkte/",
      "Main Category URL": "http://www./badaccessoires/badezimmerschraenke/",
    },
    {
      "SA#": "368237",
      "SA Name": "YVELINES",
      Newsletter_Price_Low: "89.99",
      Newsletter_Price_High: "",
      "Shop URL":
        "http://www./wandspiegel-mit-ausziehfunktion-o-19-cm-silber-yvelines.html",
      "Parent category URL": "http://www./spiegel-ch/alle+produkte/",
      "Main Category URL": "http://www./spiegel-ch/schminkspiegel/",
    },
    {
      "SA#": "344325",
      "SA Name": "CHATEAUROUX",
      Newsletter_Price_Low: "309.99",
      Newsletter_Price_High: "",
      "Shop URL":
        "http://www./badspiegel-mit-led-beleuchtung-oval-120-x-60-cm-chateauroux.html",
      "Parent category URL": "http://www./spiegel-ch/alle+produkte/",
      "Main Category URL": "http://www./spiegel-ch/badezimmerspiegel/",
    },
    {
      "SA#": "147960",
      "SA Name": "MARTINET",
      Newsletter_Price_Low: "209.99",
      Newsletter_Price_High: "",
      "Shop URL":
        "http://www./badspiegel-mit-led-beleuchtung-rechteckig-60-x-80-cm-martinet.html",
      "Parent category URL": "http://www./spiegel-ch/alle+produkte/",
      "Main Category URL": "http://www./spiegel-ch/badezimmerspiegel/",
    },
    {
      "SA#": "203129",
      "SA Name": "VIRIAT",
      Newsletter_Price_Low: "209.99",
      Newsletter_Price_High: "",
      "Shop URL":
        "http://www./badspiegel-mit-led-beleuchtung-oval-60-x-80-cm-viriat.html",
      "Parent category URL": "http://www./spiegel-ch/alle+produkte/",
      "Main Category URL": "http://www./spiegel-ch/badezimmerspiegel/",
    },
  ],

##productsImages: REQUIRED WHEN ##productsOrder setted
Images form provided products.
Key: main_id of product.
Value: image of product.
Example:
  productsImages: {
    320503: "https://beliani.info/newsletter/2022/231218Freebie1.jpg",
    320374: "https://beliani.info/newsletter/2022/231218Freebie2.jpg",
    320485: "https://beliani.info/newsletter/2022/231218Freebie3.jpg",
    320521: "https://beliani.info/newsletter/2022/231218Freebie4.jpg",
    316613: "https://beliani.info/newsletter/2022/231218Freebie5.jpg",
    230355: "https://beliani.info/newsletter/2022/231218Freebie6.jpg",

    232789: "https://beliani.info/newsletter/2022/231218Category11.png",
    263355: "https://beliani.info/newsletter/2022/231218Category12.png",
    252673: "https://beliani.info/newsletter/2022/231218Category13.png",
    93618: "https://beliani.info/newsletter/2022/231218Category14.png",

    193864: "https://beliani.info/newsletter/2022/231218Category21.png",
    193866: "https://beliani.info/newsletter/2022/231218Category22.png",
    198022: "https://beliani.info/newsletter/2022/231218Category23.png",
    190626: "https://beliani.info/newsletter/2022/231218Category24.png",

    370713: "https://beliani.info/newsletter/2022/231218Category31.png",
    370679: "https://beliani.info/newsletter/2022/231218Category32.png",
    364482: "https://beliani.info/newsletter/2022/231218Category33.png",
    320369: "https://beliani.info/newsletter/2022/231218Category34.png",

    368237: "https://beliani.info/newsletter/2022/231218Category41.png",
    344325: "https://beliani.info/newsletter/2022/231218Category42.png",
    147960: "https://beliani.info/newsletter/2022/231218Category43.png",
    203129: "https://beliani.info/newsletter/2022/231218Category44.png",
  },

## tableColumns: REQUIRED if table queries used
![image](https://github.com/demczenko/Constructor/assets/134509169/bcb902d3-2938-4e6a-b51f-c1092eae2c20)

Should be added if you want to make request to spreadsheet.
{
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

## startId: REQUIRED
It is id of Parent campaign. Chde created first (it is parent campaign) and than the rest one by clicking on the button "Add Newsletter Family"

countries: By default constructor will create ID in that ordering 
   "CHDE", id 1
   "CHFR", id 2
   "AT", id 3
   "CZ", id 4
   "DE", id 5 and ...
   "DK",
   "FI",
   "FR",
   "HU",
   "IT",
   "NL",
   "NO",
   "PL",
   "PT",
   "SE",
   "SK",
   "ES",
   "UK" id: 18
Which is fit for almost every situation.
But if you want to change ordering. You have to specify the following ordering.
Example:
    countries: [
      "CHDE",
      "FR",
      "HU",
      "IT",
      "NL",
      "NO",
      "PL",
      "PT",
      "SE",
      "SK",
      "ES",
      "UK",
      "CHFR",
      "AT",
      "CZ",
      "DE",
      "DK",
      "FI",
    ]

## xlsPath: OPTIONAL
By specifying xlsPath you can change the way products will be rendered from.
You can download the excel files for each country from SA Details and name them as "country".xls and move to the xls folder.
example: data/xls/fi.xls

## newsletterLinks and landingLinks: REQUIRED 
You have to specify the links in order to start the application.
Sometimes we have different links for newsletter and landing, and this is why you have to specify them separately.
example:
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

addContentOrigin: it is for adding https://www.beliani.ch/content to value you provided
addServer: it is for adding https://beliani.info/newsletter/2022/ to value you provided
addOrigin: it is for adding https://www.beliani.ch/ to value you provided
if you will not specify any additional rules. value will be ignored

## token: OPTIONAL (REQUIRED if you want get translations from spreadsheet)
This is the refresh token you can get it from: https://developers.google.com/oauthplayground/
Step 1: Select Google Sheets API v4 --> https://www.googleapis.com/auth/spreadsheets --> Click Authorize APIs
Step 2: Click on Exchange authorization code for tokens --> Copy Refresh token and paste it into fetchToken function.
This token allows you to fetch translations directly from Google spreadsheet.
example:
   const token = await fetchToken(
   "1//04sWfF8Rjrp0sCgYIARAAGAQSNwF-L9IrW89ut870o5P0RpcNfZvWapkUhQvNVLpuF644Qi4fAVJtmUXiaqyiwJS5lRBU5o3t9tM"
   );

## tableQueries: OPTIONAL if not provided translations data will be used from data/text.js
![image](https://github.com/demczenko/Constructor/assets/134509169/bb97d0ea-a4f5-44f8-b76e-0fb43973296a)

If you want get translations form spreadsheets.
Object keys: tableId, tableName, tableRange, name is **REQUIRED** name of these keys **cannot** be changed.
Example:
  tableQueries: [
    {
      tableId: "15hF-nbul3ZtRqoMiIxI15Ez5lGhee1gUeM3njz5ixtE",
      tableName: "Voucher - 23.10.23 - Free towels",
      tableRange: "18:26",
      name: "magdaTranslations",
    },
    {
      tableId: "15hF-nbul3ZtRqoMiIxI15Ez5lGhee1gUeM3njz5ixtE",
      tableName: "Voucher - 23.10.23 - Free towels",
      tableRange: "40",
      name: "Myconditions",
    },
    {
      tableId: "15hF-nbul3ZtRqoMiIxI15Ez5lGhee1gUeM3njz5ixtE",
      tableName: "Voucher - 23.10.23 - Free towels",
      tableRange: "31",
      name: "Mycode",
    },
    {
      tableId: "15hF-nbul3ZtRqoMiIxI15Ez5lGhee1gUeM3njz5ixtE",
      tableName: "Voucher - 30.10.23 - Cushion pyramid",
      tableRange: "59",
      name: "myNew",
    },
  ],

## serverCategories/serverHeader/serverProducts: OPTIONAL
If you want get products/header or categories from server.
For products it is not recomended option. Because you will make a lot of requests for creating and than recreating newsletters and landing pages.

## Shortcuts
CTRL + D Select all
CTRL + ALT + I Increment
ALT + SHIFT + F Prettier
SHIFT + ALT + ARROW LEFT/RIGHT Select to the end of the string
