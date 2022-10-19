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

//Get only the post related to the URL param for dynamic route
export const getPostDetails = async (slug) => {
  console.log(slug, "slug");
  const query = gql`
    query fetchPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
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
        content {
          raw
        }
      }
    }
  `;

  //3rd parameter is the variable
  const results = await request(graphqlAPI, query, { slug });
  return results?.post;
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

export const getSimilarPost = async (catergories, slug) => {
  const query = gql`
    query getPostDetails($slug: String!, $catergories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { catergories_some: { slug_in: $catergories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const results = await request(graphqlAPI, query, { catergories, slug });
  return results?.posts;
};

export const getCatergories = async () => {
  const query = gql`
    query GetCatorgories {
      catergories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.catergories;
};
