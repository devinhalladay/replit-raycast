import { Action, ActionPanel, List, useNavigation } from "@raycast/api";
import { useMemo } from "react";
import TemplateList from "../TemplateList";
import { useExec } from "@raycast/utils";
import useQuery from "../hooks/useQuery";

const CategoryQuery = `
  {
    templateCategories {
      __typename
      ... on TemplateCategoriesResults {
        results {
          ... on TemplateCategory {
            id
            title
            slug
          }
        }
      }
    }
  }
`

const CategoryListPage = () => {
  const { push } = useNavigation();

  const { isLoading, data } = useQuery(CategoryQuery)

  const response = useMemo(() => {
    if (!isLoading && data){
    return JSON.parse(data)}

    return null
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

export default CategoryListPage;
