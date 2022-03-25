const express = require("express");
const router = express.Router();
const jwtTokens = require("../jwt-helper");

//const cors = require("cors");
const pool = require("../db");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

//get/post user record
router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await pool.query(
      //`SELECT id, username, password FROM users WHERE username = $1`,
      `SELECT username, password FROM users WHERE username = $1`,
      [username]
    );

    if (
      user.rows[0] !== undefined &&
      user.rows[0].username === username &&
      (await bcrypt.compare(password, user.rows[0].password))
    ) {
      //generate access token
      /*    const user = {
        id: userData.rows[0].id,
        username: userData.rows[0].username,
      }; */
      /*       const accesToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1m",
      });
      const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "1m",
      }); */
      // res.json({ username: username, accesToken });

      const tokens = jwtTokens(user.rows[0]);

      // res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });
      res.json({
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        username: user.rows[0].username,
      });
    } else {
      res.status(400).json("Username or password incorrect");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
