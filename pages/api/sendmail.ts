import { NextApiHandler } from "next";
import Email from "../../utils/mail";

export const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    res.json({ msg: "Mehtod not allowed" });
  }
  try {
    console.log(req.body, "req");
    await new Email({
      email: req.body.email,
    }).sendMails();

    res.status(200).json({
      message: "check your mail",
    });
  } catch (err) {
    console.log("err", err);
  }
};

export default handler;
