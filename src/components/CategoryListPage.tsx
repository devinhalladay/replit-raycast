import { Action, ActionPanel, List, useNavigation } from "@raycast/api";
import { useEffect, useMemo } from "react";
import TemplateList from "../TemplateList";
// import { gql, useQuery } from "urql";
import { gql } from "graphql-request";
import { TemplateCategoriesOutput, TemplateRepls2Output } from "../graphql/__generated__/graphql";
import { useExec, useFetch } from "@raycast/utils";
import client, { fetcher, headers } from "../graphql";
import useSWRImmutable from "swr/immutable";
import useSWR from "swr";

const CategoryQuery = gql`
  query {
    templateRepls2(options: { count: 100, category: 10 }) {
      __typename
      ... on TemplateReplSearchConnection {
        category
        items {
          title
          templateCategories {
            title
            id
          }
        }
      }
    }
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
`;

const CategoryListPage = () => {
  const { push } = useNavigation();

  const { isLoading: isFetching, data: datum, revalidate, error }  = useFetch("https://replit.com/graphql", {
    redirect: 'follow',
    headers:{
      ...headers
    },
    credentials: "include",
    method: "POST",
    body: JSON.stringify({
      query: `query {
        templateRepls2(options: { count: 100, category: 10 }) {
          __typename
          ... on TemplateReplSearchConnection {
            category
            items {
              title
              templateCategories {
                title
                id
              }
            }
          }
        }
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
      }`
    })
})

  // const [result, refetch] = useQuery<TemplateRepls2Output>({
  //   query: CategoryQuery,
  //   // variables: { from, limit },
  // });

  // console.log(result);


  // const { data: datum, error } = useSWRImmutable<TemplateRepls2Output | TemplateCategoriesOutput>("templates", () => fetcher({ document: CategoryQuery }));

  // const { data: datum, error, isLoading: isFetching } = useSWR<TemplateRepls2Output | TemplateCategoriesOutput>("templatesandcategories", () => fetcher({ document: CategoryQuery }, {}, headers), {
  //   revalidateOnFocus: false,
  //   revalidateOnReconnect: false,
  // });

  // const { data: datum, error, isLoading: isFetching } = useSWR(
  //   CategoryQuery,
  //   client.request,
  // )

  // const getData = async () => {
  //   const datum = await client.request<TemplateCategoriesOutput>(CategoryQuery)
  //   return datum;
  // }

  // const datum = getData();


  // const { data: datum, fetching, error } = result;

  // if (fetching) return <p>Loading...</p>;
  // if (error) return <p>Oh no... {error.message}</p>;

  const { isLoading, data } = useExec(
    `curl 'https://replit.com/graphql' -H 'Accept-Encoding: gzip, deflate' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: https://replit.com' -H 'x-requested-with: wow' --data-binary '{"query": "{templateRepls2(options: {count: 100,category:10}) {__typename ... on TemplateReplSearchConnection {category items {title templateCategories {title id}}}}templateCategories {__typename ... on TemplateCategoriesResults {results {... on TemplateCategory {id title slug}}}}}"}' --compressed`,
    {
      shell: true,
    }
  );

  const response = useMemo(() => JSON.parse(data), [isLoading, data]);

  const results = useMemo(() => {
    // console.log(data);
    if (!response) return [];
    const templateCategories = response.data.templateCategories.results;
    return templateCategories;
  }, [isLoading, response]);

  useEffect(() => {
    console.log("RESULTS", datum);
    console.log("ERROR", error);
  }, [datum, isFetching]);

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
