// const express = require("express");
// const app = express();
// const server = require("http").Server(app);
// const next = require("next");
// const dev = process.env.NODE_ENV !== "production";
// const nextApp = next({ dev });
// const handle = nextApp.getRequestHandler();
// require("dotenv").config();
// app.use(express.json());
// const PORT = process.env.PORT || 3000;

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import next from "next";
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const app = express();
const PORT = process.env.PORT || 3000;
const server = require("http").Server(app);
const swndmail = require("./pages/api/sendmail");

nextApp.prepare().then(() => {
  app.use("/api/sendmails", swndmail);
  app.all("*", (req: any, res: any) => handle(req, res));

  server.listen(PORT, (err: any) => {
    if (err) throw err;
    console.log("Express server running");
  });
});
