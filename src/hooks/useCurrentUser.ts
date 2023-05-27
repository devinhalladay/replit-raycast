import { useEffect, useState } from "react";
import useConnectSid from "./useConnectSid";
import { LocalStorage, getApplications, showHUD } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import { parseFetchResponse } from "../findRepl";

const checkArcInstallation = async (): Promise<boolean> => {
  const installedApplications = await getApplications();
  const arc = installedApplications.find((app) => app.bundleId === "company.thebrowser.Browser");
  return Boolean(arc);
};

const useCurrentUser = (): {
  userId: number | null;
  connectSid: string | undefined;
} => {
  const [userId, setUserId] = useState<number | null>(null);
  const [loadingLocal, setLoadingLocal] = useState(true);

  const isArcInstalled = checkArcInstallation();
  if (!isArcInstalled) {
    showHUD("Only supports Arc Browser for now. Please install it and try again.");
    return {
      userId: null,
      connectSid: undefined,
    };
  }

  const connectSid = useConnectSid();

  useEffect(() => {
    setLoadingLocal(true);

    const getStorage = async () => {
      const replitUserId = await LocalStorage.getItem<number>("replit-user-id");
      setUserId(replitUserId ?? null);
      setLoadingLocal(false);
    };

    getStorage();
  }, []);

  const { data, isLoading, error } = useFetch("https://replit.com/graphql", {
    execute: !loadingLocal && !userId,
    parseResponse: async function parseFetchResponse(response: Response) {
      const res = await response.json();

      if (res?.data?.currentUser) {
        return res.data.currentUser.id;
      }

      return null;
    },
    headers: {
      accept: "*/*",
      "content-type": "application/json",
      "x-requested-with": "1",
      cookie: "connect.sid=" + connectSid,
      origin: "https://replit.com",
      referer: "https://replit.com/graphql",
      "user-agent": "Raycast extension",
    },
    method: "POST",
    keepPreviousData: false,
    body: JSON.stringify({
      operationName: "CurrentUser",
      query: "query CurrentUser { currentUser { id } }",
    }),
    onData: async (data) => {
      await LocalStorage.setItem("replit-user-id", data);
      setUserId(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return {
    userId: data,
    connectSid,
  };
};

export default useCurrentUser;
