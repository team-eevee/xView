const express = require("express");
require("dotenv").config();
const randomString = require("uuid");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const login = require("./routes/login");
const cors = require('cors');
const application = require("./routes/app");
const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../build')));

// route to login router
app.use("/login", login);

// route to app router
app.use("/app", application);

// // serve up the index.html file for testing
// app.get("/", (req, res, next) => {
//   res.sendFile(path.resolve(__dirname, "../index.html"));
// });

// error handler
app.use((err, req, res, next) => {
  res.status(500).send({ Error: err });
});

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
