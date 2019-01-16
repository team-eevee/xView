const db = require('../db');

// verify user to see if they exist in db (by email), if not then create new row in user table
const verifyUser = (req, res, next) => {
	const { login, email, html_url, avatar_url } = res.locals.user;
	const selectValue = [email];
	const selectQuery = 'SELECT * FROM "user" WHERE email=$1;'
	db.oneOrNone(selectQuery, selectValue)
		.then(user => {
			if (!user) {
				const values = [login, email, avatar_url];
				const insertQuery = 'INSERT INTO "user" (username, email, avatar) VALUES ($1, $2, $3);';
				db.none(insertQuery, values)
					.catch(err => next(err));
			}
		})
		.then(() => next())
		.catch(err => next(err));
};

module.exports = { verifyUser }