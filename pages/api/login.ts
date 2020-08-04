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

    res.statusCode = 200;
    res.setHeader(
      "Set-Cookie",
      `token=${response.token}; expires=${nextTime.toUTCString()};2 Path=/`
    );
    res.json(response);
  } catch (e) {
    res.statusCode = 500;
    res.json({
      message: e.message,
    });
  }
};
