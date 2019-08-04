const shortid = require("shortid");

shortid.characters(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@"
);

class KGS {
  static getID() {
    return shortid.generate();
  }
  static isValid(id) {
    return shortid.isValid(id);
  }
}

module.exports = KGS;
