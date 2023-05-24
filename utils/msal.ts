import { Configuration } from "@azure/msal-browser";

export const loginRequest = {
  scopes: ["User.Read"],
  redirectUri: `${process.env.NEXT_PUBLIC_REDIRECT_URI}/auth`,
};

export const msalConfig: Configuration = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID ?? "",
    authority: `https://login.microsoftonline.com/common`,
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "localStorage",
  },
};
