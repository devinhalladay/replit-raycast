import { Action, ActionPanel, List } from "@raycast/api";
import useQuery from "./hooks/useQuery";
import { TEMPLATES_QUERY } from "./queries";
import { TemplateReplsForCategory } from "./types";

export default function TemplateListView({ category }: { category: number }) {
  const { isLoading, data } = useQuery<TemplateReplsForCategory>(TEMPLATES_QUERY(category));

  const results = data?.templateRepls2.items;

  return (
    <List isLoading={isLoading || !results}>
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
