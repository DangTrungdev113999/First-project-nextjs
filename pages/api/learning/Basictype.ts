import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const firstName: string = "trung";
  const age: number = 12;
  let isLive: boolean = true;

  if (age > 100) {
    isLive = false;
  }

  res.statusCode = 200;
  res.json({ firstName, age, isLive });
};
