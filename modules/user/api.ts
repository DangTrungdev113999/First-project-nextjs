import request from "@/utils/request";
import { BASE_URL } from "@/constants/index";
export const login = async ({ email, password }) =>
  await request("/api/login", {
    method: "POST",
    data: {
      email,
      password,
    },
  });

export const register = async (data) =>
  await request(`${BASE_URL}//member/register.php`, {
    method: "POST",
    data,
  });

export const getUserById = async (userId: string) =>
  await request(`${BASE_URL}/member/member.php?userid=${userId}`);
