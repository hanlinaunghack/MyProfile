const { Client } = require("pg");
const client = new Client({
  user: "user",
  host: "localhost",
  password: "pass",
  database: "mydb"
});
const connectionString =
  process.env.DATABASE_URL || "postgres://localhost:5432/mydb";
const db = client.connect(connectionString);
const query = client.query(
  "CREATE TABLE items(id INT PRIMARY KEY, name VARCHAR(40) not null, comment TEXT)"
);
query.on("end", () => {
  client.end();
});
module.exports = db;
