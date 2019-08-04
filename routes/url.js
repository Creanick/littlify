const express = require("express");
const {
  getShortUrl,
  urlLookup,
  getOriginalUrl
} = require("../controllers/url");
const router = express.Router();

router.post("/short-url", getShortUrl);
router.get("/url/:code", getOriginalUrl);
router.get("/:code", urlLookup);

module.exports = router;
