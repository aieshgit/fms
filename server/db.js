const pg = require("pg");

pg.types.setTypeParser(1082, function (stringValue) {
  return stringValue; //1082 for date type
});

const Pool = pg.Pool;

const pool = new Pool({
  user: "postgres",
  password: "postgres12#",
  host: "localhost",
  port: 5432,
  database: "fmsdb",
});

module.exports = pool;
