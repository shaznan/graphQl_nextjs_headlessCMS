import React from "react";
import Link from "next/link";

const Posts = ({ item }) => {
  return (
    <div className="post_container">
      <div className="post_wrapper">
        <div>
          <div style={{ display: "flex" }}>
            <img src={item?.author?.avatar?.url} className="author_image" />
            <h6>Author: {item?.author?.name}</h6>
          </div>
          <Link
            href={{
              pathname: "/blog/[slug]",
              query: { slug: item?.slug },
            }}
          >
            <h2 style={{ textAlign: "center", cursor: "pointer" }}>
              {item?.title}
            </h2>
          </Link>
        </div>
        <img src={item?.coverPhoto?.url} />
      </div>
    </div>
  );
};

export default Posts;
