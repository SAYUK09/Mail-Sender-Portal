import Router from "express";
import Email from "../utils/mail";

const router = Router();

router.get("/", async (req, res) => {
  res.json({ name: "aka" });
});

router.post("/", async (req, res) => {
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
});

module.exports = router;
