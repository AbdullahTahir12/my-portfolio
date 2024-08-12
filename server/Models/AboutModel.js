const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema(
  {
    title: { type: String },
    name: { type: String, default: "" },
    about: { type: String, default: "" },
    platformurl: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("about", AboutSchema);
