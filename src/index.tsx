import { Action, ActionPanel, List, useNavigation } from "@raycast/api";
import { useMemo } from "react";
import TemplateList from "./TemplateListView";
import useQuery from "./hooks/useQuery";
import { CATEGORIES_QUERY } from "./queries";



const CategoryListView = () => {
  const { push } = useNavigation();

  const { isLoading, data } = useQuery(CATEGORIES_QUERY);

  const response = useMemo(() => {
    if (!isLoading && data) {
      return JSON.parse(data);
    }

    return null;
  }, [isLoading, data]);

  const results = useMemo(() => {
    if (!response) return [];
    const templateCategories = response.data.templateCategories.results;
    return templateCategories;
  }, [isLoading, response]);

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
};

export default CategoryListView;
