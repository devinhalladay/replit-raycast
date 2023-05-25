import { Action, ActionPanel, List } from "@raycast/api";
import { useMemo } from "react";
import useQuery from "./hooks/useQuery";
import { TEMPLATES_QUERY } from "./queries";

export default function TemplateListView({ category }: { category: number }) {
  const { isLoading, data } = useQuery(TEMPLATES_QUERY(category));

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
