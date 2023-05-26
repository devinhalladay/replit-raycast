// a single template category
export type TemplateCategory = {
  title: string;
  id: number;
  imageUrl: string;
  description: string;
};

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
