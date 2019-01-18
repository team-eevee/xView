const db = require("../db");
const bcrypt = require("bcrypt");
const randomString = require("uuid");
const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./serverStorage");

// verify user to see if they exist in db (by email), if not then create new row in user table
function verifyUser(req, res, next) {
  const { login, email, avatar_url } = res.locals.user;
  const selectValue = [email];
  const selectQuery = 'SELECT * FROM "user" WHERE email=$1;';

  // check if an array of ssid exist in local storage
  if (!localStorage.getItem("ssid"))
  
    localStorage.setItem("ssid", JSON.stringify([]));

  db.oneOrNone(selectQuery, selectValue)
    .then(async function(user) {
      // if user doesn't exist then create new user in db with new session and store in
      // local storage and cookie
      if (!user) {
        const newSession = randomString();
        // set the cookie for the current session
        res.cookie("user", newSession, { maxAge: 900000, httpOnly: true });
        // stores a new session into the local storage array of ssid
        const ssidArray = JSON.parse(localStorage.getItem("ssid"));
        ssidArray.push(newSession);
        localStorage.setItem("ssid", JSON.stringify(ssidArray));

        await bcrypt.hash(newSession, 10, (err, session) => {
          const values = [login, email, avatar_url, session];
          const insertQuery =
            'INSERT INTO "user" (username, email, avatar, session) VALUES ($1, $2, $3, $4);';
          db.none(insertQuery, values)
            .then(() => next())
            .catch(err => next(err));
        });
      } else {
        // if user exists, get the existing session
        const ssidArray = JSON.parse(localStorage.getItem("ssid"));
        let exists = false;
        // asynchronously compare session with hashed session in db
        ssidArray.forEach(async function(ssid, index) {
          await bcrypt.compare(ssid, user.session, (err, result) => {
            if (result) {
              res.cookie("user", ssid); // if the hashed session matches the stored session, set cookie and proceed
              exists = true;
              return next();
            }
          });
        });
      }
    })
    .catch(err => next(err));
}

const checkUser = (req, res, next) => {
  //get data from cookie
  if (req.cookies.user) {
    const sessionHash = req.cookies.user;
    selectQuery = 'SELECT session,user_id from "user"';
		res.locals.logged = {loggedIn:false}

    //get database sessions and compare with bcrypt
    db.query(selectQuery).then(data => {
      data.forEach(async (ssid, index) => {
        await bcrypt.compare(sessionHash, ssid.session, (err, result) => {
          if (result) {
						res.locals.logged = {loggedIn:true, userId : ssid.user_id}
            return next();
          }
        });
      });
    });
  }
};

const getUserInfo = (req,res,next)=>{
  const userId = Number(res.locals.logged.userId);
  if (userId && userId !== NaN) {
    const queryString =
      'SELECT username,email,avatar from "user" WHERE user_id=$1';
    const queryValue = userId;
    db.oneOrNone(queryString, queryValue).then(data => {
      if (!data) return res.status(400).send("invalid userId");
      const {username,email,avatar}=data;
      res.locals.logged = {
        ...res.locals.logged,
        username,
        email,
        avatar,
      }
      next();
    });
  } else {
    return res.status(400).send("invalid userId");
  }
}

module.exports = { verifyUser, checkUser, getUserInfo };
