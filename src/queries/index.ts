// Get all template categories
export const CATEGORIES_QUERY = `
  {
    templateCategories {
      __typename
      ... on TemplateCategoriesResults {
        results {
          ... on TemplateCategory {
            id
            title
            slug
            imageUrl
            description
          }
        }
      }
    }
  }
`;

// Get all templates for a category by its ID
export const TEMPLATES_QUERY = (category: number) => {
  return (
    `{
    templateRepls2(options: { count: 100, category:` +
    category +
    ` }) {
      __typename
      ... on TemplateReplSearchConnection {
        category
        items {
          id
          title
          imageUrl
          description
          iconUrl
          tags {
            id
          }
          likeCount
          url
          publicForkCount
          templateCategories {
            title
            id
          }
          user {
            username
            image
          }
        }
      }
    }
  }`
  );
};

export const FIND_REPLS_QUERY = `
query ReplSearch($q: String!, $ownerId: Int!) {
  search(
    options: {
      categories: Repls
      query: $q
      categorySettings: { repls: { ownerId: $ownerId } }
    }
  ) {
    __typename
    ... on UnauthorizedError {
      message
    }
    ... on SearchQueryResults {
      replResults {
        results {
          items {
            id
            title
            slug
            description
            isAlwaysOn
            isPrivate
            iconUrl
            url
            inviteUrl
            analyticsUrl
          }
        }
      }
    }
  }
}
`;

// AI queries
export const AI_TEMPLATES_STUB_QUERY = `
  query TemplateRepls {
    templateRepls2(options: { count: 500 }) {
      __typename
      ... on TemplateReplSearchConnection {
        category
        items {
          ... on Repl {
            title
            description
          }
        }
      }
    }
  }
`;

export const SEARCH_TEMPLATES_QUERY = `
  query SearchTemplates($query: String!, $categories: [SearchQueryCategory!]!, $status: SearchQueryTemplateStatus!) {
    search(options: {
      query: $query,
      categories: $categories,
      categorySettings: {
        templates: {
          status: $status
        }
      }
    }) {
      __typename
      ... on SearchQueryResults {
        templateResults {
          results {
            items {
              id
          title
          imageUrl
          description
          iconUrl
          tags {
            id
          }
          likeCount
          url
          publicForkCount
          templateCategories {
            title
            id
          }
          user {
            username
            image
          }
            }
          }
        }
      }
    }
  }   
  `