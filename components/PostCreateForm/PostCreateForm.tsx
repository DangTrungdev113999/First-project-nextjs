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

const ImgPreview = styled.img`
  width: 750px;
  height: 560px;
`;

type ObjImageType = {
  objFile: File | null;
  base64Url: string;
};

type PropsType = {
  obj_image: ObjImageType;
  url_image: string;
  post_content: string;
  handleSetPost: (key: string, value: any) => void;
};

const PostCreateForm: React.FC<PropsType> = ({
  obj_image,
  url_image,
  post_content,
  handleSetPost,
}) => {
  const [user] = useGlobalState("currentUser");
  const [token] = useGlobalState("token");

  const handlePreviewImage = (info: any) => {
    const file = info.file.originFileObj;
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      handleSetPost("obj_image", {
        objFile: file,
        base64Url: reader.result as string,
      });
    });

    reader.readAsDataURL(file);
  };

  return (
    <>
      <Wrapper>
        <Form>
          <Form.Item name="url_image">
            <Input
              placeholder="https://"
              value={url_image}
              onChange={(e) => handleSetPost("url_image", e.target.value)}
            />
          </Form.Item>
          <Form.Item name="post_content">
            <Input.TextArea
              placeholder="mô tả ..."
              value={post_content}
              onChange={(e) => handleSetPost("post_content", e.target.value)}
            />
          </Form.Item>
          <Form.Item name="profilepicture">
            <Upload>
              <ImgPreview
                src={
                  url_image ||
                  obj_image.base64Url ||
                  "/images/no_image_available.jpg"
                }
                alt="default"
              />
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
        &nbsp; &nbsp; &nbsp;
        <Upload
          name="avatar"
          showUploadList={false}
          onChange={handlePreviewImage}
        >
          <a href="#" className="ass1-btn ass1-btn-meme">
            Đăng ảnh từ máy tính
          </a>
        </Upload>
      </Wrapper>
    </>
  );
};

export default PostCreateForm;
