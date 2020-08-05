import { NextApiRequest, NextApiResponse } from "next";


import request from "@/utils/request";
import { BASE_URL } from "@/constants/index";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.statusCode = 400;
    res.json({
      message: "Wrong method",
    });
  }

  try {
    const response = await request(`${BASE_URL}/member/login.php`, {
      method: "POST",
      data: req.body,
    });

    const currentTime = new Date();
    const nextTime = new Date(
      currentTime.getFullYear() + 1,
      currentTime.getMonth()
    );

    if (response.status === 200) {
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.setHeader("Content-Type", "application/json");
      res.setHeader(
        "Set-Cookie",
        `token=${response.token}; expires=${nextTime.toUTCString()}; Path=/`
      );
      res.json(response);
    } else {
      res.statusCode = 302;
      res.setHeader("Location", "/login?error=failed");
      res.json(response);
    }
  } catch (e) {
    res.statusCode = 500;
    res.json({
      message: e.message,
    });
  }
};
