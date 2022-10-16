import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT;

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

  const results = await request(graphqlAPI, query);
  return results?.postsConnection?.edges;
};

export const getRecentPost = async () => {
  const query = gql`
    query getPostDetails(){
      posts(
        orderBy: createdAt_ASC
        last: 3
        ){
          title
          featuredImage{
            url
          }
          createdAt
          slug
        }
    }
  `;
  const results = await request(graphqlAPI, query);
  return results?.posts;
};
