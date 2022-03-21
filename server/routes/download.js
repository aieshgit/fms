const express = require("express");
const router = express.Router();

//const cors = require("cors");
const pool = require("../db");

//get file
router.get("/:fileName", async (req, res) => {
  try {
    const { fileName } = req.params;
    res.download(`${process.env.FILE_PATH}/${fileName}`);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
