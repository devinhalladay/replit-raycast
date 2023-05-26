import { Detail, List } from "@raycast/api";
import { useAI, useFetch } from "@raycast/utils";
import { useEffect, useState } from "react";
import useCurrentUser from "./hooks/useCurrentUser";

export default function Command() {
  const [searchText, setSearchText] = useState("");
  const [searchTerms, setSearchterms] = useState<Array<string>>([]);

  // return <Detail isLoading={isLoading} markdown={data} />;

  const {connectSid} = useCurrentUser();


  const { data: templatesData, isLoading: loadingTemplates, error: templatesError } = useFetch("https://replit.com/graphql", {
    // execute: searchText.length > 0,
    parseResponse: (async response => {
      const res = await response.json();
      // console.log(res);

      if (res.data?.templateRepls2?.items) {
        // console.log(res.data.templateRepls2.items);
        return res.data.templateRepls2.items.map((item: any) => ({
          title: item.title,
          // id: item.id,
          description: item.description,
          // categories: item.templateCategories.map((category: any) => category.title),
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
    You are helping a user choose a template for a coding project. The user's query is ${searchText}. Respond with a valid JSON Javascript array of five relevant search terms that may help the user find the right template according to their query intent. Do not include the word "template" in your suggested terms.

    Example response: ["OpenAI", "Chatbot", "Python", "Data Science", "GPT-3"]

    You can use the following data to help you identify possible search terms from titles and descriptions. 
    ${JSON.stringify(templatesData)}
  `, {
    execute: templatesData && searchText.length > 0,
    // onData: (d) => {
    //   console.log('d', d)
    //   // const parsed = JSON.parse(d);
    //   // console.log('parsed', parsed);
    //   // setSearchterms(d);
    //   return d;
    // },
    model: "gpt-3.5-turbo",
    creativity: 'low',
    stream: false,
  });

  useEffect(() => {
    if (data) {
      // console.log(typeof data, JSON.parse(data));
      setSearchterms(JSON.parse(data))
    }
  }, [data])

  const { data: choices, isLoading: loadingchoices, error: choiceserror } = useFetch("https://replit.com/graphql", {
    execute: searchTerms && searchTerms.length > 1,
    parseResponse: (async response => {
      const res = await response.json();
      console.log(res);

      if (res.data?.search?.templateResults?.results?.items) {
        // console.log(res.data.templateRepls2.items);
        return res.data.search.templateResults.results.items;
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
      operationName: "SearchTemplates",
      variables: {
        query: searchTerms.join(' '),
        categories: ["Templates"],
      },
      query: `
      query SearchTemplates($query: String!, $categories: [SearchQueryCategory!]!) {
        search(options: {
          query: $query,
          categories: $categories,
        }) {
          __typename
          ... on SearchQueryResults {
            templateResults {
              results {
                items {
                  id
                  title
                  url
                  description
                }
              }
            }
          }
        }
      }   
      `,
    }),
  });

  if (templatesError) {
    return <Detail markdown={`Error: ${templatesError?.message}. ${templatesError}`} />;
  }

  // console.log(templatesData)

  // console.log('response', data, isLoading)

  return (
    <List onSearchTextChange={setSearchText} throttle isLoading={loadingchoices}>
        {
          choices?.map((choice: any) => (
            <List.Item
              key={choice.id}
              title={choice.title}
              subtitle={choice.description}
              // accessoryTitle={choice.url}
              // keywords={choice.categories}
              // icon={{ source: "https://cdn.discordapp.com/attachments/881741662327957771/881741701451374622/unknown.png" }}
            />
          ))
        }
    </List>
  )
}