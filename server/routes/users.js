const express = require("express");
const router = express.Router();
//const authenticateToken = require("../authorization");
//router.use(authenticateToken);

//const cors = require("cors");
const pool = require("../db");
const bcrypt = require("bcrypt");

// create user record
//router.post("/", authenticateToken, async (req, res) => {
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // const { username, password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (username, password) VALUES($1, $2) RETURNING *",
      [req.body.username, hashedPassword]
    );
    // console.log(newUser);
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
