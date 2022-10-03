import React from "react";
import { client } from "../index";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const queryBlogPost = gql`
  query Blogs($slug: string!) {
    blogs(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

const queryPaths = gql`
  query Blogs {
    blogs {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const {
    data: { blogs },
  } = await client.query({
    query: queryPaths,
  });

  return {
    paths: blogs?.map((data) => ({
      params: { slug: data?.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params, "PARAMS");
  const slug = params.slug;
  // const data = await client.query({
  //   query: getQueryBlogPosts(slug),
  // });

  const data = await client.query({
    query: queryBlogPost,
    variables: slug,
  });

  // console.log(data, "lol");
  return {
    props: data,
  };
}

const Post = ({ data }) => {
  return <div></div>;
};

export default Post;
