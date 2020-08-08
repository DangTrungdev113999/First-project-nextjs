import React, { useState } from "react";
import JsCookie from "js-cookie";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Col, Form, Input, Row, Button, Typography, message } from "antd";

import useAuthenticated from "@/customHooks/useAutthenticated";
import { useGlobalState } from "@/customHooks/useGlobalState";
import { register } from "@/modules/user/api";

import styled from "styled-components";

import Link from "next/link";

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

const Register: React.FC = () => {
  useAuthenticated("register");
  const [, setCurrentUser] = useGlobalState("currentUser");
  const [, setToken] = useGlobalState("token");
  const [loading, setLoading] = useState(false);

  const onRegister = async (fields: any) => {
    setLoading(true);
    const response = await register({
      fullname: fields.fullname,
      email: fields.email,
      password: fields.password,
      repassword: fields.repassword,
    });
    setLoading(false);
    if (response.status === 200) {
      JsCookie.set("token", response.token);
      setToken(response.token);
      setCurrentUser(response.user);
    } else {
      message.error(response.error || "Đăng ký thất bại, xin hãy thử lại", 2);
    }
  };

  return (
    <Wrapper>
      <Row justify="center" align="middle">
        <Col span={24}>
          <Title level={2} className="register-title">
            NextJs
          </Title>
        </Col>
        <Col span={24}>
          <Form size="large" onFinish={onRegister} scrollToFirstError>
            <Form.Item
              name="fullname"
              rules={[
                { required: true, message: "Xin hãy nhập tên!" },
                { min: 2, message: "Tên phải nhiều hơn hai ký tự" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Họ và Tên"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Xin nhập email!" },
                {
                  type: "email",
                  message: "Vui lòng nhập đúng định dạng email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Xin hãy nhập mật khẩu!" },
                { min: 6, message: "Mật khẩu phải có ít nhất 6 kí tự" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Mật khẩu"
              />
            </Form.Item>
            <Form.Item
              name="repassword"
              rules={[
                { required: true, message: "Xin nhập lại mật khẩu!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
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
                placeholder="Mật khẩu"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                loading={loading}
              >
                Đăng ký
              </Button>
              hoặc
              <Link href="/login">
                <Button type="link" htmlType="submit">
                  Đăng nhập
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Register;
