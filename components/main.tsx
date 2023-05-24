"use client";

import { FluentProvider, teamsDarkTheme } from "@fluentui/react-components";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { RecoilRoot } from "recoil";
import { msalConfig } from "@/utils/msal";

const pca = new PublicClientApplication(msalConfig);

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <MsalProvider instance={pca}>
      <RecoilRoot>
        <FluentProvider theme={teamsDarkTheme}>
          <main>{children}</main>
        </FluentProvider>
      </RecoilRoot>
    </MsalProvider>
  );
}
