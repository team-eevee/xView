const request = require('request');

// O-Auth request to Github to get authenticated user information
const getGitHubUser = (req, res, next) => {
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
			if (err) return next(err);
			res.locals.user = JSON.parse(body);
			console.log('going to usercontroller')
		 	return next();
		},
	);
};

const getGoogleUser = (req, res, next) => {

};

module.exports = { getGitHubUser, getGoogleUser };