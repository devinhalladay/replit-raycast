import { Client, cacheExchange, fetchExchange } from "urql";
import fetch from "isomorphic-unfetch";
import { getPreferenceValues } from "@raycast/api";
import request, { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import https from "https";

export const headers = {
  "accept": "*/*",
  "Content-Type": "application/json",
  Accept: "application/json",
  // Connection: "keep-alive",
  // DNT: "1",
  Origin: "https://replit.com",
  "X-Requested-With": "wow",
  Cookie: "__cf_bm=cInb3ryFezH0EdX5_cilKj9OYtkMUGqWp9_0qCmPIhM-1685023682-0-AbuMvwk/XHGc4Qa2zkxmIKF1cgSScRIC3EyPyHRUcE2D6V/TXvMKwquQ5lpy5bO38UmqhmNojYxb15EPCkdmd9U=; _cfuvid=WQPXb84vpSG6JNTavipPqi_4QqnjBJ3O1thKfAniCWE-1685023682901-0-604800000; connect.sid=s%3A2WLQWPefL1VYhOpTxvsNTm7h-suYxyMW.jZn7A1OBTLm9%2FIRnsV0FtQFqV1OmgTqsDtE4ApmdI%2B8",
  credentials: "include",
};



// export async function fetcher({ document, variables = {}, headers = {} }: any) {
//   // const agent = new https.Agent();
//   const client = new GraphQLClient('https://replit.com/graphql', { agent } as RequestInit);
//   return client.request(
//     document,
//     {
//       ...variables,
//     },
//     {
//       // Authorization: `Bearer ${token}`,
//       ...headers,
//     }
//   );
// }

export const fetcher = query => request('https://replit.com/graphql', query, {}, {
  ...headers,
})



// const client = new Client({
//   url: "https://replit.com/graphql",
//   exchanges: [cacheExchange, fetchExchange], 
//   fetchOptions: {
//     headers,
//     method: "POST",
//   },
// });

const endpoint = `https://replit.com/graphql`

const client = new GraphQLClient(endpoint, {
  headers: {
    ...headers
  },
  // mode: 'no-cors' 
})

export default client;
