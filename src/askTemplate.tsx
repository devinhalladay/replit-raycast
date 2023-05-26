import { Detail, List } from "@raycast/api";
import { useAI, useFetch } from "@raycast/utils";
import { useState } from "react";
import useCurrentUser from "./hooks/useCurrentUser";

export default function Command() {
  const [searchText, setSearchText] = useState("");

  // return <Detail isLoading={isLoading} markdown={data} />;

  const {connectSid} = useCurrentUser();


  const { data: templatesData, isLoading: loadingTemplates, error: templatesError } = useFetch("https://replit.com/graphql", {
    // execute: searchText.length > 0,
    parseResponse: (async response => {
      const res = await response.json();
      console.log(res);

      if (res.data?.templateRepls2?.items) {
        console.log(res.data.templateRepls2.items);
        return res.data.templateRepls2.items.map((item: any) => ({
          title: item.title,
          id: item.id,
          description: item.description,
          categories: item.templateCategories.map((category: any) => category.title),
        }));
      }

      return [];
    }),
    headers: {
      accept: "*/*",
      "content-type": "application/json",
      "x-requested-with": "1",
      cookie: "connect.sid=" + connectSid,
      origin: "https://replit.com",
      referer: "https://replit.com/graphql",
      "user-agent": "Raycast extension",
    },
    method: "POST",
    keepPreviousData: false,
    body: JSON.stringify({
      operationName: "TemplateRepls",
      query: `
      query TemplateRepls {
        templateRepls2(options: { count: 500 }) {
          __typename
          ... on TemplateReplSearchConnection {
            category
            items {
              ... on Repl {
                id
                title
                description
                templateCategories {
                  title
                  id
                }
              }
            }
          }
        }
      }      
      `,
    }),
  });

  const { data, isLoading } = useAI(`
    You are helping a user choose a template for a coding project. The user's query is ${searchText}. Respond with an array of relevant options chosen from the following choices, in the format of an object with id and title properties:

    ${JSON.stringify(templatesData)}
  `, {
    execute: templatesData && searchText.length > 0,
  });

  if (templatesError) {
    return <Detail markdown={`Error: ${templatesError?.message}. ${templatesError}`} />;
  }

  // console.log(templatesData)

  console.log('response', data, isLoading)

  return (
    <List onSearchTextChange={setSearchText} throttle>
      <List.Item title="Hello World" />
    </List>
  )
}