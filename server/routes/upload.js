const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
//const uuid = require("uuid").v4;
//const path = require("path");
const pool = require("../db");

router.use(fileUpload({ createParentPath: true }));

router.post("/", async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;
  // console.log(file);
  for (let i = 0; i < file.length; i++) {
    file[i].mv(`C:/fms/uploads/${file[i].name}`, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      // console.log(file[i].name);
      Object.keys(req.body).map((key, index) => {
        if (req.body[key] === "") {
          req.body[key] = null;
        }
      });

      const { parentDbId, parentObject } = req.body;

      const newDocument = pool.query(
        "INSERT INTO documents (service_row_id, parent_object, file_path) VALUES($1, $2, $3) RETURNING *",
        [parentDbId, parentObject, `C:/fms/uploads/${file[i].name}`]
      );

      //res.json({ fileName: file.name, filePath: `C:/fms/uploads/${file.name}` });
    }); //file
  } //for
  return res.json({ status: "OK", uploaded: req.files.length });
});

//get all attachments for parent
router.get("/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const allFiles = await pool.query(
      `select file_path as "filePath" from attachments WHERE service_row_id = $1`,
      [id]
    );
    // console.log(service.rows[0]);

    // format data: convert null to blank values
    /*     Object.keys(allFiles.rows[0]).map((key, index) => {
        if (allFiles.rows[0][key] === null) {
          allFiles.rows[0][key] = "";
        }
      }); */

    res.json(allFiles.rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
