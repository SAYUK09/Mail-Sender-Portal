// import dotenv from "dotenv";
// dotenv.config();
// import express, { Application, Request, Response, NextFunction } from "express";
// import cors from "cors";
// import next from "next";
// const dev = process.env.NODE_ENV !== "production";
// const nextApp = next({ dev });
// const handle = nextApp.getRequestHandler();
// const app = express();
// const PORT = process.env.PORT || 3000;
// const server = require("http").Server(app);

// app.use(express.json());

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// nextApp.prepare().then(() => {
//   app.use("/api/sendmails", require("./pages/api/sendmail"));
//   app.all("*", (req: Request, res: Response) => handle(req, res));

//   server.listen(PORT, (err: any) => {
//     if (err) throw err;
//     console.log("Express server running");
//   });
// });

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    // const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === "/api/sendmails") {
      app.render(req, res, "/api/sendmails");
    } else if (pathname === "/b") {
      app.render(req, res, "/b", query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
