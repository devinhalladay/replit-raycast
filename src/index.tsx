import { Action, ActionPanel, List, useNavigation } from "@raycast/api";
import { useExec } from "@raycast/utils";

import { useEffect, useMemo } from "react";
import TemplateList from "./TemplateList";

export default function Command() {
  const { push } = useNavigation();

  const { isLoading, data } = useExec(
    `curl 'https://replit.com/graphql' -H 'Accept-Encoding: gzip, deflate' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: https://replit.com' -H 'x-requested-with: wow' --data-binary '{"query": "{templateRepls2(options: {count: 100,category:10}) {__typename ... on TemplateReplSearchConnection {category items {title templateCategories {title id}}}}templateCategories {__typename ... on TemplateCategoriesResults {results {... on TemplateCategory {id title slug}}}}}"}' --compressed`,
    {
      shell: true,
    }
  );

  const response = useMemo(() => JSON.parse(data), [isLoading, data]);

  const results = useMemo(() => {
    console.log(data);
    if (!response) return [];
    const templateCategories = response.data.templateCategories.results;
    return templateCategories;
  }, [isLoading, response]);

  useEffect(() => {
    console.log("RESULTS", results);
  }, [results]);

  return (
    <List isLoading={isLoading}>
      {(results || []).map((item) => (
        <List.Item
          key={item.id}
          title={item.title}
          actions={
            <ActionPanel>
              <Action
                title="View templates"
                onAction={() => push(<TemplateList category={item.id} key={Math.random()} />)}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
