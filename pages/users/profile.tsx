import React, { useEffect, useState } from "react";
import { Form, Input, Select, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Avatar from "antd/lib/avatar/avatar";
import { useGlobalState } from "@/customHooks/useGlobalState";
import { updateProfile } from "@/modules/user/api";
import { createDataFromFormData } from "@/utils/index";
const { Option } = Select;

const Wrapper = styled.div`
  width: 600px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 5px lightgray;
  margin: 0 auto;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    > div {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: 400;
    }
    > span {
      width: auto;
    }
  }
`;

const Profile: React.FC = () => {
  const [form] = Form.useForm();
  const [user, setCurrentUser] = useGlobalState("currentUser");
  const [token] = useGlobalState("token");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState({
    objFile: "",
    urlPreview: "",
  });
  useEffect(() => {
    form.setFieldsValue({
      fullname: user.fullname,
      gender: user.gender,
      description: user.description,
    });
    setFile({
      ...file,
      urlPreview: user.profilepicture || "/images/avatar-02.png",
    });
  }, []);

  const handlePreviewImage = (info: any) => {
    const file = info.file.originFileObj;
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      setFile({
        objFile: file,
        urlPreview: reader.result as string,
      });
    });

    reader.readAsDataURL(file);
  };

  const onUpdateProfile = async () => {
    setLoading(true);
    const fields = form.getFieldsValue(["fullname", "gender", "description"]);

    const data = {
      fullname: fields.fullname,
      gender: fields.gender,
      description: fields.description,
    };
    if (file.objFile) {
      data["avatar"] = file.objFile;
    }

    const fromData = createDataFromFormData(data);

    const response = await updateProfile(fromData, token);
    if (response.status === 200) {
      setCurrentUser(response.user);
      message.success("cập nhật thông tin profile thành công");
    } else {
      message.error(`cập nhật thông tin profile thất bại: ${response.error}`);
    }

    setLoading(false);
  };

  return (
    <>
      <Wrapper>
        <div>
          <div>Profile</div>
          <Upload
            name="avatar"
            listType="picture-card"
            showUploadList={false}
            onChange={handlePreviewImage}
          >
            <Avatar shape="square" size={100} src={file.urlPreview} />
          </Upload>
        </div>
        <Form form={form} onFinish={onUpdateProfile}>
          <Form.Item name="fullname">
            <Input placeholder="Tên..." />
          </Form.Item>
          <Form.Item name="gender">
            <Select
              placeholder="Giới tính"
              // onChange={onGenderChange}
              allowClear
            >
              <Option value="nam">nam</Option>
              <Option value="nu">nữ</Option>
            </Select>
          </Form.Item>
          <Form.Item name="description">
            <Input.TextArea placeholder="mô tả ngắn" />
          </Form.Item>
          <Form.Item name="udpate">
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Wrapper>
    </>
  );
};

export default Profile;
