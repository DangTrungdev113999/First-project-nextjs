import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { login } from "@/modules/user/api";
import useAuthenticated from "@/customHooks/useAutthenticated";
import { handleError } from "../utils";

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
  const [formData, setFormData] = useState<FormLogin>(initFormData);
  const router = useRouter();
  useEffect(() => {
    const error = router.query.error;
    if (error === "failed") {
      alert("Email hoặc mật khẩu không đúng. ");
    }
    window.history.pushState(null, "", "/login");
  }, []);

  const handleChangeFormValue = (key: string) => (e: any) => {
    setFormData({
      ...formData,
      [key]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await login(formData);
    router.push("/");
  };

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    const form = document.getElementById("form-login");
    const email = form.elements.namedItem("email").value;
    const password = form.elements.namedItem("password").value;
    const errorEmail = handleError("email", email);
    const errorPassword = handleError("password", password);
    if (!errorEmail && !errorPassword) {
      e.target.submit();
    } else {
      alert(`${errorEmail}, ${errorPassword}`);
    }
  };
  return (
    <div className="ass1-login">
      <div className="ass1-login__logo">
        <a href="index.html" className="ass1-logo">
          Learning nextjs
        </a>
      </div>
      <div className="ass1-login__content">
        <p>Đăng nhập</p>
        <div className="ass1-login__form">
          {/* <form action="#" onSubmit={handleSubmit}> */}
          <form
            id="form-login"
            action="/api/login"
            method="POST"
            onSubmit={handleSubmitForm}
          >
            <input
              type="text"
              name="email"
              // value={formData.email}
              // onChange={handleChangeFormValue("email")}
              className="form-control"
              placeholder="Email"
              required
            />
            <div className="ass1-input-copy">
              <input
                type="password"
                name="password"
                // value={formData.password}
                // onChange={handleChangeFormValue("password")}
                className="form-control"
                placeholder="Mật khẩu"
                required
              />
            </div>
            <div className="ass1-login__send">
              <Link href="/register">
                <a>Đăng ký một tài khoản</a>
              </Link>
              <button type="submit" className="ass1-btn">
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
