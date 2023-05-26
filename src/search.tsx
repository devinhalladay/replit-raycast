import { ActionPanel, Action, List, Detail } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import { useEffect, useMemo, useState } from "react";
import useQuery from "./hooks/useQuery";
import { SEARCH_QUERY } from "./queries";



export default function Command() {

  const [searchText, setSearchText] = useState("dev");

  const {isLoading, data, error, revalidate} = useQuery(SEARCH_QUERY({
      searchText,
      ownerId: 4428639
  }))


  const results = useMemo(() => data?.search.replResults.results.items, [isLoading, data]);

  useEffect(() => {
    // log all the values
    revalidate()
  }, [searchText]);


  console.log(results);

  // const { data, isLoading, error } = useFetch("https://replit.com/graphql", {
  //   execute: searchText.length > 0,
  //   parseResponse: parseFetchResponse,
  //   headers: {
  //     "content-type": "application/json",
  //     "x-requested-with": "wow",
  //     cookie:
  //       "<cookie here>",
  //     origin: "https://replit.com",
  //     referer: "https://replit.com/graphql",
  //   },
  //   method: "POST",
  //   body: JSON.stringify({
  //     query: `
  //       query ReplSearch {
  //         search(
  //           options: {
  //             categories: Repls
  //             query: ${searchText}
  //             categorySettings: { repls: { ownerId: ${4428639} } }
  //           }
  //         ) {
  //           ... on SearchQueryResults {
  //             replResults {
  //               results {
  //                 items {
  //                   id
  //                   title
  //                   slug
  //                   description
  //                   iconUrl
  //                   url
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `
  //   }),
  // });

  // console.log(data)
  if (error) {
    return <Detail markdown={`Error: ${error?.message}. ${error}`} />;
  }


  return (
    <List isLoading={isLoading} onSearchTextChange={(text) => {
      setSearchText(text);
      revalidate();
    }} searchBarPlaceholder="Search repls..." throttle>
      <List.Section title="Results" subtitle={results?.length + ""}>
        {results?.map((searchResult) => (
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
          <ActionPanel.Section>
            <Action.CopyToClipboard
              title="Copy Install Command"
              content={`npm install ${searchResult.title}`}
              shortcut={{ modifiers: ["cmd"], key: "." }}
            />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
}

/** Parse the response from the fetch query into something we can display */
async function parseFetchResponse(response: Response) {
  const res = await response.json();

  if (res?.data?.search?.replResults?.results?.items) {
    return res.data.search.replResults.results.items.map((item: any) => ({
      title: item.title,
      description: item.description,
      iconUrl: item.iconUrl,
      url: item.url,
    }));
  }

  return [];
}

interface SearchResult {
  title: string;
  description: string;
  iconUrl: string;
  url: string;
}