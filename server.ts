import dotenv from "dotenv";
dotenv.config();
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import next from "next";
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const app = express();
const PORT = process.env.PORT || 3000;
const server = require("http").Server(app);

app.use(express.json());

nextApp.prepare().then(() => {
  app.use("/api/sendmails", require("./pages/api/sendmail"));
  app.all("*", (req: Request, res: Response) => handle(req, res));

  server.listen(PORT, (err: any) => {
    if (err) throw err;
    console.log("Express server running");
  });
});
