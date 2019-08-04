const express = require("express");
const createUrl = require("../apis/createUrl");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    secure: req.secure
  });
});

module.exports = router;
