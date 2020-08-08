type TypeRegister = {
  fullname: string;
  email: string;
  password: string;
  repassword: string;
};

type TypeLogin = {
  email: string;
  password: string;
};

import request from "@/utils/request";
import { BASE_URL } from "@/constants/index";

export const login = async ({ email, password }: TypeLogin) =>
  await request("/api/login", {
    method: "POST",
    data: {
      email,
      password,
    },
  });

export const register = async (data: TypeRegister) =>
  await request(`${BASE_URL}//member/register.php`, {
    method: "POST",
    data,
  });

export const getUserById = async (userId: string) =>
  await request(`${BASE_URL}/member/member.php?userid=${userId}`);
