import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  function create(o: object | null): void {
    console.log("run");
  }

  // OK
  create({ prop: 0 });
  //   create("string");

  interface character {
    height: Number;
    weight: Number;
    alias?: String;
  }

  const trung: character = {
    height: 1.61,
    weight: 58,
    alias: "pho",
  };

  res.statusCode = 200;
  res.json({ trung });
};
