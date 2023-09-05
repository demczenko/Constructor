import endpoint from "./endpoint.js";

export async function fetchToken(token) {
  if (!token) {
    throw new Error("Token not found");
  }
  try {
    const response = await fetch(
      `http://${endpoint}:7777/api/refresh/?token=${token}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
