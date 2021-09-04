import Router from "express";
import Email from "../utils/mail";
import generator from "generate-password";

const router = Router();

const generatedPassword = generator.generate({
  length: 10,
  numbers: true,
});

router.get("/", async (req, res) => {
  res.json({ name: "aka" });
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body, "req");
    console.log(generatedPassword, "pappapapyarn");
    await new Email({
      email: req.body.email,
      password: generatedPassword,
    }).sendMails();

    res.status(200).json({
      message: "check your mail",
    });
  } catch (err) {
    console.log("err", err);
  }
});

module.exports = router;
