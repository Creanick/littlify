const Url = require("../models/url");
const KGS = require("../classes/KGS/KGS");
module.exports = code => {
  if (!KGS.isValid(code)) {
    return Promise.reject({ message: "Code is not valid" });
  }
  return Url.findOne({ _id: code }).then(result => {
    if (!result) {
      return Promise.reject({ message: "Invalide url" });
    }
    return {
      url: result.originalUrl
    };
  });
};
