import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Col,
  Form,
  Input,
  Row,
  Button,
  Typography,
  message,
  Checkbox,
} from "antd";
import styled from "styled-components";
import JsCookie from "js-cookie";

import { loginWithCSR, getUserById } from "@/modules/user/api";
import useAuthenticated from "@/customHooks/useAutthenticated";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useGlobalState } from "@/customHooks/useGlobalState";
import { parseJwt } from "../utils";

const { Title, Text } = Typography;

const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px 30px 10px;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
  & .login-title {
    text-align: center;
  }
`;

interface FormLogin {
  email: string;
  password: string;
}

const initFormData = {
  email: "",
  password: "",
};

const Login: React.FC = () => {
  useAuthenticated("login");
  const router = useRouter();
  const [form] = Form.useForm();
  const [formData, setFormData] = useState<FormLogin>(initFormData);
  const [checked, setChecked] = useState(false);
  const [, setToken] = useGlobalState("token");
  const [, setCureentUser] = useGlobalState("currentUser");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const error = router.query.error;
    if (error === "failed") {
      message.error("Email hoặc mật khẩu không đúng. ");
    }
    window.history.pushState(null, "", "/login");
  }, []);

  useEffect(() => {
    const remenber = JSON.parse(localStorage.getItem("remenber"));
    if (remenber?.email && remenber?.password) {
      setChecked(true);
      form.setFieldsValue(remenber);
    }
  }, []);

  const onRemember = async (e: any) => {
    setChecked(e.target.checked);
    try {
      const values = await form.validateFields(["email", "password"]);
      if (e.target.checked) {
        localStorage.setItem(
          "remenber",
          JSON.stringify({ email: values.email, password: values.password })
        );
      } else {
        localStorage.removeItem("remenber");
      }
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  const onLogin = async () => {
    setLoading(true);
    const values = await form.validateFields(["email", "password"]);
    try {
      //@ts-ignore
      const response = await loginWithCSR(values);
      if (response.status === 200) {
        const currentUser = parseJwt(response.token);

        const userRes =
          currentUser?.id && currentUser?.email
            ? await getUserById(currentUser.id)
            : null;

        JsCookie.set("token", response.token);
        setToken(response.token);
        setCureentUser(userRes?.user);

        router.push("/");
      } else {
        message.error(`Đăng nhập thất bại: ${response.error}`);
      }
    } catch (error) {
      message.error(`${error.message}`);
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      <Row justify="center" align="middle">
        <Col span={24}>
          <Title level={2} className="login-title">
            NextJs
          </Title>
        </Col>
        <Col span={24} md={24}>
          <Form
            form={form}
            onFinish={onLogin}
            method="POST"
            action="/api/login"
          >
            <Form.Item
              name="email"
              initialValue={formData.email}
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
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              initialValue={formData.password}
              rules={[
                { required: true, message: "Xin hãy nhập mật khẩu!" },
                { min: 6, message: "Mật khẩu phải có ít nhất 6 kí tự" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Mật khẩu"
                size="large"
              />
            </Form.Item>
            <Form.Item name="remember">
              <Checkbox checked={checked} onChange={onRemember}>
                <Text strong>Nhớ tài khoản và mật khẩu</Text>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                size="large"
                loading={loading}
              >
                Đăng nhập
              </Button>
              hoặc
              <Link href="/register">
                <Button type="link" htmlType="submit">
                  Đăng ký
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Login;
