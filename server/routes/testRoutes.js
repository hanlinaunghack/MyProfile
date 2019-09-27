var express = require("express");
var router = express.Router();

router.get("/test1", function(req, res) {
  res.send("test1");
});
// define the about route
router.get("/test2", function(req, res) {
  res.send("test2");
});

module.exports = router;
