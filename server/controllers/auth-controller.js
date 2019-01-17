const request = require("request");

// O-Auth request to Github to get authenticated user information
const getGitHubUser = (req, res, next) => {
  // request to get user information
  request.get(
    {
      url: "https://api.github.com/user",
      headers: {
        Authorization: "token " + req.session.access_token,
        "User-Agent": "xView"
      }
    },
    (err, response, body) => {
      if (err) return next(err);
      res.locals.user = JSON.parse(body);
      return next();
    }
  );
};

/*************************************** GOOGLE OAUTH ****************(********************/

const { google } = require("googleapis");
const googleConfig = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUrl: "http://127.0.0.1:3000/login/google/callback"
};
const SCOPE = [
  "https://www.googleapis.com/auth/contacts.readonly",
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile "
];
const oauth2Client = new google.auth.OAuth2(
  googleConfig.clientId,
  googleConfig.clientSecret,
  googleConfig.redirectUrl
);
const people = google.people({
  version: "v1",
  auth: oauth2Client
});

const getGoogleUrl = (req, res, next) => {
  url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPE
  });
  res.locals.url = url;
  next();
};

const setGoogleCredentials = async (req, res, next) => {
  //take request code
  const code = req.query.code;
  if (!code) return res.status(400).send("invalid request");
  else {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    next();
  }
};

const getGoogleUser = async (req, res, next) => {
  const info = await people.people.get({
    resourceName: "people/me",
    personFields: "names,emailAddresses,photos"
  });
  const { data } = info;
  const user = {
    login: data.names[0].displayName,
    email: data.emailAddresses[0].value,
    avatar_url: data.photos[0].url
  };
  res.locals.user = user;
  next();
};

module.exports = {
  getGitHubUser,
  getGoogleUser,
  setGoogleCredentials,
  getGoogleUrl
};
