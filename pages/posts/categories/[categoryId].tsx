import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage, NextPageContext } from "next";
import Masonry from "react-masonry-css";

import { searchPostListsByCategoryId } from "@/modules/posts/api";
import { PostItem } from "@/components/Postitem";
import { Typography, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

import { useGlobalState } from "@/customHooks/useGlobalState";

import { LoadingOutlined } from "@ant-design/icons";
import { PostDataType } from "@/constants/typeData";

import "@/assets/css/global.scss";

const { Title, Text } = Typography;
type PropsTypes = {
  listPosts: PostDataType[];
};

const defaultQuery = {
  pagesize: 3,
  currPage: 1,
};

const SearchPostByCategory: NextPage<PropsTypes> = ({ listPosts }) => {
  const router = useRouter();
  const categoryId = router.query.categoryId || null;
  //TODO map  id into keyword
  const [categories] = useGlobalState("categories");
  const [posts, setPosts] = useState(listPosts);
  const [hasMore, setHasMore] = useState(true);
  const [query, setQuerry] = useState(defaultQuery);

  useEffect(() => {
    if (!categoryId) {
      router.push("/");
    } else {
      setPosts(listPosts);
      setHasMore(true);
      setQuerry(defaultQuery);
    }
  }, [categoryId]);

  useEffect(() => {
    if (query.currPage === 1) return;
    fetchMorePosts();
  }, [query.pagesize, query.currPage]);

  const updateQuerry = () => {
    setQuerry({
      pagesize: query.pagesize,
      currPage: query.currPage + 1,
    });
  };

  async function fetchMorePosts() {
    const listPostsRes = await searchPostListsByCategoryId({
      pagesize: query.pagesize,
      currPage: query.currPage,
      //@ts-ignore
      tagIndex: categoryId,
    });
    if (listPostsRes.posts.length === 0) return setHasMore(false);
    setPosts(posts.concat(listPostsRes.posts));
  }

  return (
    <>
      <Title level={3} className="title">
        Kết quả tìm kiếm cho '{categoryId}'
      </Title>
      <Title level={3} className="title">
        Có {posts.length} kết quả
      </Title>
      <br />

      <InfiniteScroll
        style={{
          overflow: "hidden",
        }}
        dataLength={posts.length}
        next={updateQuerry}
        hasMore={hasMore}
        loader={
          <div
            style={{
              textAlign: "center",
              padding: 20,
            }}
          >
            <Spin
              indicator={
                <LoadingOutlined
                  style={{
                    fontSize: 24,
                  }}
                  spin
                />
              }
            />
          </div>
        }
        pullDownToRefreshContent
        endMessage={
          <p
            style={{
              textAlign: "center",
            }}
          >
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {posts.map((post) => (
            <PostItem key={post.PID} post={post} />
          ))}
        </Masonry>
      </InfiniteScroll>
    </>
  );
};

SearchPostByCategory.getInitialProps = async (context: NextPageContext) => {
  const categoryId = context.query.categoryId;

  const params = {
    ...defaultQuery,
    tagIndex: categoryId,
  };
  //@ts-ignore
  const response = await searchPostListsByCategoryId(params);
  return { listPosts: response.posts || [] };
};

export default SearchPostByCategory;
