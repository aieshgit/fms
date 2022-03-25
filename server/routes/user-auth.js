const express = require("express");
const router = express.Router();
const authenticateToken = require("../authorization");
router.use(authenticateToken);

//check user is authentic
router.get("/", authenticateToken, async (req, res) => {
  // if not using authentication from index.js, uncomment the above three lines
  //router.get("/", async (req, res) => {
  try {
    res.json({ ok: true });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;
