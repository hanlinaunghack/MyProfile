const { Client } = require("pg");
const client = new Client({
  user: "user",
  host: "54.241.155.25",
  database: "mydb",
  password: "pass",
  port: 5432
});
client.connect();

module.exports = client;
