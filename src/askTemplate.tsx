import { AI, Action, ActionPanel, Color, Detail, Icon, Image, LaunchType, List, environment, launchCommand, showHUD } from "@raycast/api";
import { useAI, useFetch } from "@raycast/utils";
import { useEffect, useState } from "react";
import useCurrentUser from "./hooks/useCurrentUser";
import { AI_TEMPLATES_STUB_QUERY, SEARCH_TEMPLATES_QUERY } from "./queries";
import { TemplateRepl, TemplateStatus } from "./types";

export default function AskAI({
  query = ""
}: {
  query?: string;
}) {
  const [searchText, setSearchText] = useState(query);
  const [searchTerms, setSearchterms] = useState<Array<string>>([]);
  const [selectedStatus, setSelectedStatus] = useState<TemplateStatus>(TemplateStatus.Official);

  if (!environment.canAccess(AI)) {
    showHUD("This command requires access to the AI API. Upgrade to Raycast Pro to get access.")
    return null;
  }

  const { connectSid } = useCurrentUser();

  const {
    data: templatesManifest,
    error: templatesManifestError,
  } = useFetch("https://replit.com/graphql", {
    parseResponse: parseTemplatesManifestResponse,
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

  const {
    data: keywordResponse,
    isLoading: loadingKeywordResponse,
    error: keywordResponseError,
  } = useAI(
    `Your goal is to help a user choose a Replit template for a coding project. You need to infer keywords relating to their intent and the possible technologies it can be built with. Respond with a valid JSON Javascript array of five relevant search terms that may help the user find the right template according to their query intent. Do not include the word "template" in your suggested terms.
    
    Project idea: ${searchText}.
    Example response: ["OpenAI", "Chatbot", "Python", "Data Science", "GPT-3"]

    The following data can be used to help you, but feel free to use any other keywords you think are relevant that are not included here:
    ${JSON.stringify(templatesManifest)}
  `,
    {
      execute: templatesManifest && searchText.length > 0,
      model: "gpt-3.5-turbo",
      creativity: "low",
      stream: false,
    }
  );

  useEffect(() => {
    if (keywordResponse) {
      try {
        const json = JSON.parse(keywordResponse)
        setSearchterms(json);
      } catch (e) {
        console.log(e);
      }
    }
  }, [keywordResponse]);

  const {
    data: templateResults,
    isLoading: loadingTemplateResults,
    error: templateResultsError,
  } = useFetch("https://replit.com/graphql", {
    execute: searchTerms && searchTerms.length > 1,
    parseResponse: parseTemplateResultsResponse,
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
        status: selectedStatus,
      },
      query: SEARCH_TEMPLATES_QUERY,
    }),
  });

  if (templatesManifestError) {
    console.log(templatesManifestError);

    let markdown = "Could not fetch template index. Please try again.";

    if (templatesManifestError.message.includes("429")) {
      markdown = "You have exceeded the rate limit for this command. Please try again later.";
    }

    return <Detail markdown={markdown} />;
  };

  if (keywordResponseError) {
    console.log(keywordResponseError);

    return <Detail markdown={`The AI generated unusable results. Please try again.`} />;
  }

  if (templateResultsError) {
    console.log(templateResultsError);

    return <Detail markdown={`Could not fetch templates for your search. Please try again.`} />;
  }

  return (
    <List
      onSearchTextChange={setSearchText}
      throttle
      isLoading={loadingTemplateResults || loadingKeywordResponse}
      isShowingDetail={!!templateResults?.length}
      searchText={searchText}
      searchBarPlaceholder="Describe your project idea…"
      searchBarAccessory={
        <List.Dropdown
          tooltip="Filter results"
          onChange={(value) => setSelectedStatus(value as TemplateStatus)}
          defaultValue={selectedStatus}
        >
          <List.Dropdown.Item title="All" value={TemplateStatus.All} icon={Icon.Globe} />
          <List.Dropdown.Item title="Official" value={TemplateStatus.Official} icon={{
            source: Icon.CheckRosette,
            tintColor: Color.Green,
          }} />
          <List.Dropdown.Item title="Community" value={TemplateStatus.Community} icon={{
            source: Icon.TwoPeople,
            tintColor: Color.Blue,
          }} />
        </List.Dropdown>
      }
    >
      {!templateResults?.length ? (
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
      {templateResults?.map((choice: TemplateRepl) => (
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

const parseTemplatesManifestResponse = async (response: Response) => {
  const res = await response.json();
  if (res.data?.templateRepls2?.items) {
    return res.data.templateRepls2.items.map((item: any) => ({
      title: item.title,
      description: item.description,
    }));
  }

  return [];
};

const parseTemplateResultsResponse = async (response: Response) => {
  const res = await response.json();
  if (res.data?.search?.templateResults?.results?.items) {
    // Sort the results by fork count
    return res.data.search.templateResults.results.items.sort(
      (a: TemplateRepl, b: TemplateRepl) => b.likeCount - a.likeCount
    );
  }

  return [];
};
