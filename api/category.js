import endpoint from "./endpoint.js";

export async function getCampaign(category, country) {
  try {
    const response = await fetch(
      `https://${endpoint}:7777/category/?category=${category}&country=${country}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
