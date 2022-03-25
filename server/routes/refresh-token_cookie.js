const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const jwtTokens = require("../jwt-helper");

router.get("/", async (req, res) => {
  try {
    const refreshToken = req.cookies.refresh_token;
    if (refreshToken === null) {
      return res.status(401).json({ error: "Null refresh token" });
    }
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (error, verifiedJwt) => {
        if (error) {
          return res.status(403).json({ error: error.message });
        }
        const tokens = jwtTokens(verifiedJwt);
        res.cookie("refresh_token", tokens.refreshToken, { httpOnly: true });
        res.json(tokens);
      }
    );
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    res.clearCookie("refresh_token");
    return res.status(200).json({ message: "refresh token deleted" });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;
