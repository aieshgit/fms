const express = require("express");
const router = express.Router();

//const cors = require("cors");
const pool = require("../db");

//get all document records
router.get("/:parentDbId", async (req, res) => {
  try {
    // const parentDbId = "1";
    // console.log(req.params);
    // console.log(req);
    const { parentDbId } = req.params;
    // console.log(parentDbId);
    const allDocuments = await pool.query(
      `select file_name as "fileName", file_path as "filePath" from documents WHERE service_row_id = $1`,
      [parentDbId]
    );
    // console.log(service.rows[0]);

    // format data: convert null to blank values
    /*     Object.keys(allFiles.rows[0]).map((key, index) => {
          if (allFiles.rows[0][key] === null) {
            allFiles.rows[0][key] = "";
          }
        }); */
    //console.log(allDocuments.rows);
    res.json(allDocuments.rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
