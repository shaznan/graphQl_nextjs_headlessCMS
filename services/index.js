import { request, gql } from "graphql-request";

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            slug
            title
            exerpt
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            featuredImage {
              url
            }
            catergories {
              name
              slug
            }
          }
        }
      }
    }
  `;
};
