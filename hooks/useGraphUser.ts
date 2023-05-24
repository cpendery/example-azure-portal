import useSWR from "swr";
import { useMsal } from "@azure/msal-react";
import { useCallback } from "react";
import { loginRequest } from "@/utils/msal";

export interface GraphUser {
  displayName: string;
  mail: string;
}

export default function useGraphUser() {
  const { instance } = useMsal();

  const fetcher = useCallback(async (): Promise<GraphUser> => {
    const authResult = await instance.acquireTokenSilent(loginRequest);
    const result = await fetch("https://graph.microsoft.com/v1.0/me", {
      headers: { Authorization: `Bearer ${authResult.accessToken}` },
    });
    return result.json();
  }, [instance]);

  const { data } = useSWR("/microsoft/graph/me", fetcher, {
    suspense: true,
  });
  return data;
}
