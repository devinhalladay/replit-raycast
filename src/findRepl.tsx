import { ActionPanel, Action, List, Detail } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import { useEffect, useMemo, useState } from "react";
import useConnectSid from "./hooks/useConnectSid";
import { getPreferenceValues } from "@raycast/api";
import { LocalStorage } from "@raycast/api";
import useCurrentUser from "./hooks/useCurrentUser";

export default function Command() {
  const [searchText, setSearchText] = useState("");
  const connectSid = useConnectSid();

  const userId = useCurrentUser();

  const { data, isLoading, error } = useFetch("https://replit.com/graphql", {
    execute: searchText.length > 0,
    parseResponse: parseFetchResponse,
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
      operationName: "ReplSearch",
      variables: {
        q: searchText,
        ownerId: userId,
      },
      query:
        "query ReplSearch($q: String!, $ownerId: Int!) {\n  search(\n    options: {categories: Repls, query: $q, categorySettings: {repls: {ownerId: $ownerId}}}\n  ) {__typename\n ... on UnauthorizedError {message} \n    ... on SearchQueryResults {\n      replResults {\n        results {\n          items {\n            id\n            title\n            slug\n            description\n            iconUrl\n  url\n          }\n        }\n      }\n    }\n  }\n}\n",
    }),
  });

  if (error) {
    return <Detail markdown={`Error: ${error?.message}. ${error}`} />;
  }

  return (
    <List isLoading={isLoading} onSearchTextChange={setSearchText} searchBarPlaceholder="Search repls..." throttle>
      <List.Section title="Results" subtitle={data?.length + ""}>
        {data?.map((searchResult: SearchResult) => (
          <SearchListItem key={searchResult.title} searchResult={searchResult} />
        ))}
      </List.Section>
    </List>
  );
}

function SearchListItem({ searchResult }: { searchResult: SearchResult }) {
  return (
    <List.Item
      title={searchResult.title}
      subtitle={searchResult.description}
      icon={{ source: searchResult.iconUrl }}
      actions={
        <ActionPanel>
          <ActionPanel.Section>
            <Action.OpenInBrowser title="Open in Browser" url={`https://replit.com/${searchResult.url}`} />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
}

/** Parse the response from the fetch query into something we can display */
export async function parseFetchResponse(response: Response) {
  const res = await response.json();
  console.log(res);

  if (res?.data?.search?.replResults?.results?.items) {
    return res.data.search.replResults.results.items.map((item: any) => ({
      title: item.title,
      description: item.description,
      iconUrl: item.iconUrl,
      url: item.url,
    }));
  }

  if (res?.data?.currentUser) {
    return res.data.currentUser.id
  }

  return [];
}

interface SearchResult {
  title: string;
  description: string;
  iconUrl: string;
  url: string;
}
