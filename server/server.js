const express = require("express");
const app = express();
const path = require("path");
const client = require("./db/connection.js");
app.use(require("cors")());
app.use(require("body-parser").json());
app.use(express.static(path.join(__dirname, "../dist")));

app.get("/test", async (req, res) => {
  const queryString = `CREATE TABLE IF NOT EXISTS comments (index INT PRIMARY KEY, name VARCHAR(30), comment TEXT, date VARCHAR(30));`;
  await client.query(queryString, (err, res) => {
    if (err) console.log(err);
  });
  const queryText = `SELECT * FROM comments`;
  await client.query(queryText, (err, result) => {
    if (err) {
      console.log(err);
      res.send("fail");
    } else {
      console.log(result.rows);
      res.json(result.rows);
    }
  });
});
app.get("/testinsert", (req, res) => {
  const [ind, name, comment] = [2, "Han", "blablabla"];
  const queryText = `INSERT INTO comments(index, name, comment) VALUES($1, $2, $3)`;
  client.query(queryText, [ind, name, comment]);
});
app.get("/download/resume", (req, res) => {
  const file = path.resolve(__dirname, "./downloads/ResumeV3.pdf");
  res.download(file); // Set disposition and send it.
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(3000, () => console.log("Listening on port 3000"));
