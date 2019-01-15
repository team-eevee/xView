const pgp = require("pg-promise")();
const dotenv = require("dotenv");
dotenv.config();

const db = pgp(process.env.POSTGRES_URL);

module.exports = db;
