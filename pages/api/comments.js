// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql } from "graphql";

const graphQlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphQlAPI, {
    header: {
      authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });

  const query = gql`
  mutation CreateComment($name: String!, $email: String!, $comment: String!, slug: String! ){
    createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}){id}
  }`;

  const result = await graphQLClient.request(query, req.body);

  return res.status(200).send(result);
}
