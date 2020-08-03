import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  let x: [Number, String, Boolean] = [12, "a", true];

  // x[2].substring(1);
  x[1].substring(1);

  res.statusCode = 200;
  res.json({ x });
};
