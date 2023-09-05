import { priceFormats } from "../../helpers/priceFormats.js";

export default {
  UK: (price) => {
    return `save ${priceFormats["UK"](Math.round(price))}`
  },
  PL: (price) => {
    return `${priceFormats["PL"](Math.round(price))} taniej`
  },
  DE: (price) => {
    return `Spare ${priceFormats["DE"](Math.round(price))}`
  },
  AT: (price) => {
    return `Spare ${priceFormats["AT"](Math.round(price))}`
  },
  CHDE: (price) => {
    return `Spare ${priceFormats["CHDE"](Math.round(price))}`
  },
  NL: (price) => {
    return `bespaar ${priceFormats["NL"](Math.round(price))}`
  },
  FR: (price) => {
    return `${priceFormats["FR"](Math.round(price))}`
  },
  CHFR: (price) => {
    return `Économisez ${priceFormats["CHFR"](Math.round(price))}`
  },
  ES: (price) => {
    return `Ahorra ${priceFormats["ES"](Math.round(price))}`
  },
  PT: (price) => {
    return `Poupe ${priceFormats["PT"](Math.round(price))}`
  },
  IT: (price) => {
    return `Risparmia ${priceFormats["IT"](Math.round(price))}`
  },
  DK: (price) => {
    return `Spar ${priceFormats["DK"](Math.round(price))}`
  },
  NO: (price) => {
    return `Spar ${priceFormats["NO"](Math.round(price))}`
  },
  FI: (price) => {
    return `Säästä ${priceFormats["FI"](Math.round(price))}`
  },
  SE: (price) => {
    return `Spara ${priceFormats["SE"](Math.round(price))}`
  },
  CZ: (price) => {
    return `Ušetřete ${priceFormats["CZ"](Math.round(price))}`
  },
  SK: (price) => {
    return `Ušetrite ${priceFormats["SK"](Math.round(price))}`
  },
  HU: (price) => {
    return `Spórolj ${priceFormats["HU"](Math.round(price))}`
  },
};
