import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul>
      {posts.map((post: any) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context);
  const posts = [{ title: "asdf" }];

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
