import { Action, ActionPanel, List, useNavigation } from "@raycast/api";
import { useExec } from "@raycast/utils";
import fetch from "isomorphic-unfetch";
import { useEffect, useMemo } from "react";
import TemplateList from "./TemplateList";
import Root from "./components/Root";
import { Provider, gql, useQuery } from "urql";
import { TemplateRepls2Output } from "./graphql/__generated__/graphql";
import client from "./graphql";
import CategoryListPage from "./components/CategoryListPage";
import useSWRImmutable from "swr/immutable";


export default function Command() {
  


  return (
      <CategoryListPage />
  );
}
