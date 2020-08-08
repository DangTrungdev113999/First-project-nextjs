import React from "react";
import styled from "styled-components";
import { Avatar, Typography, Divider } from "antd";
import { UserOutlined, CommentOutlined } from "@ant-design/icons";

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

const PostItem = () => {
  return (
    <Wrapper>
      <Header>
        <Avatar shape="square" size={40} icon={<UserOutlined />} />
        <div>
          <Text strong>Thanos</Text>
          <Text>2 giờ trước</Text>
        </div>
      </Header>
      <Divider />
      <Paragraph
        ellipsis={{ rows: 1, expandable: true, symbol: "xem thêm" }}
        style={{ color: "#000" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore
        obcaecati eum deserunt ut, aperiam quas! Placeat blanditiis consequatur,
        deserunt facere iusto amet a ad suscipit laudantium unde quidem
        perferendis!
      </Paragraph>

      <Image src="/images/microphone-1209816_1920.jpg" alt="" />

      <Divider />

      <Footer>
        <CommentOutlined size={40} />
        <Text>984</Text>
      </Footer>
    </Wrapper>
  );
};

export default PostItem;
