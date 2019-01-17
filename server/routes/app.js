const express = require("express");
const router = express.Router();
require("dotenv").config();
const session = require("express-session");
const request = require("request");
const qs = require("querystring");
const randomString = require("uuid");
const csrfString = randomString();
const db = require("../db");

const appController = require("../controllers/app-controller");

router.get("/getUser/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  if (userId && userId !== NaN) {
    const queryString =
      'SELECT username,email,avatar from "user" WHERE user_id=$1';
    const queryValue = userId;
    db.oneOrNone(queryString, queryValue).then(data => {
      if (!data) return res.status(400).send("invalid userId");
      console.log(data);
      res.send(data);
    });
  } else {
    return res.status(400).send("invalid userId");
  }
});

router.get("/getApps/:userId", (req, res) => {
  // const userId = Number(req.params.userId);
  // console.log(userId);
  // if (userId && userId !== NaN) {
  //   const queryString = 'SELECT * FROM application';
  //   const queryValue = userId;
  //   db.query(queryString, queryValue).then(data => {
  //     if(!data) return res.status(400).send('invalid userId');
  //     console.log(data);
  //     return data;
  //   });
  // }
  // return res.status(400).send("invalid userId");
});

router.post("/createApp", (req, res) => {});

router.delete("/deleteApp", (req, res) => {});

router.patch("/updateApp", (req, res) => {});

module.exports = router;
