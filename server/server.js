const express = require("express");
// const db = require('./db');

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const PORT = 3000;

const login = require('./routes/login');
const application = require('./routes/app');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname,'../client/build')))

// route to login router
app.use('/login', login);

// route to app router
app.use('/app', application);

// serve up the index.html file for testing
app.get('/', (req, res, next) => {
	res.sendFile(path.resolve(__dirname, '../index.html'));
});

// error handler 
app.use((err, req, res, next) => {
	res.status(500).send({'Error': err});
});

app.listen(PORT,()=>console.log(`listening on port: ${PORT}`));
