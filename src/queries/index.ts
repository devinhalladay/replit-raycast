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
          }
        }
      }
    }
  }
`;

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
          iconUrl
          templateCategories {
            title
            id
          }
        }
      }
    }
  }`
  );
};