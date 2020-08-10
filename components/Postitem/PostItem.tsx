import React, { FC } from "react";
import styled from "styled-components";
import { Avatar, Typography, Divider } from "antd";
import { UserOutlined, CommentOutlined } from "@ant-design/icons";
import { PostDataType } from "pages";
import dayjs from "dayjs";
import Link from "next/link";

import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/vi";

dayjs.extend(relativeTime);
dayjs.locale("vi");

const Wrapper = styled.div`
  width: 100%;
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
`;

const { Text, Paragraph } = Typography;

const Header = styled.div`
  display: flex;
  > span {
    cursor: pointer;
  }
  > div {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    > span {
      &:first-child {
        cursor: pointer;
      }
    }
  }
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    opacity: 0.9;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  > span {
    &:first-child {
      margin-right: 15px;
    }
  }
`;

type PropsType = {
  post: PostDataType;
};

const PostItem: FC<PropsType> = ({ post }) => {
  return (
    <Wrapper>
      <Header>
        <Link href="/users/[userId]" as={`/users/${post.USERID}`}>
          <Avatar
            shape="square"
            size={40}
            icon={<UserOutlined />}
            // src={post.profilepicture}
          />
        </Link>
        <div>
          <Link href="/users/[userId]" as={`/users/${post.USERID}`}>
            <Text strong>{post.fullname}</Text>
          </Link>
          <Text>{dayjs(post.time_added).fromNow()}</Text>
        </div>
      </Header>
      <Divider />
      <Paragraph
        ellipsis={{ rows: 1, expandable: true, symbol: "xem thêm" }}
        style={{ color: "#000" }}
      >
        {post.post_content}
      </Paragraph>
      <Link href="/posts/[postId]" as={`/posts/${post.PID}`}>
        <Image
          src={post.url_image || "/images/microphone-1209816_1920.jpg"}
          alt=""
        />
      </Link>

      <Divider />
      <Link href="/posts/[postId]" as={`/posts/${post.PID}`}>
        <Footer>
          <CommentOutlined size={40} />
          <Text>{post.count || 0}</Text>
        </Footer>
      </Link>
    </Wrapper>
  );
};

export default PostItem;
