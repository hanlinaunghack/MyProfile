const { Client } = require("pg");
const client = new Client({
  user: "user",
  host: "localhost",
  database: "mydb",
  password: "pass",
  port: 5432
});
client.connect();
// client.on("connect", () => {
//   console.log("connected to the db");
// });

// const createTables = () => {
//   const queryText = `CREATE TABLE IF NOT EXISTS comments(index INT PRIMARY KEY, name VARCHAR(80) NOT NULL, comment TEXT)`;
//   client
//     .query(queryText)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// };

// const dropTables = () => {
//   const queryText = `DROP TABLE IF EXISTS comments`;
//   client
//     .query(queryText)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// };

module.exports = client;
