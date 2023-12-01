# Available configuration options:

## productsOrder: OPTIONAL
It is array of objects. Each object represents a product with main_id and src. MainId it is id from CHDE shop.
In order to modify the order of products you need to specify the  order of id's by writing it in the order you want to get them.
{
  mainId: "320503",
  src: "https://beliani.info/newsletter/2022/231218Freebie1.jpg"
},

## tableColumns: REQUIRED
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
