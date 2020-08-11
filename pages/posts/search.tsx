import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { PostDataType } from "pages";
import { NextPage, NextPageContext } from "next";
import Masonry from "react-masonry-css";

import { searchPostLists } from "@/modules/posts/api";
import { PostItem } from "@/components/Postitem";
import { Typography } from "antd";

const { Title, Text } = Typography;

import "./search.scss";

type PropsTypes = {
  listPosts: PostDataType[];
};

const SearchPost: NextPage<PropsTypes> = ({ listPosts }) => {
  const router = useRouter();
  const query = router.query.query;
  useEffect(() => {
    if (!query) router.push("/");
  }, [query]);

  return (
    <>
      <Title level={3} className="title">
        Kết quả tìm kiếm cho '{query}'
      </Title>
      <Title level={3} className="title">
        Có {listPosts.length} kết quả
      </Title>
      <br />
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {listPosts.map((post) => (
          <PostItem
            key={post.PID}
            post={post}
            isHightlight
            query={query as string}
          />
        ))}
      </Masonry>
    </>
  );
};

SearchPost.getInitialProps = async (context: NextPageContext) => {
  const query = context.query.query;
  const response = await searchPostLists({ query });
  return { listPosts: response.posts || [] };
};

export default SearchPost;
