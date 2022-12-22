import { UserManager, WebStorageStateStore, Log } from "oidc-client";
import {
  IDENTITY_CONFIG,
  METADATA_OIDC,
  OIDC_CONFIG,
} from "../../constants/sso-creditial";

const BASE_URL = { URL_TOKEN: "https://auth.tesora.dev" };

export default class AuthService {
  UserManager;

  constructor() {
    const settings = {
      authority: IDENTITY_CONFIG.authority,
      client_id: IDENTITY_CONFIG.client_id,
      redirect_uri: window.location.origin + "/signin-callback.html",
      // silent_redirect_uri: "https://main--nft-museum-dev.netlify.app",
      silent_redirect_uri: window.location.origin,
      post_logout_redirect_uri: window.location.origin + "/log-out.html",
      response_type: IDENTITY_CONFIG.responseType,
      scope: IDENTITY_CONFIG.scope,
      // userStore: new WebStorageStateStore({ store: window.sessionStorage }),
      metadata: {
        ...METADATA_OIDC,
      },
    };
    // this.UserManager = new UserManager({
    //   ...IDENTITY_CONFIG,
    //   userStore: new WebStorageStateStore({ store: window.sessionStorage }),
    //   metadata: {
    //     ...METADATA_OIDC,
    //   },
    // });
    this.UserManager = new UserManager(settings);
    // Logger
    Log.logger = console;
    Log.level = Log.DEBUG;
    this.UserManager.events.addUserLoaded((user) => {
      if (window.location.href.indexOf("signin-oidc") !== -1) {
        this.navigateToScreen();
      }
    });
    this.UserManager.events.addSilentRenewError((e) => {});

    this.UserManager.events.addAccessTokenExpired(() => {
      this.signinSilent();
    });
  }

  signinRedirectCallback = () => {
    this.UserManager.signinRedirectCallback().then(() => {
      "";
    });
  };

  getUser = async () => {
    // const user = await this.UserManager.getUser();
    // if (!user) {
    //   return await this.UserManager.signinRedirectCallback();
    // }
    // return user;
    return this.UserManager.getUser();
  };

  parseJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };

  signinRedirect = () => {
    // localStorage.setItem("redirectUri", window.location.pathname);
    // this.UserManager.signinRedirect({});
    return this.UserManager.signinRedirect();
  };

  navigateToScreen = () => {
    window.location.replace("/my-dashboard");
  };

  isAuthenticated = () => {
    const oidcStorage = JSON.parse(
      sessionStorage.getItem(
        `oidc.user:${BASE_URL.URL_TOKEN}:${OIDC_CONFIG.CLIENT_ID}`
      )
    );

    return !!oidcStorage && !!oidcStorage.access_token;
  };

  signinSilent = () => {
    // this.UserManager.signinSilent()
    //   .then((user) => {
    //     console.log("signed in", user);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    return this.UserManager.signinSilent();
  };
  signinSilentCallback = () => {
    this.UserManager.signinSilentCallback();
  };

  createSigninRequest = () => {
    // return this.UserManager.createSigninRequest();
    return this.UserManager.signinRedirect();
  };

  logout = async () => {
    // this.UserManager.signoutRedirect({
    //   id_token_hint: localStorage.getItem("id_token"),
    // });
    // this.UserManager.clearStaleState();
    // return this.UserManager.signoutRedirect();

    this.UserManager.signoutRedirect({
      id_token_hint: localStorage.getItem("id_token"),
    });
    this.UserManager.clearStaleState();
  };

  signoutRedirectCallback = () => {
    this.UserManager.clearStaleState()
      .then((res) => {
        this.UserManager.signoutRedirectCallback().then(() => {
          this.UserManager = new UserManager({});
          localStorage.clear();
          sessionStorage.clear();
          window.location.replace("/");
        });
      })
      .catch((err) => {
        this.UserManager.signoutRedirectCallback().then(() => {
          this.UserManager = new UserManager({});
          localStorage.clear();
          sessionStorage.clear();
          window.location.replace("/");
        });
      });
  };
}
