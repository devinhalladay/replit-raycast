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