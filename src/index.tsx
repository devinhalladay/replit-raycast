import { Action, ActionPanel, List, useNavigation } from "@raycast/api";
import { useMemo } from "react";
import TemplateList from "./TemplateListView";
import useQuery from "./hooks/useQuery";
import { CATEGORIES_QUERY } from "./queries";
import { TemplateCategoriesResults } from "./types";



const CategoryListView = () => {
  const { push } = useNavigation();

  const { isLoading, data } = useQuery<TemplateCategoriesResults>(CATEGORIES_QUERY);

  const results = useMemo(() => {
    if (!data) return [];
    const templateCategories = data.templateCategories.results;
    return templateCategories;
  }, [isLoading, data]);

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
