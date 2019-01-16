const express = require("express");
// const db = require('./db');

require("dotenv").config();
const session = require("express-session");
const request = require("request");
const qs = require("querystring");
const randomString = require("uuid/v4");
const csrfString = randomString();
const axios = require("axios");
const axiosConfig = {
  "Content-Type": "application/json"
};

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const PORT = 3000;

const googleapi = require("googleapis");
const googleConfig = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUrl: process.env.GOOGLE_REDIRECT_URL
};
const googleRedirect = 'http://127.0.0.1:3000/login/google/callback';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static(path.resolve(__dirname, "../build")));

//route for authentication
app.get("/login/google", (req, res) => {
  res.redirect(googleConfig.redirectUrl);
});

app.get("/login/google/callback", (req, res) => {
  //take request code
  const code = req.query.code;

  //send to google
  axios
    .post(
      "https://www.googleapis.com/oauth2/v4/token",
      {
        code: code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: googleRedirect,
        state: randomString(),
      },
      axiosConfig
    )
    .then(res => {
      //received access token and refresh, do something with it
      console.log(res.data)
    })
    .catch(err => console.log(err));

  //response to user redirect?
  res.status(200);
});

//

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
