import request from "@/utils/request";
import { BASE_URL } from "@/constants/index";

export const login = async ({ email, password }) => {
  const response = await request(BASE_URL, "/member/login.php", "POST", {
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email,
      password,
    },
  });
  return response;
};
