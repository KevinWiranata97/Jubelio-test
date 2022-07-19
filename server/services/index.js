const pgp = require('pg-promise')();
const connectionString = "postgresql://postgres:postgres@localhost:5432/Jubelio";

const db = pgp(connectionString);

module.exports = db