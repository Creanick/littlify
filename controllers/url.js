const { isWebUri } = require("valid-url");
const mainUrl = require("../utils/mainUrl");
const createUrl = require("../apis/createUrl");
const getUrl = require("../apis/getUrl");
const UrlPattern = require("url-pattern");
const getShortUrl = (req, res, next) => {
  const originalUrl = req.body.url;
  if (!isWebUri(originalUrl)) {
    const error = new Error("Url is invalide");
    error.status = 409;
    return next(error);
  }
  const hostUrl = mainUrl(req);
  createUrl(originalUrl)
    .then(result => {
      return res.status(200).json({
        shortUrl: hostUrl + "/" + result.code,
        originalUrl: originalUrl
      });
    })
    .catch(err => {
      const error = new Error(err.message);
      error.status = 404;
      return next(error);
    });
};

const urlLookup = (req, res, next) => {
  const code = req.params.code;
  getUrl(code)
    .then(result => {
      res.redirect(result.url);
    })
    .catch(err => {
      res.redirect("/");
    });
};

const getOriginalUrl = (req, res, next) => {
  const code = req.params.code;
  console.log(code);
  getUrl(code)
    .then(result => {
      res.json({
        originalUrl: result.url
      });
    })
    .catch(err => {
      const error = new Error(err.message);
      error.status = 404;
      return next(error);
    });
};

module.exports = { getShortUrl, urlLookup, getOriginalUrl };
