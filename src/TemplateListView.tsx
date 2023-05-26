import { Action, ActionPanel, Color, Icon, Image, List, environment } from "@raycast/api";
import useQuery from "./hooks/useQuery";
import { TEMPLATES_QUERY } from "./queries";
import { TemplateReplsForCategory } from "./types";

export default function TemplateListView({ category, title }: { category: number; title: string }) {
  const { isLoading, data } = useQuery<TemplateReplsForCategory>(TEMPLATES_QUERY(category));

  const results = data?.templateRepls2.items;

  return (
    <List
      isLoading={isLoading || !results}
      isShowingDetail
      navigationTitle={`${title}`}
      searchBarPlaceholder={
        title === "Languages"
          ? "Search languages…"
          : title === "Frameworks"
          ? "Search frameworks…"
          : "Search templates…"
      }
    >
      {(results || []).map((item) => (
        <List.Item
          key={item.id}
          title={item.title}
          icon={{
            source: item.iconUrl,
            mask: Image.Mask.RoundedRectangle,
          }}
          accessories={[
            item.user.username === "replit"
              ? {
                  icon: {
                    source: Icon.CheckCircle,
                    tintColor: Color.Green,
                  },
                  tooltip: "Official",
                }
              : {},
          ]}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser title={`Fork Template`} url={`https://replit.com/new?template=${item.id}`} icon={Icon.Shuffle} />
              <Action.OpenInBrowser title={`View cover page`} url={`https://replit.com/${item.url}`} icon={Icon.Globe} />
            </ActionPanel>
          }
          detail={
            <List.Item.Detail
              markdown={`${item.description} ${item.imageUrl ? `![image](${item.imageUrl})` : ""}`}
              metadata={
                <List.Item.Detail.Metadata>
                  <List.Item.Detail.Metadata.Label
                    title="Author"
                    text={item.user.username}
                    icon={{ source: item.user.image, mask: Image.Mask.Circle }}
                  />
                  <List.Item.Detail.Metadata.Label
                    title="Likes"
                    text={item.likeCount.toString() + " people liked this Template"}
                    icon={Icon.Heart}
                  />
                  <List.Item.Detail.Metadata.Label
                    title="Forks"
                    text={item.publicForkCount.toString() + " Repls use this Template"}
                    icon={Icon.Shuffle}
                  />
                  {item.tags == null || !item.tags.length ? null : (
                    <List.Item.Detail.Metadata.TagList title="Tags">
                      {item.tags.map((tag) => (
                        <List.Item.Detail.Metadata.TagList.Item text={tag.id} key={tag.id} />
                      ))}
                    </List.Item.Detail.Metadata.TagList>
                  )}
                </List.Item.Detail.Metadata>
              }
            />
          }
        />
      ))}
    </List>
  );
}
