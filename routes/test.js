const express = require("express");
const createUrl = require("../apis/createUrl");
const router = express.Router();

router.get("/", (req, res, next) => {
  createUrl("https://google.com")
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(401).json({
        err
      });
    });
});

module.exports = router;
