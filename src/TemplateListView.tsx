import { Action, ActionPanel, List } from "@raycast/api";
import { useEffect, useMemo } from "react";
import useQuery from "./hooks/useQuery";

const getQuery = (category: number) => {
  return (
    `{
    templateRepls2(options: { count: 100, category:` +
    category +
    ` }) {
      __typename
      ... on TemplateReplSearchConnection {
        category
        items {
          title
          imageUrl
          iconUrl
          templateCategories {
            title
            id
          }
        }
      }
    }
  }`
  );
};

export default function TemplateListView({ category }: { category: number }) {
  const { isLoading, data } = useQuery(getQuery(category));

  useEffect(() => {
    console.log("DATA", data);
  }, [data]);

  const results = useMemo(() => {
    if (!data) return [];
    const templates = JSON.parse(data).data.templateRepls2.items;
    return templates;
  }, [isLoading, data]);

  return (
    <List isLoading={isLoading || !data}>
      {(results || []).map((item) => (
        <List.Item
          key={item.id}
          title={item.title}
          icon={item.iconUrl}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser title={`Create a ${item.title} project`} url={`https://replit.com/${item.url}`} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
