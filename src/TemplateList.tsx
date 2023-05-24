import { Action, ActionPanel, Detail, List, useNavigation } from "@raycast/api";
import { useExec, useFetch } from "@raycast/utils";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";

const getQuery = (category: number) => {
  return `{
    templateRepls2(options: { count: 100, category:` + category + ` }) {
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
}

export default function TemplateList({
  category
}: {
  category: number
}) {
  const { pop } = useNavigation();

  const { isLoading, data, revalidate } = useExec(`curl 'https://replit.com/graphql' -H 'Accept-Encoding: gzip, deflate' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: https://replit.com' -H 'x-requested-with: wow' --data-binary '{"query":"{templateRepls2(options: { count: 100, category: ${category} }) {  __typename  ... on TemplateReplSearchConnection { category items {      title imageUrl iconUrl url templateCategories { title id } } }}}"}' --compressed`, {
    shell: true,
    keepPreviousData: false,
    stripFinalNewline: true
  });

  useEffect(() => {
    console.log('DATA', data)
  }, [data])

  const results = useMemo(() => {
    if (!data) return [];
    const templates = JSON.parse(data).data.templateRepls2.items;
    return templates
  }, [isLoading, data]);


  return (
    <List isLoading={isLoading || !data}>
      {(results || []).map((item) => (
        <List.Item key={item.id} title={item.title} icon={item.iconUrl} actions={
          <ActionPanel>
            <Action.OpenInBrowser
                title={`Create a ${item.title} project`}
                url={`https://replit.com/${item.url}`}
              />
          </ActionPanel>
        }  />
      ))}
    </List>
  );
}