import React from "react";
import { client } from "../index";
import { gql } from "@apollo/client";

const queryBlogPost = gql`
  query Blogs($slug: String!) {
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
  const slug = params.slug;

  const data = await client.query({
    query: queryBlogPost,
    variables: { slug },
  });

  return {
    props: data,
    revalidate: 10,
  };
}

const Post = ({ data: { blogs } }) => {
  return (
    <div>
      <h2>{`The title is ${blogs?.[0]?.title}`}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: blogs?.[0]?.content?.html }}
      ></div>
      <img src={blogs?.[0]?.coverPhoto?.url} />
    </div>
  );
};

export default Post;
