import { useEffect, useState } from "react";
import useConnectSid from "./useConnectSid";
import { LocalStorage } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import { parseFetchResponse } from "../findRepl";

const useCurrentUser = (): number => {
  const [userId, setUserId] = useState<number | undefined>(undefined);
  const [loadingLocal, setLoadingLocal] = useState(true);

  const connectSid = useConnectSid();

  useEffect(() => {
    setLoadingLocal(true);

    const getStorage = async () => {
      const replitUserId = await LocalStorage.getItem<number>("replit-user-id");
      setUserId(replitUserId);
      setLoadingLocal(false);
    }

    getStorage();
  }, []);


  const { data, isLoading, error } = useFetch("https://replit.com/graphql", {
    execute: !loadingLocal && !userId,
    parseResponse: async function parseFetchResponse(response: Response) {
      const res = await response.json();
    
      if (res?.data?.currentUser) {
        return res.data.currentUser.id
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
      query:
        "query CurrentUser { currentUser { id } }",
    }),
    onData: async (data) => {
      await LocalStorage.setItem("replit-user-id", data);
      setUserId(data);
    }
  });

  return data;
}

export default useCurrentUser;