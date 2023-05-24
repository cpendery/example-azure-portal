"use client";

import { useRouter } from "next/navigation";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useEffect } from "react";
import { Spinner } from "@fluentui/react-components";

export default function Page() {
  const router = useRouter();
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    instance.handleRedirectPromise().then((result) => {
      if (result) {
        instance.setActiveAccount(result.account);
      }
    });
  }, [instance]);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [router, isAuthenticated]);

  return <Spinner />;
}
