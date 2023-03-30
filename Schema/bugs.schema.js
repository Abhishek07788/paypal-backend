const mongoose = require("mongoose");

const bugsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, required: true },
});

const Bugs = mongoose.model("bugs", bugsSchema);
module.exports = Bugs;
