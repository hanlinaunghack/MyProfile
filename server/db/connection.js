const { Client } = require("pg");
const client = new Client({
  user: "user",
  host: "localhost",
  database: "mydb",
  password: "pass",
  port: 5432
});
client.connect();

module.exports = client;
