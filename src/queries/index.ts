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


export const SEARCH_QUERY = ({searchText, ownerId}: {
  searchText: string,
  ownerId: number
}) => {
  return `
  query ReplSearch {
    search(
      options: {
        categories: Repls
        query: "${searchText}"
        categorySettings: { repls: { ownerId: 4428639 } }
      }
    ) {
      ... on SearchQueryResults {
        replResults {
          results {
            items {
              id
              title
              slug
              description
              iconUrl
              url
            }
          }
        }
      }
    }
  }
  `
}