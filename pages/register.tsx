import useAuthenticated from "@/customHooks/useAutthenticated";
import { useGlobalState } from "@/customHooks/useGlobalState";
import { register } from "@/modules/user/api";
import { Col, Form, Input, Row } from "antd";
import JsCookie from "js-cookie";
import React, { useMemo, useState } from "react";
import { handleError } from "utils/index";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const initialRegister = {
  fullname: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  password: {
    value: "",
    error: "",
  },
  repassword: {
    value: "",
    error: "",
  },
};

const Register: React.FC = () => {
  useAuthenticated("register");
  const [registerData, setRegisterData] = useState(initialRegister);
  const [, setCurrentUser] = useGlobalState("currentUser");
  const [, setToken] = useGlobalState("token");
  const isSubmitForm = useMemo(() => {
    for (let key in registerData) {
      if (registerData[key].error) {
        return false;
      }
    }
    return true;
  }, [registerData]);

  const handleRegisterData = (key: string) => (e: any) => {
    const value = e.target.value;
    const password = registerData.password.value;
    let error = handleError(key, value, password);
    setRegisterData({
      ...registerData,
      [key]: {
        value,
        error,
      },
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const fullname = registerData.fullname.value;
    const email = registerData.email.value;
    const password = registerData.password.value;
    const repassword = registerData.repassword.value;

    if (isSubmitForm && fullname && email && password && repassword) {
      const response = await register({
        fullname,
        email,
        password,
        repassword,
      });
      if (response.status === 200) {
        JsCookie.set("token", response.token);
        setToken(response.token);
        setCurrentUser(response.user);
      } else {
        alert("Đăng ký thất bại vui lòng thử lại");
      }
    } else {
      alert("Vui lòng nhập đầy đủ thông tin.!");
    }
  };

  return (
    <>
      <Row justify="center" align="middle">
        <Col span={6}>
          <Form {...layout}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Xin nhập email!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Xin nhập password!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="repassword"
              rules={[{ required: true, message: "Xin nhập password!" }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      {/* <div className="ass1-login">
        <div className="ass1-login__logo">
          <a href="index.html" className="ass1-logo">
            Learning nextjs
          </a>
        </div>
        <div className="ass1-login__content">
          <p>Đăng ký một tài khoản</p>
          <div className="ass1-login__form">
            <form action="#">
              <input
                type="text"
                className="form-control"
                placeholder="Tên hiển thị"
                required
              />
              {registerData.fullname.error && (
                <small className="error">{registerData.fullname.error}</small>
              )}
            </div>
            <div className="wrapper-input">
              <input
                value={registerData.email.value}
                onChange={handleRegisterData("email")}
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
              {registerData.email.error && (
                <small className="error">{registerData.email.error}</small>
              )}
            </div>
            <div className="wrapper-input">
              <input
                value={registerData.password.value}
                onChange={handleRegisterData("password")}
                type="password"
                className="form-control"
                placeholder="Mật khẩu"
                required
              />
              {registerData.password.error && (
                <small className="error">{registerData.password.error}</small>
              )}
            </div>
            <div className="wrapper-input">
              <input
                value={registerData.repassword.value}
                onChange={handleRegisterData("repassword")}
                type="password"
                className="form-control"
                placeholder="Nhập lại mật khẩu"
                required
              />
              {registerData.repassword.error && (
                <small className="error">{registerData.repassword.error}</small>
              )}
            </div>
            <div className="ass1-login__send">
              <Link href="/login">
                <a>Đăng nhập</a>
              </Link>
              <button type="submit" className="ass1-btn">
                Đăng ký
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
};

export default Register;
