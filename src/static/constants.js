export const DefaultLocale = "EN";

export const config = {
  authority: "https://auth.tesora.dev",
  client_id: "NFT_Museum_dev",
  redirect_uri: "http://localhost:3000",
  response_type: "code",
  scope: "email openid MyCOM_API_Scope profile roles",
  post_logout_redirect_uri: "http://localhost:3000",
};

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://nftapplication.api.mycom.world"
    : "https://nftapplication.api.mycom.world";

export const PRIVATE_TESORA_API = `${BASE_URL}/api/v1/`;
export const PRIVATE_TESORA_IMAGE_API = `${BASE_URL}`;
