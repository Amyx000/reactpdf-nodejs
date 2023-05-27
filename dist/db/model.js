"use strict";

const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  creationDate: {
    type: Date
  },
  status: {
    type: String
  },
  data: {
    type: String
  },
  reportId: {
    type: String
  },
  fileUrl: {
    type: String
  },
  completionTime: {
    type: Number
  }
});
mongoose.pluralize(null);
module.exports = mongoose.model("csvUpload", schema);