import { config } from "./config.js";

const generateLoginURL = () => {
  const baseURL = new URL("https://accounts.google.com/o/oauth2/v2/auth");

  baseURL.searchParams.append("client_id", config.CLIENT_ID);
  baseURL.searchParams.append(
    "scope",
    "https://www.googleapis.com/auth/drive"
  );
  baseURL.searchParams.append("redirect_uri", "http://localhost:5500");
  baseURL.searchParams.append("response_type", "token");
  // baseURL.searchParams.append("access_type", "offline");


  return baseURL.href
};

export default generateLoginURL;
