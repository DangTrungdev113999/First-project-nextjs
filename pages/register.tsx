import { Form, Input, Row, Col } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Register: React.FC = () => {
  return (
    <>
      <Row justify="center" align="middle">
        <Col span={6}>
          <Form {...layout}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Xin nhập email!" }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <div className="ass1-login">
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
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
              <input
                type="password"
                className="form-control"
                placeholder="Mật khẩu"
                required
              />
              <input
                type="password"
                className="form-control"
                placeholder="Nhập lại mật khẩu"
                required
              />
              <div className="ass1-login__send">
                <a href="dang-nhap.html">Đăng nhập</a>
                <button type="submit" className="ass1-btn">
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
