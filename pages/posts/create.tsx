import React, { useState } from "react";
import { PostCreateForm } from "@/components/PostCreateForm";
import { PostCreateSidebar } from "@/components/PostCreateSidebar";
import { Row, Col, message } from "antd";
import useAuthenticated from "@/customHooks/useAutthenticated";
import { createPost } from "@/modules/posts/api";
import { useGlobalState } from "@/customHooks/useGlobalState";
import { createDataFromFormData } from "@/utils/index";
import { useRouter } from "next/router";

const initialPost = {
  obj_image: {
    objFile: null,
    base64Url: "",
  },
  url_image: "",
  post_content: "",
  category: [1, 2, 3],
};

const Create: React.FC = () => {
  useAuthenticated("posts/create");
  const [token] = useGlobalState("token");
  const [post, setPost] = useState(initialPost);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSetPost = (key: string, value: any) => {
    setPost({
      ...post,
      [key]: value,
    });
  };

  const handleCreatePost = async () => {
    setLoading(true);
    const data = {
      obj_image: post.obj_image.objFile,
      url_image: post.url_image,
      post_content: post.post_content,
      category: post.category,
    };

    const formData = createDataFromFormData(data);
    const response = await createPost(formData, token);
    if (response.status === 200) {
      message.success(response.message);
      router.push("/");
    } else {
      message.success(`Đăng bài thất bại: ${response.error}`);
    }
    setLoading(false);
  };

  return (
    <Row gutter={[30, 18]}>
      <Col md={16}>
        <PostCreateForm
          obj_image={post.obj_image}
          url_image={post.url_image}
          post_content={post.post_content}
          handleSetPost={handleSetPost}
        />
      </Col>
      <Col md={8}>
        <PostCreateSidebar
          category={post.category}
          handleSetPost={handleSetPost}
          handleCreatePost={handleCreatePost}
          loading={loading}
        />
      </Col>
    </Row>
  );
};

export default Create;
