import React, { FC } from "react";
import styled from "styled-components";
import { Typography, Button, Space } from "antd";
import Link from "next/link";
import { useGlobalState } from "@/customHooks/useGlobalState";
import { PostItem } from "../Postitem";
import { PostDataType } from "@/constants/typeData";

const { Text, Link: LinkAnt } = Typography;

type PropsType = {
  userPosts?: PostDataType[];
};

const HomeSideBar: FC<PropsType> = ({ userPosts }) => {
  const [token] = useGlobalState("token");
  return (
    <aside>
      <Text strong>Bài viết gần đây của bạn.</Text>
      <br />
      <br />
      {token ? (
        userPosts.length ? (
          userPosts
            .slice(0, 3)
            .map((post) => <PostItem post={post} key={post.PID} />)
        ) : (
          <Link href="/posts/create">
            <Text underline strong style={{ cursor: "pointer" }}>
              Bạn chưa bó bài viết nào truy cập vào đây để đăng bài{" "}
            </Text>
          </Link>
        )
      ) : (
        <>
          <Text>Vui lòng đăng nhập để xem nội dung này </Text>
          <Link href="/login">
            <LinkAnt href="">Đăng nhập</LinkAnt>
          </Link>
        </>
      )}
    </aside>
  );
};

export default HomeSideBar;
