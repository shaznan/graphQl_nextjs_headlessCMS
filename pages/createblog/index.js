import React from "react";
import { useMutation, gql } from "@apollo/client";
import axios from "axios";
const graphcmsToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjQ5MDg4MTIsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2w4azF6dTZxMThwZTAxdGQ0YTNwZHVxOS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYWExOTJlMWItN2FlZi00MDRmLWIzOGQtNjU4N2Q2NWU5NWRhIiwianRpIjoiY2w4dWpweHE1NXdyNjAxdWs5emJ2aG0yYSJ9.mMjMLd52S0OgCAf3h7LqWBpGcGnK3Kwb2wjqNbXNwhgyrfe5wzhq6n_ZzOw0l-CRYZFCPFUdqYYNtFEnAgWQ6rdmY7PeJEwLsN3atiVU6WIh--WE1_m1fMWSFLkYMds5n1b5VaZ9P6v0TS-isSiIpT_ABnU-ggRgg_qB_9yw4NSXNyz1caYBotsQFRaV0w1v9auFIs5Qyd2YUQmeIhUpVo7HOOrTGZ5hP11FnNQZ0-Ee_ITwzUjyTtz01KOkpHbFi4RCK7xEHozCuc9WOfNG8zr4R6_ECzSHZ1lKyUmI2RUU8XfNQdKzo4Sh96mrB7g2G8Fv65DovuQTQpvmTKF0Ec15bRfCi0dOyc0qpsRFR5oAFwaFJdyA4xfDrtF7OjpMoLfJ2Cefz8nBavSotHljWDTijpqec9Nx1xIMupsqmMVy8rLWPOzxXdn5lVkHcLvui5tG7ffx6Oa47vMoKgBHedXodm2vZ-qPFQ0uyw38xUcUSopYvM3SQm75ePtMPfyXIm19rz0umsZBMySCf7FzWQsvlHKaLB_Jgv-53GPqfuEoFi62Sp511fOp1O8hT6sVkfYaiDsE6cTfrjUMc5miTN-7gWD0y2ftbj7xQwB1BZBBwDFYPWi1YUbzWUd_dUqR9g0OLSbMgcJcbCStPGtWSG2s1ZlBHFNYSuqCmGAD0hw";

const createBlog = () => {
  const ADD_COMMENTS = gql`
    mutation createComment(
      $title: String!
      $description: String!
      $name: String!
    ) {
      createComment(
        data: { title: $title, description: $description, name: $name }
      ) {
        title
        description
        name
      }
    }
  `;

  const mutateFunction = async () => {
    const data = await axios.post(
      "https://api-us-west-2.hygraph.com/v2/cl8k1zu6q18pe01td4a3pduq9/master",
      {
        query: `mutation createComment(
            $title: String!
            $description: String!
            $name: String!
          ) {
            createComment(
              data: { title: $title, description: $description, name: $name }
            ) {
              title
              description
              name
            }
          }`,
        variables: {
          title: "brh",
          description: "desc1",
          name: "mama miaa",
        },
      },
      {
        headers: {
          authorization: `Bearer ${graphcmsToken}`,
        },
      }
    );

    return data;
  };

  return (
    <>
      <h1>Create Comments (Test run)</h1>
      <h3>Please enter related comments</h3>
      <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <input type="text" placeholder="Title" />
        <br />
        <textarea type="text" placeholder="Description" />
        <br />
        <input type="text" placeholder="Name" />
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={() => mutateFunction()}
        >
          Add Comment
        </button>
      </div>
    </>
  );
};

export default createBlog;
