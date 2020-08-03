import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const arrNumber1: Array<number> = [1, 2, 3, 4];
  const arrNumber2: number[] = [1, 2, 3, 4];
  const arrRamdom1: any[] = ["a", 1, true, 12.12];
  const arrRamdom2: Array<any> = ["a", 1, true, 12.12];
  //   arrNumber2.push("23");
  arrRamdom2.push(true);

  interface debtList {
    [index: number]: string;
  }

  const list: debtList = ["a", "b", "c"];

  res.statusCode = 200;
  res.json({ arrNumber1, arrNumber2, arrRamdom1, arrRamdom2, list });
};
