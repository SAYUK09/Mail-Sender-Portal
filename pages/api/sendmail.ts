import Router from "express";
import Email from "../../utils/mail";

const router = Router();

router.get("/", async (req, res) => {
  res.json({ name: "aka" });
});

router.post("/", async (req, res) => {
  try {
    await new Email(
      { email: "sayurikamble962@gmail.com" },
      "sayuk"
    ).sendMails();

    res.status(200).json({
      message: "check your mail",
    });
  } catch (err) {
    console.log("err", err);
  }
});

export default router;
