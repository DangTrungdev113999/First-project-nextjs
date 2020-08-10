import React, { FC } from "react";
import styled from "styled-components";
import { PostDataType } from "pages";
import { Typography, Button, Space } from "antd";
import Link from "next/link";

const { Text, Link: LinkAnt } = Typography;

type PropsType = {
  userPosts: PostDataType[];
};

const HomeSideBar: FC<PropsType> = ({ userPosts }) => {
  return (
    <aside>
      <Text strong>Bài viết gần đây của bạn.</Text>
      <br />
      <Text>Vui lòng đăng nhập để xem nội dung này </Text>
      <Link href="/login">
        <LinkAnt href="">Đăng nhập</LinkAnt>
      </Link>
    </aside>
  );
};

export default HomeSideBar;
