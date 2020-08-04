import request from "@/utils/request";

export const login = async ({ email, password }) =>
  await request("/api/login", {
    method: "POST",
    data: {
      email,
      password,
    },
  });
