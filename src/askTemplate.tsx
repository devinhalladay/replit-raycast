import { Action, ActionPanel, Detail, Icon, Image, List } from "@raycast/api";
import { useAI, useFetch } from "@raycast/utils";
import { useEffect, useState } from "react";
import useCurrentUser from "./hooks/useCurrentUser";
import { AI_TEMPLATES_STUB_QUERY, SEARCH_TEMPLATES_QUERY } from "./queries";
import { launchCommand, LaunchType } from "@raycast/api";

export default function Command() {
  const [searchText, setSearchText] = useState("");
  const [searchTerms, setSearchterms] = useState<Array<string>>([]);

  const { connectSid } = useCurrentUser();

  const {
    data: templatesData,
    isLoading: loadingTemplates,
    error: templatesError,
  } = useFetch("https://replit.com/graphql", {
    parseResponse: async (response) => {
      const res = await response.json();
      if (res.data?.templateRepls2?.items) {
        return res.data.templateRepls2.items.map((item: any) => ({
          title: item.title,
          description: item.description,
        }));
      }

      return [];
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
    keepPreviousData: true,
    body: JSON.stringify({
      operationName: "TemplateRepls",
      query: AI_TEMPLATES_STUB_QUERY,
    }),
  });

  const { data, isLoading } = useAI(
    `
    You are helping a user choose a template for a coding project. The user's query is ${searchText}. Respond with a valid JSON Javascript array of five relevant search terms that may help the user find the right template according to their query intent. Do not include the word "template" in your suggested terms.

    Example response: ["OpenAI", "Chatbot", "Python", "Data Science", "GPT-3"]

    You can use the following data to help you identify possible search terms from titles and descriptions. 
    ${JSON.stringify(templatesData)}
  `,
    {
      execute: templatesData && searchText.length > 0,
      model: "gpt-3.5-turbo",
      creativity: "low",
      stream: false,
    }
  );

  useEffect(() => {
    if (data) {
      // console.log(typeof data, JSON.parse(data));
      setSearchterms(JSON.parse(data));
    }
  }, [data]);

  const {
    data: choices,
    isLoading: loadingchoices,
    error: choiceserror,
  } = useFetch("https://replit.com/graphql", {
    execute: searchTerms && searchTerms.length > 1,
    parseResponse: async (response) => {
      const res = await response.json();
      console.log(res);

      if (res.data?.search?.templateResults?.results?.items) {
        return res.data.search.templateResults.results.items;
      }

      return [];
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
    keepPreviousData: true,
    body: JSON.stringify({
      operationName: "SearchTemplates",
      variables: {
        query: searchTerms.join(" "),
        categories: ["Templates"],
      },
      query: SEARCH_TEMPLATES_QUERY,
    }),
  });

  if (templatesError) {
    return <Detail markdown={`Error: ${templatesError?.message}. ${templatesError}`} />;
  }

  return (
    <List onSearchTextChange={setSearchText} throttle isLoading={loadingchoices} isShowingDetail={!!choices?.length}>
      {!choices?.length ? (
        <List.EmptyView
          title="Ask AI for a Template"
          description="Describe your project idea and Raycast AI will help you find a relevant template to get started with."
          icon={Icon.Wand}
          actions={
            <ActionPanel>
              <Action
                onAction={async () => {
                  await launchCommand({ name: "index", type: LaunchType.UserInitiated });
                }}
                title="Browse Templates"
              />
            </ActionPanel>
          }
        />
      ) : null}
      {choices?.map((choice: any) => (
        <List.Item
          icon={{
            source: choice.iconUrl,
            mask: Image.Mask.RoundedRectangle,
          }}
          key={choice.id}
          title={choice.title}
          subtitle={choice.description}
          detail={
            <List.Item.Detail
              markdown={`${choice.description} ${choice.imageUrl ? `![image](${choice.imageUrl})` : ""}`}
              metadata={
                <List.Item.Detail.Metadata>
                  <List.Item.Detail.Metadata.Label
                    title="Author"
                    text={choice.user.username}
                    icon={{ source: choice.user.image, mask: Image.Mask.Circle }}
                  />
                  <List.Item.Detail.Metadata.Label
                    title="Likes"
                    text={choice.likeCount.toString() + " people liked this Template"}
                    icon={Icon.Heart}
                  />
                  <List.Item.Detail.Metadata.Label
                    title="Forks"
                    text={choice.publicForkCount.toString() + " Repls use this Template"}
                    icon={Icon.Shuffle}
                  />
                  {choice.tags == null || !choice.tags.length ? null : (
                    <List.Item.Detail.Metadata.TagList title="Tags">
                      {choice.tags.map((tag) => (
                        <List.Item.Detail.Metadata.TagList.Item text={tag.id} key={tag.id} />
                      ))}
                    </List.Item.Detail.Metadata.TagList>
                  )}
                </List.Item.Detail.Metadata>
              }
            />
          }
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={`https://replit.com/${choice.url}`} title="Open Cover Page" />
              <Action.OpenInBrowser
                title={`Fork Template`}
                url={`https://replit.com/new?template=${choice.id}`}
                icon={Icon.Shuffle}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
