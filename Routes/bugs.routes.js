const express = require("express");
const Bugs = require("../Schema/bugs.schema");
const app = express.Router();

// ---------- (post Bugs) -------------
app.post("/", async (req, res) => {
  try {
    await Bugs.create(req.body);
    res.send("Bug Added!!");
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------- (Get Bugs) -------------
app.get("/", async (req, res) => {
  try {
    const bugs = await Bugs.find();
    res.send(bugs);
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------- (delete Bugs) -------------
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Bugs.deleteOne({ _id: id });
    res.send("Bug Deleted");
  } catch (e) {
    res.status(404).send(e);
  }
});

// ---------- (Update Bugs) -------------
app.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Bugs.updateOne({ _id: id }, { $set: req.body });
    return res.send("Bug updated");
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = app;
