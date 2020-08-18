import React, { useState } from "react";
import JsCookie from "js-cookie";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Col, Form, Input, Row, Button, Typography, message } from "antd";

import useAuthenticated from "@/customHooks/useAutthenticated";
import { useGlobalState } from "@/customHooks/useGlobalState";
import { changePassword } from "@/modules/user/api";

import styled from "styled-components";
import { useRouter } from "next/router";

const { Title } = Typography;

const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px 30px 10px;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);

  & .register-title {
    text-align: center;
  }
`;

const ChangePassword: React.FC = () => {
  useAuthenticated("");
  const router = useRouter();
  const [token] = useGlobalState("token");
  const [loading, setLoading] = useState(false);

  const onChangePassword = async (fields: any) => {
    setLoading(true);
    try {
      const response = await changePassword(
        {
          oldPassword: fields.oldPassword,
          newPassword: fields.newPassword,
          reNewPassword: fields.reNewPassword,
        },
        token
      );
      if (response?.status === 200) {
        router.push("/");
        message.success("Thay đổi mật khẩu thành công");
      } else {
        router;
        message.error("Cập nhật mật khẩu thất bại, xin hãy thử lại");
      }
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <Wrapper>
      <Row justify="center" align="middle">
        <Col span={24}>
          <Title level={2} className="register-title">
            Change Passwsord
          </Title>
        </Col>
        <Col span={24}>
          <Form size="large" onFinish={onChangePassword} scrollToFirstError>
            <Form.Item
              name="oldPassword"
              rules={[
                { required: true, message: "Xin hãy nhập mật khẩu!" },
                { min: 6, message: "Mật khẩu phải có ít nhất 6 kí tự" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Mật khẩu cũ"
              />
            </Form.Item>
            <Form.Item
              name="newPassword"
              rules={[
                { required: true, message: "Xin hãy nhập mật khẩu!" },
                { min: 6, message: "Mật khẩu phải có ít nhất 6 kí tự" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Mật khẩu mới"
              />
            </Form.Item>
            <Form.Item
              name="reNewPassword"
              rules={[
                { required: true, message: "Xin nhập lại mật khẩu!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Mật khẩu nhập lại không khớp!");
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Nhập lại mật khẩu"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                loading={loading}
              >
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ChangePassword;
