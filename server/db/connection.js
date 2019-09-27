const { Client } = require("pg");
const client = new Client({
  user: "user",
  host: "54.241.155.25",
  database: "mydb",
  password: "pass",
  port: 5432
});
client.connect();

const queryString = `CREATE TABLE IF NOT EXISTS comments (index INT PRIMARY KEY, name VARCHAR(20), comment TEXT, email VARCHAR(30), date VARCHAR(20));`;
client.query(queryString, (err, response) => {
  if (err) {
    console.error(err);
    return;
  }
});

module.exports = client;
