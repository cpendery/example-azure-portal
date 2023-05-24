"use client";

import styles from "./page.module.css";
import { Button } from "@fluentui/react-components";
import { Display } from "@fluentui/react-components";
import { useCallback } from "react";
import { useMsal } from "@azure/msal-react";
import Main from "@/components/main";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { loginRequest } from "@/utils/msal";
import UserInfo from "@/components/userInfo";

function Login() {
  const { instance } = useMsal();
  const onLoginClick = useCallback(async () => {
    await instance.loginRedirect(loginRequest);
  }, [instance]);
  return (
    <>
      <Display className={styles.title}>Welcome</Display>
      <Button onClick={onLoginClick}>Sign In</Button>
    </>
  );
}

function Home() {
  const { instance } = useMsal();
  const onLogoutClick = useCallback(async () => {
    await instance.logoutRedirect({ onRedirectNavigate: (_) => false });
  }, [instance]);

  return (
    <>
      <UserInfo />
      <Button onClick={onLogoutClick}>Sign Out</Button>
    </>
  );
}

export default function Page() {
  return (
    <Main>
      <AuthenticatedTemplate>
        <Home />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Login />
      </UnauthenticatedTemplate>
    </Main>
  );
}
