import { useExec } from "@raycast/utils";

const useQuery = (query: string) => {
  const res = useExec(
    `curl 'https://replit.com/graphql' -H 'Accept-Encoding: gzip, deflate' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: https://replit.com' -H 'x-requested-with: wow' --data-binary '{"query": "${query.replace(
      /\n/g,
      ""
    )}"}' --compressed`,
    {
      shell: true,
      keepPreviousData: true
    }
  );

  return res;
};

export default useQuery;
