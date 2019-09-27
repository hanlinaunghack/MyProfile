const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const client = require("./db/connection.js");
const { transporter, mailOptions } = require("./nodemailer/nodemailer.js");

app.use(require("cors")());
app.use(bodyParser.json());
app.use("/tests", require("./routes/testRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));
app.use(express.static(path.join(__dirname, "../dist")));

app.get("/contactme/email", (req, res, next) => {
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error(error);
    }
  });
  res.send("Success");
});
app.get("/download/resume", (req, res) => {
  const file = path.resolve(__dirname, "./downloads/ResumeV4.pdf");
  res.download(file); // Set disposition and send it.
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(3000, () => console.log("Listening on port 3000"));
