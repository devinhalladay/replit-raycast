// a single template category
export type TemplateCategory = {
  title: string;
  id: number;
  imageUrl: string;
  description: string;
};

export enum TemplateStatus {
  All = "All",
  Official = "Official",
  Community = "Community",
}

// results of the categories graphql query
export type TemplateCategoriesResults = {
  templateCategories: {
    __typename: "TemplateCategoriesResults";
    results: (TemplateCategory & { slug?: string })[];
  };
};

// a single template repl
export type TemplateRepl = {
  id: string;
  title: string;
  imageUrl: string | null;
  iconUrl: string;
  templateCategories: TemplateCategory[];
  description: string;
  url: string;
  user: {
    image: string;
    username: string;
  };
  likeCount: number;
  publicForkCount: number;
  tags:
    | {
        id: string;
      }[]
    | null;
};

// results of the templates graphql query
export type TemplateReplsForCategory = {
  templateRepls2: {
    __typename: "TemplateReplSearchConnection";
    category: number;
    items: TemplateRepl[];
  };
};

// a single search result
export type SearchResult = {
  title: string;
  description: string;
  iconUrl: string;
  url: string;
  inviteUrl: string | null;
  analyticsUrl: string;
}

export type SearchResultsResult = {
  data: {
    search: {
      replResults: {
        results: {
          items: SearchResult[];
        };
      };
    }
  }
}