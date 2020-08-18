import React, { FC } from "react";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPageContext,
} from "next";

import { PostListItem } from "@/components/PostListItem";
import { HomeSideBar } from "@/components/SlideBar";
import { Row, Col } from "antd";
import { fetchListPosts, fetchPostsByUserId } from "@/modules/posts/api";
import { getTokenInSsrAndCsr } from "@/utils/index";
import { PostDataType } from "@/constants/typeData";

type HomePropsDataType = {
  listPosts: PostDataType[];
  userPosts: PostDataType[];
};

type HomeProps = FC<InferGetServerSidePropsType<typeof getServerSideProps>>;

const Home: HomeProps = ({ listPosts, userPosts }) => {
  return (
    <>
      <Row gutter={[50, 0]}>
        <Col span={16} md={16} lg={16}>
          <PostListItem listPosts={listPosts} />
        </Col>
        <Col span={8} md={8} lg={8}>
          <HomeSideBar userPosts={userPosts} />
        </Col>
      </Row>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<HomePropsDataType> = async (
  context
) => {
  const [token, currentUser] = getTokenInSsrAndCsr(context as NextPageContext);
  const listPostsRes = fetchListPosts({ pagesize: 3, currPage: 1 });
  // const userPostsRes = fetchPostsByUserId({ userid: 2 }, token);
  const userPostsRes = await fetchPostsByUserId(
    { userid: currentUser?.id },
    token
  );

  const [listPosts, userPosts] = await Promise.all([
    listPostsRes,
    userPostsRes,
  ]);

  const props = {
    listPosts: listPosts?.posts || [],
    userPosts: userPosts?.posts || [],
  };
  return {
    props,
  };
};

export default Home;
