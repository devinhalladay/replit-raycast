import { Action, ActionPanel, Color, Icon, Image, List } from "@raycast/api";
import { useMemo, useState } from "react";
import useQuery from "./hooks/useQuery";
import { CATEGORIES_QUERY, TEMPLATES_QUERY } from "./queries";
import { TemplateCategoriesResults, TemplateReplsForCategory } from "./types";

function CategoryDropdown(props: { category: number | null; onChange: (newValue: string) => void }) {
  const { category, onChange } = props;

  const { isLoading, data } = useQuery<TemplateCategoriesResults>(CATEGORIES_QUERY);

  const results = data?.templateCategories.results;

  const getIcon = (title: string) => {
    switch (title) {
      case "Languages":
        return Icon.Code;
      case "AI":
        return Icon.Wand;
      case "Websites":
        return Icon.Globe;
      case "Verified Partners":
        return Icon.CheckRosette;
      case "Graphics":
        return Icon.Image;
      case "Games":
        return Icon.GameController;
      case "Bots":
        return Icon.Message;
      case "Commmunity Featured":
        return Icon.Star;
      case "Replit Extensions":
        return Icon.Plug;
      default:
        return Icon.List;
    }
  };

  return (
    <List.Dropdown
      tooltip="Select Category"
      onChange={(newValue) => {
        onChange(newValue);
      }}
      defaultValue={category?.toString() ?? ""}
      isLoading={isLoading || !results}
    >
      <List.Dropdown.Section title="Template Categories">
        <List.Dropdown.Item key="all" title="All" value={""} icon={Icon.List} />
        {results?.map((result) => (
          <List.Dropdown.Item
            key={result.id}
            title={result.title}
            value={result.id.toString()}
            icon={getIcon(result.title)}
          />
        ))}
      </List.Dropdown.Section>
    </List.Dropdown>
  );
}

export default function TemplateListView({ category, title }: { category: number | null; title: string }) {
  const [selectedCategory, setCategory] = useState(category);

  const { isLoading, data } = useQuery<TemplateReplsForCategory>(TEMPLATES_QUERY(selectedCategory));

  const results = useMemo(() => data?.templateRepls2.items, [isLoading, data]);

  const handleChange = (newValue: string) => {
    if (newValue === "") {
      setCategory(null);
      return;
    }

    setCategory(parseInt(newValue));
  };

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
      searchBarAccessory={<CategoryDropdown category={category} onChange={handleChange} />}
    >
      <List.Section title={title + " Templates"}>
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
                      source: Icon.CheckRosette,
                      tintColor: Color.Green,
                    },
                    tooltip: "Official",
                  }
                : {},
            ]}
            actions={
              <ActionPanel>
                <Action.OpenInBrowser
                  title={`Fork Template`}
                  url={`https://replit.com/new?template=${item.id}`}
                  icon={Icon.Shuffle}
                />
                <Action.OpenInBrowser
                  title={`View cover page`}
                  url={`https://replit.com/${item.url}`}
                  icon={Icon.Globe}
                />
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
      </List.Section>
    </List>
  );
}
