import { Action, ActionPanel, Color, Detail, Icon, List } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import { useState } from "react";
import useCurrentUser from "./hooks/useCurrentUser";
import { FIND_REPLS_QUERY } from "./queries";
import { SearchResult } from "./types";

export default function Command() {
  const [searchText, setSearchText] = useState("");

  const { userId, connectSid } = useCurrentUser();

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
      query: FIND_REPLS_QUERY,
    }),
  });

  if (error) {
    return <Detail markdown={`Error: ${error?.message}. ${error}`} />;
  }

  return (
    <List isLoading={isLoading} onSearchTextChange={setSearchText} searchBarPlaceholder="Search repls..." throttle>
      {searchText.length === 0 && !isLoading ? (
        <List.EmptyView
          title="Search your Repls"
          description="Find any Repl created by your account."
          icon={{
            source: Icon.MagnifyingGlass,
            tintColor: Color.Blue,
          }}
        />
      ) : null}
      <List.Section title="Results" subtitle={data?.length + ""}>
        {data?.map((searchResult) => (
          <SearchListItem key={searchResult.title} searchResult={searchResult} />
        ))}
      </List.Section>
    </List>
  );
}

function SearchListItem({ searchResult }: { searchResult: SearchResult }) {
  console.log(searchResult);
  return (
    <List.Item
      title={searchResult.title}
      subtitle={searchResult.description}
      icon={{ source: searchResult.iconUrl }}
      actions={
        <ActionPanel>
          <ActionPanel.Section>
            <Action.OpenInBrowser title="Open Workspace" url={`https://replit.com/${searchResult.url}`} icon={Icon.Code} />
            <Action.OpenInBrowser title="Open Cover Page" url={`https://replit.com/${searchResult.url}?v=1`} icon={Icon.Eye} />
            {searchResult.inviteUrl !== null ? (
              <Action.CopyToClipboard
                title="Copy Invite Link"
                content={`https://replit.com/${searchResult.inviteUrl}`}
                icon={Icon.AddPerson}
              />
            ) : null}
              <Action.OpenInBrowser title="View Repl Analytics" url={`https://replit.com/${searchResult.analyticsUrl}`} icon={Icon.LineChart} />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
}

/** Parse the response from the fetch query into something we can display */
export async function parseFetchResponse(response: Response): Promise<SearchResult[]> {
  const res = await response.json();
  console.log(res);

  if (res?.data?.search?.replResults?.results?.items) {
    return res.data.search.replResults.results.items.map((item: SearchResult) => ({
      title: item.title,
      description: item.description,
      iconUrl: item.iconUrl,
      url: item.url,
      inviteUrl: item.inviteUrl,
      analyticsUrl: item.analyticsUrl,
    }));
  }

  return [];
}
