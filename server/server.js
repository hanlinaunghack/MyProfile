const express = require("express");
const app = express();
const path = require("path");
const favicon = require("serve-favicon");
const fs = require("fs");
app.use(require("cors")());
app.use(require("body-parser").json());
app.use(express.static(path.join(__dirname, "../dist")));

app.get("/download/resume", (req, res) => {
  const file = path.resolve(__dirname, "./downloads/ResumeV3.pdf");
  res.download(file); // Set disposition and send it.
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(3000, () => console.log("Listening on port 3000"));
