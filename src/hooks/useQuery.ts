import { MutatePromise, useExec } from "@raycast/utils";
import { useState } from "react";

const GRAPHQL_ENDPOINT = "https://replit.com/graphql";

const useQuery = <T>(
  query: string
): {
  data?: T | undefined;
  error?: Error | undefined;
  isLoading: boolean;
  mutate: MutatePromise<string | undefined, string | undefined, any>;
  revalidate: () => void;
  refetch: () => void;
} => {
  // For unknown reasons all fetch requests, including Raycast's useFetch, are blocked by Cloudflare and Replit's GraphQL API. So we're using curl instead, because it appears to work.
  const [queryStr, setQueryStr] = useState(query);
  const res = useExec(
    `curl '${GRAPHQL_ENDPOINT}' -H 'Accept-Encoding: gzip, deflate' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: https://replit.com' -H 'x-requested-with: wow' --data-binary '{"query": "${queryStr.replace(
      /\n/g, // Remove newlines because they break the curl command
      ""
    )}"}' --compressed`,
    {
      shell: true,
      keepPreviousData: true,
    }
  );

  let values = {
    ...res,
    data: undefined
  };

  // Returning the parsed JSON so it's faster to work with
  if (res.data) {
    const data = JSON.parse(res.data);
    values = { ...values, data: data.data };
  }

  const refetch = () => {
    setQueryStr(query);
  };

  return {
    ...values,
    refetch,
  };
};

export default useQuery;
