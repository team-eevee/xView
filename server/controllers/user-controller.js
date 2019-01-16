const db = require('../db');

const verifyUser = (req, res, next) => {
	const { login, email, html_url, avatar_url } = res.locals.user;
	const selectValue = [email];
	const selectQuery = 'SELECT * FROM "user" WHERE email=$1;'
	db.one(selectQuery, selectValue)
		.then(user => {
			if (!user) {
				const values = [login, email, html_url, avatar_url];
				const insertQuery = 'INSERT INTO user (username, email, url, avatar) VALUES ($1, $2, $3, $4);';
				console.log('user ', login, email, html_url, avatar_url)
				db.none(insertQuery, values)
					.catch(err => next(err));
			}
		})
		.then(() => next())
		.catch(err => next(err));
	return next();
};

module.exports = { verifyUser }