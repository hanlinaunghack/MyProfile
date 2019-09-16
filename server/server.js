const express = require("express");
const app = express();
const path = require("path");
const favicon = require("serve-favicon");
const fs = require("fs");
app.use(require("cors")());
app.use(require("body-parser").json());
app.use(express.static(path.join(__dirname, "../dist")));

app.post("/api/savefile", (req, res) => {
  var text = JSON.stringify(req.body);
  fs.writeFile("./server/savefiles/SaveFile", text, err => {
    if (err) throw err;
    res.send("success");
  });
});
app.get("/api/savefile", (req, res) => {
  try {
    fs.readFile("./server/savefiles/SaveFile", (err, data) => {
      if (data) {
        res.send(data);
      } else {
        res.send("");
      }
    });
  } catch {
    res.send("");
    return;
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(3000, () => console.log("Listening on port 3000"));
