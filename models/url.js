const mongoose = require("mongoose");
const KGS = require("../classes/KGS/KGS");
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  _id: {
    type: String,
    default: KGS.getID
  },
  originalUrl: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("Url", urlSchema);
