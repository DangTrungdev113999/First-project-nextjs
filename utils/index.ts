import atob from "atob";
import { NextPageContext } from "next";

import cookie from "cookie";
import jsCookie from "js-cookie";

type TypeUser = {
  id: string;
  email: string;
};

export const parseJwt = (token: string) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
};

export const getTokenInSsrAndCsr = (
  ctx: NextPageContext
): [string, TypeUser] => {
  let token = "";
  if (typeof window === "undefined") {
    token = cookie.parse(ctx.req.headers.cookie || "")?.token || "";
  } else {
    token = jsCookie.get("token") || "";
  }
  const currentUser = parseJwt(token) || {};

  return [token, currentUser];
};

export const isEmail = (email: string): boolean => {
  const re = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
  return re.test(String(email).toLowerCase());
};

export const handleError = (
  key: string,
  value: string,
  password?: string
): string => {
  if (key === "fullname" && value.length < 6) {
    return "Phải chứa ít nhất 6 kí tự";
  }
  if (key === "email" && !isEmail(value)) {
    return "Không đúng định dạng email";
  }
  if (key === "password" && value.length < 6) {
    return "Mật khẩu phải chứa ít nhất 6 ký tự";
  }
  if (key === "repassword" && value !== password) {
    return "Mật khẩu nhập lại không đúng";
  }
  return "";
};

export const toQuerryString = (params: Record<string, any>) => {
  return Object.keys(params)
    .reduce((men, key) => {
      if (params[key]) {
        men = `${men}${key}=${encodeURIComponent(params[key])}&`;
      }
      return men;
    }, "?")
    .slice(0, -1);
};
