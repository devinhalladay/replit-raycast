import { Action, ActionPanel, Grid, useNavigation } from "@raycast/api";
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
    <Grid isLoading={isLoading} navigationTitle="Template Categories" aspectRatio="16/9" inset={Grid.Inset.Zero} fit={Grid.Fit.Fill} columns={3} searchBarPlaceholder="Search categories…">
      {(results || []).map((item) => (
        <Grid.Item
        subtitle={item.description}
          key={item.id}
          title={item.title}
          content={'https://replit.com' + item.imageUrl}
          actions={
            <ActionPanel>
              <Action
                title="View templates"
                onAction={() => push(<TemplateList category={item.id} title={item.title} key={Math.random()} />)}
              />
            </ActionPanel>
          }
        />
      ))}
    </Grid>
  );
};

export default CategoryListView;
