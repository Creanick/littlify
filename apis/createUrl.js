const Url = require("../models/url");
const { isWebUri } = require("valid-url");
function successResponse(result) {
  return {
    code: result._id,
    originalUrl: result.originalUrl,
    creationDate: result.creationDate
  };
}
function errorResponse(message) {
  return {
    message
  };
}
module.exports = originalUrl => {
  return new Promise((resolve, reject) => {
    if (!isWebUri(originalUrl)) {
      reject(errorResponse("Url is invalid"));
      return;
    }
    const url = new Url({ originalUrl });
    url
      .save()
      .then(result => {
        resolve(successResponse(result));
      })
      .catch(err => {
        const url2 = new Url({ originalUrl });
        url2
          .save()
          .then(result => {
            resolve(successResponse(result));
          })
          .catch(err => {
            reject(errorResponse("Cannot Short URL"));
          });
      });
  });
};
