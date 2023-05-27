import { AI, Action, ActionPanel, Color, Detail, Icon, Image, List, environment } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import { useState } from "react";
import useCurrentUser from "./hooks/useCurrentUser";
import { FIND_REPLS_QUERY } from "./queries";
import { SearchResult } from "./types";
import AskAI from "./askTemplate";

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
    <List isLoading={isLoading} onSearchTextChange={setSearchText} searchBarPlaceholder="Search your Repls..." throttle>
      {searchText.length === 0 && !isLoading ? (
        <List.EmptyView
          title="Search your Repls"
          description="Find any Repl created by your account."
          icon={Icon.MagnifyingGlass}
        />
      ) : null}
      <List.Section title="Your Repls" subtitle={data?.length + ""}>
        {data?.map((searchResult) => (
          <SearchListItem key={searchResult.title} searchResult={searchResult} currentUserId={userId} />
        ))}
      </List.Section>
    </List>
  );
}

function SearchListItem({ searchResult, currentUserId }: { searchResult: SearchResult; currentUserId: number | null }) {
  let title = searchResult.title;

  if (currentUserId !== searchResult.owner.id) {
    title = `@${searchResult.owner.username}/${title}`;
  }

  return (
    <List.Item
      title={title}
      subtitle={searchResult.description}
      icon={{ source: searchResult.iconUrl, mask: Image.Mask.RoundedRectangle }}
      accessories={[
        searchResult.isAlwaysOn
          ? {
              tag: {
                value: "Always On",
                color: Color.Green,
              },
            }
          : {},
        searchResult.isPrivate ? { icon: Icon.Lock } : { icon: Icon.Globe, tooltip: "Public Repl" },
      ]}
      actions={
        <ActionPanel>
          <ActionPanel.Section>
            <Action.OpenInBrowser
              title="Open Workspace"
              url={`https://replit.com/${searchResult.url}`}
              icon={Icon.Code}
            />
            <Action.OpenInBrowser
              title="Open Cover Page"
              url={`https://replit.com/${searchResult.url}?v=1`}
              icon={Icon.Eye}
            />
            {searchResult.inviteUrl !== null ? (
              <Action.CopyToClipboard
                title="Copy Invite Link"
                content={`https://replit.com/${searchResult.inviteUrl}`}
                icon={Icon.AddPerson}
              />
            ) : null}
            <Action.OpenInBrowser
              title="View Repl Analytics"
              url={`https://replit.com/${searchResult.analyticsUrl}`}
              icon={Icon.LineChart}
            />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
}

/** Parse the response from the fetch query into something we can display */
export async function parseFetchResponse(response: Response): Promise<SearchResult[]> {
  const res = await response.json();

  if (res?.data?.currentUser?.search?.repls) {
    return res?.data?.currentUser?.search?.repls.map((item: SearchResult) => item);
  }

  return [];
}
