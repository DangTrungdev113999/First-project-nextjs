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

type TypeUpdateProfile = {
  fullname: string;
  gender: string;
  description: string;
  avatar: File;
};

type TypeChangePassword = {
  oldPassword: string;
  newPassword: string;
  reNewPassword: string;
};

import request from "@/utils/request";
import { BASE_URL } from "@/constants/index";

export const loginWithSSR = async ({ email, password }: TypeLogin) =>
  await request("/api/login", {
    method: "POST",
    data: {
      email,
      password,
    },
  });

export const loginWithCSR = async ({ email, password }: TypeLogin) =>
  await request(`${BASE_URL}/member/login.php`, {
    method: "POST",
    data: {
      email,
      password,
    },
  });

export const register = async (data: TypeRegister) =>
  await request(`${BASE_URL}/member/register.php`, {
    method: "POST",
    data,
  });

export const getUserById = async (userId: string) =>
  await request(`${BASE_URL}/member/member.php?userid=${userId}`);

export const updateProfile = async (data: FormData, token: string) =>
  await request(`${BASE_URL}/member/update.php`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  });

export const changePassword = async (data: TypeChangePassword, token: string) =>
  await request(`${BASE_URL}/member/password.php`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  });
