import React, { FC, useEffect, useState } from "react";
import { Button, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

import { PostDataType } from "pages";
import { PostItem } from "../Postitem";
import { getListPosts } from "@/modules/posts/api";
import { LoadingOutlined } from "@ant-design/icons";

type PropsType = {
  listPosts: PostDataType[];
};

const PostListItem: FC<PropsType> = ({ listPosts }) => {
  const [posts, setPosts] = useState(listPosts);
  const [hasMore, setHasMore] = useState(true);
  const [query, setQuerry] = useState({
    pagesize: 3,
    currPage: 1,
  });

  useEffect(() => {
    if (query.currPage === 1) return;
    fetchMorePosts();
  }, [query.pagesize, query.currPage]);

  async function fetchMorePosts() {
    const listPostsRes = await getListPosts({
      pagesize: query.pagesize,
      currPage: query.currPage,
    });
    if (listPostsRes.posts.length === 0) return setHasMore(false);
    setPosts(posts.concat(listPostsRes.posts));
  }

  const updateQuerry = () => {
    setQuerry({
      pagesize: query.pagesize,
      currPage: query.currPage + 1,
    });
  };
  return (
    <InfiniteScroll
      style={{ overflow: "hidden" }}
      dataLength={posts.length}
      next={updateQuerry}
      hasMore={hasMore}
      loader={
        <div style={{ textAlign: "center", padding: 20 }}>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        </div>
      }
      pullDownToRefreshContent
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {posts.map((post) => (
        <PostItem post={post} key={post.PID} />
      ))}
    </InfiniteScroll>
  );
};

export default PostListItem;
