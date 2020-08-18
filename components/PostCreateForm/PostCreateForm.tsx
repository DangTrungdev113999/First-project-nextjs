import React from "react";
import styled from "styled-components";
import { Form, Button, Upload } from "antd";
import { Input } from "antd";
import { useGlobalState } from "@/customHooks/useGlobalState";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 5px lightgray;
`;

const PostCreateForm = () => {
  const [form] = Form.useForm();
  const [user] = useGlobalState("currentUser");
  const [token] = useGlobalState("token");
  return (
    <>
      <Wrapper>
        <Form form={form}>
          <Form.Item name="fullname">
            <Input placeholder="https://" />
          </Form.Item>
          <Form.Item name="description">
            <Input.TextArea placeholder="mô tả ..." />
          </Form.Item>
          <Form.Item name="profilepicture">
            <Upload name="logo" action="/upload.do" listType="picture">
              <img src="/images/no_image_available.jpg" alt="default" />
            </Upload>
          </Form.Item>
        </Form>
        <a
          href="https://memeful.com/"
          target="_blank"
          className="ass1-btn ass1-btn-meme"
        >
          Chế ảnh từ meme
        </a>
        <a href="#" className="ass1-btn ass1-btn-meme">
          Đăng ảnh từ máy tính
        </a>
      </Wrapper>
    </>
  );
};

export default PostCreateForm;
