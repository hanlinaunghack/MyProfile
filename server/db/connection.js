var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "hanlinaunghack",
  database: "myprofiledb"
});

const db = connection.connect(function(err) {
  if (err) throw err;
  connection.query(
    "CREATE TABLE comments (id int primary key, name varchar(255), comment text)",
    function(err, result) {
      if (err) throw err;
      connection.query(
        "INSERT INTO comments (name, comment) VALUES (?, ?, ?)",
        ["Han", "Please leave comments down below!"],
        function(err, result) {
          if (err) throw err;
          connection.query("SELECT * FROM people", function(err, results) {
            if (err) throw err;
            console.log(results);
          });
        }
      );
    }
  );
  console.log("You are now connected...");
});

module.exports = db;
