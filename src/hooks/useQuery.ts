import { MutatePromise, useExec } from "@raycast/utils";

const GRAPHQL_ENDPOINT = "https://replit.com/graphql";

const useQuery = <T>(
  query: string
): {
  data?: T | undefined;
  error?: Error | undefined;
  isLoading: boolean;
  mutate: MutatePromise<string | undefined, string | undefined, any>;
  revalidate: () => void;
} => {
  const res = useExec(
    `curl '${GRAPHQL_ENDPOINT}' -H 'Accept-Encoding: gzip, deflate' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: https://replit.com' -H 'x-requested-with: wow' --data-binary '{"query": "${query.replace(
      /\n/g,
      ""
    )}"}' --compressed`,
    {
      shell: true,
      keepPreviousData: true,
      // execute: false
    }
  );

  let values = {
    ...res,
    data: undefined
  };

  // we want to return the data.data and parse the json
  if (res.data) {
    const data = JSON.parse(res.data);
    values = { ...values, data: data.data };
  }

  return values;
};

export default useQuery;
