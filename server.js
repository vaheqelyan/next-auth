require("babel-polyfill");

import * as mobxReact from "mobx-react";

import express from "express";
import next from "next";
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
import cookieSession from "cookie-session";
import bodyParser from "body-parser";

require("dotenv").load();

mobxReact.useStaticRendering(true);

app.prepare().then(() => {
  const server = express();

  server.use(
    cookieSession({
      name: "session",
      secret: process.env.SECRET,
      maxAge: 24 * 60 * 60 * 1000
    })
  );
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.params);
  });

  server.post("/api/login", (req, res) => {
    const $ = req.body;

    if ($.user) {
      req.session.user = $.user;
      res.send(true);
    } else {
      res.send(false);
    }
  });

  server.post("/api/logout", (req, res) => {
    req.session = null;
    res.send(true);
  });

  server.get("/hdiw", (req, res) => {
    return app.render(req, res, "/hdiw", req.params);
  });

  server.get("/page1", (req, res) => {
    return app.render(req, res, "/page1", req.params);
  });
  server.get("/page2", (req, res) => {
    return app.render(req, res, "/page2", req.params);
  });

  server.get("*", (req, res) => handle(req, res));
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
