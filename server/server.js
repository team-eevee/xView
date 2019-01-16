const express = require('express');
const db = require('./db');

require('dotenv').config();
const session = require('express-session');
const request = require('request');
const qs = require('querystring');
const randomString = require('uuid');
const csrfString = randomString();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname,'../client/build')))

// initialize session
app.use(
	session({
		secret: randomString(),
		cookie: { expires: false },
		resave: false,
		saveUninitialized: false,
	})
);

// serve up the index.html file for testing
app.get('/', (req, res, next) => {
	res.sendFile(path.resolve(__dirname, '../index.html'));
});

// the initial route when user presses login button
app.get('/login/github', (req, res, next) => {
	// generate csrf_string for 'state' parameter
	req.session.csrf_string = randomString();
	const githubAuthUrl = 
		'http://github.com/login/oauth/authorize?' + 
		qs.stringify({
			client_id: process.env.CLIENT_ID,
			redirect_uri: 'http://127.0.0.1:3000/login/github/callback',
			state: req.session.csrf_string,
		});
	// redirect user with express
	res.redirect(githubAuthUrl);
});

app.all('/login/github/callback', (req, res) => {
	const code = req.query.code;
	const returnedState = req.query.state;
	// if state matches, send request to get access token
	if (req.session.csrf_string === returnedState) {
		request.post(
			{
				url:
					'https://github.com/login/oauth/access_token?' +
					qs.stringify({
						client_id: process.env.CLIENT_ID,
						client_secret: process.env.CLIENT_SECRET,
						code: code,
						state: req.session.csrf_string,
					})
			},
			(err, response, body) => {
				// response will contain your new access token store token in session
				req.session.access_token = qs.parse(body).access_token;
				// redirect user to /home page 
				res.redirect('/home');
			},
		);
	} else {
		// if state doesn't match up, redirect to homepage
		res.redirect('/');
	}
});

app.get('/home', (req, res) => {
	// request to get user information
	request.get(
		{
			url: 'https://api.github.com/user',
			headers: {
				Authorization: 'token ' + req.session.access_token,
				'User-Agent': 'xView',
			}
		},
		(err, response, body) => {
			// the response is located in body
			res.send(
				"<p>Logged In!</p>" + body + "<p>Please work</p>"
			);
		},
	)
});

app.listen(PORT,()=>console.log(`listening on port: ${PORT}`));
