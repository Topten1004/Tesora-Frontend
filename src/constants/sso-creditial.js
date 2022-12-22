const BASE_URL = { URL_TOKEN: "https://auth.tesora.dev" };
const USER_MANAGEMENT = {
  AUTH_CODE: "/connect/authorize?",
};
const SSO_CREDITIAL = {
  CLIENT_ID: "ShareEngineClient",
  CLIENT_SECRET: "tYWfEoQU9tHm8UH6TqiZ",
  SCOPE: "MyCOM_API_Scope",
  GRANT_TYPE: "client_credentials",
};

const OIDC_CONFIG = {
  CLIENT_ID: "NFT_Museum_dev",
  SCOP: "openid profile email MyCOM_API_Scope",
  RESPONSE_TYPE: "code",
  GRANT_TYPE: "authorization_code",
  // REDIRECT_URL: "https://auth.tesora.dev/connect/authorize?client_id=NFT_Museum_dev&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid%20profile%20email&response_type=code&grant_type=authorization_code"
};

const url = `${BASE_URL.URL_TOKEN}${USER_MANAGEMENT.AUTH_CODE}client_id=${OIDC_CONFIG.CLIENT_ID}&redirect_uri=https://main--nft-museum-dev.netlify.app&scope=${OIDC_CONFIG.SCOP}&response_type=${OIDC_CONFIG.RESPONSE_TYPE}&grant_type=${OIDC_CONFIG.GRANT_TYPE}&output=embed`;

const IDENTITY_CONFIG = {
  authority: BASE_URL.URL_TOKEN, //(string): The URL of the OIDC provider.
  client_id: OIDC_CONFIG.CLIENT_ID, //(string): Your client application's identifier as registered with the OIDC provider.
  redirect_uri: "https://main--nft-museum-dev.netlify.app", //The URI of your client application to receive a response from the OIDC provider.
  login: url, //BASE_URL.URL_TOKEN + USER_MANAGEMENT.AUTH_CODE,
  automaticSilentRenew: false, //(boolean, default: false): Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.
  loadUserInfo: false, //(boolean, default: true): Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.
  silent_redirect_uri: "https://main--nft-museum-dev.netlify.app", //(string): The URL for the page containing the code handling the silent renew.
  post_logout_redirect_uri: "https://main--nft-museum-dev.netlify.app", // (string): The OIDC post-logout redirect URI.
  audience: "https://example.com", //is there a way to specific the audience when making the jwt
  responseType: OIDC_CONFIG.RESPONSE_TYPE, //(string, default: 'id_token'): The type of response desired from the OIDC provider.
  grantType: OIDC_CONFIG.GRANT_TYPE,
  scope: OIDC_CONFIG.SCOP, //(string, default: 'openid'): The scope being requested from the OIDC provider.
  webAuthResponseType: "id_token token",
};

const METADATA_OIDC = {
  issuer: "https://identityserver",
  jwks_uri: BASE_URL.URL_TOKEN + "/.well-known/openid-configuration/jwks",
  authorization_endpoint: BASE_URL.URL_TOKEN + "/connect/authorize",
  token_endpoint: BASE_URL.URL_TOKEN + "/connect/token",
  userinfo_endpoint: BASE_URL.URL_TOKEN + "/connect/userinfo",
  end_session_endpoint:
    BASE_URL.URL_TOKEN +
    `/connect/endsession?post_logout_redirect_uri=${encodeURIComponent(
      "https://main--nft-museum-dev.netlify.app"
    )}&client_id=${OIDC_CONFIG.CLIENT_ID}&id_token_hint=${localStorage.getItem(
      "id_token"
    )}&output=embed`,
  check_session_iframe: BASE_URL.URL_TOKEN + "/connect/checksession",
  revocation_endpoint: BASE_URL.URL_TOKEN + "/connect/revocation",
  introspection_endpoint: BASE_URL.URL_TOKEN + "/connect/introspect",
};

const localStorageSessionKey = () => {
  return process.env.NODE_ENV === "production"
    ? "wmsjshkdtrymmxbsspolggmlsodjfeoj"
    : "ltunnjnihqtczupucmszkyyuybhsxuwi";
};

export {
  SSO_CREDITIAL,
  OIDC_CONFIG,
  IDENTITY_CONFIG,
  METADATA_OIDC,
  localStorageSessionKey,
};
