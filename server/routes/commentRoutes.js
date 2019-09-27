var express = require("express");
var router = express.Router();
var client = require("../db/connection.js");

router.get("/", (req, res, next) => {
  let queryString = `SELECT * FROM comments;`;
  client.query(queryString, (err, response) => {
    if (err) {
      console.error(err);
      res.send("Data cannot be fetched!");
    } else {
      res.json(response.rows);
    }
  });
});
router.get("/:index", (req, res, next) => {
  let queryString = `SELECT * FROM comments WHERE index=$1;`;
  client.query(queryString, [req.params.index], (err, response) => {
    if (err) {
      console.error(err);
      res.send("Data cannot be fetched!");
    } else {
      res.json(response.rows);
    }
  });
});
router.post("/", (req, res) => {
  let queryString = `INSERT INTO comments(index, name, comment) VALUES($1, $2, $3);`;
  let [index, name, comment] = [
    req.body.index,
    req.body.name,
    req.body.comment
  ];
  client.query(queryString, [index, name, comment], (err, response) => {
    if (err) {
      console.error(err);
      res.send("Data cannot be posted");
    }
    res.send("Data posted.");
  });
});
router.get("/delete/:index", (req, res) => {
  let queryString = `DELETE FROM comments WHERE index=$1;`;
  client.query(queryString, [req.params.index], (err, response) => {
    if (err) {
      console.error(err);
      res.send("Data cannot be deleted");
    }
    res.send("Data successfully deleted.");
  });
});

module.exports = router;
