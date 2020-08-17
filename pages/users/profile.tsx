import React, { useEffect } from "react";
import { Form, Input, Select, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Avatar from "antd/lib/avatar/avatar";
import { useGlobalState } from "@/customHooks/useGlobalState";
import { updateProfile } from "@/modules/user/api";
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
  }
`;

const Profile: React.FC = () => {
  const [form] = Form.useForm();
  const [user] = useGlobalState("currentUser");
  const [token] = useGlobalState("token");
  useEffect(() => {
    form.setFieldsValue({
      fullname: user.fullname,
      gender: user.gender,
      description: user.description,
    });
  }, []);

  const onUpdateProfile = async () => {
    const fields = form.getFieldsValue(["fullname", "gender", "description"]);
    // TODO remove log
    console.log("fields", fields);
    //@ts-ignore
    const response = await updateProfile(fields, token);
    console.log(response);
  };

  return (
    <>
      <Wrapper>
        <div>
          <div>Profile</div>
          <Avatar shape="square" size={100} />
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
          <Form.Item name="profilepicture">
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <UploadOutlined /> Chọn avatar
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item name="description">
            <Input.TextArea placeholder="mô tả ngắn" />
          </Form.Item>
          <Form.Item name="udpate">
            <Button size="large" type="primary" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Wrapper>
    </>
  );
};

export default Profile;
