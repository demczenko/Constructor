# Available configuration options:
## countriesColumns: OPTIONAL (REQUIRED if you want get translations from spreadsheet)
In translation spreadsheet each country has its own column. By specifying a letter for specific country you can change column, from where data will be returned to the constructor.

## productsOrder: OPTIONAL
It is array of objects. Each object represents a product with mainId and src. MainId it is id from CHDE shop.
In order to modify the order of products you need to specify the  order of id's by writing it in the order you want to get them.

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

## translationsTableName and translationsRange: OPTIONAL (REQUIRED if you want get translations from spreadsheet)
If you want get translations directly from Google spreadsheet you have to specify the name of the translation table and range for the translations.

## conditionsRow and codesRow: OPTIONAL 
This is additional data for fetching from translations spreadsheet from CELL.
additionalTranslations: this is additional data for fetching from translations spreadsheet from RANGE.
example:
    translationsRange: "17:26",
    conditionsRow: "36",

## apiCall: OPTIONAL
If you want get products from server. It is not recomended option. Because you will make a lot of requests for creating and than recreating newsletters and landing pages.

## Shortcuts
CTRL + D Select all
CTRL + ALT + I Increment
ALT + SHIFT + F Prettier
SHIFT + ALT + ARROW LEFT/RIGHT Select to the end of the string