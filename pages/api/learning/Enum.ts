import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  enum BorrowMethod {
    flast = "vay nhanh",
    salary = "bang luong",
  }

  const print: BorrowMethod = BorrowMethod["flast"];

  res.statusCode = 200;
  res.json({ print });
};
