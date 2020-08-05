import atob from "atob";
import { NextPageContext } from "next";

import cookie from "cookie";
import jsCookie from "js-cookie";

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

type TypeUser = {
  id: string;
  email: string;
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
