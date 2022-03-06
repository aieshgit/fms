const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
//const uuid = require("uuid").v4;
//const path = require("path");
const pool = require("../db");

router.use(fileUpload({ createParentPath: true }));

router.post("/", async (req, res) => {
  console.log(req.files);
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  let file = req.files.file;

  // to overcome the issue of system not converting single object into array of objects
  if (!Array.isArray(file)) {
    file = [file];
    //  console.log(file);
  }

  for (let i = 0; i < file.length; i++) {
    file[i].mv(`${process.env.FILE_PATH}${file[i].name}`, (err) => {
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
        "INSERT INTO documents (service_row_id, parent_object, file_name) VALUES($1, $2, $3) RETURNING *",
        [
          parentDbId,
          parentObject,
          file[i].name,
          //`http://127.0.0.1:8080/${file[i].name}`,
        ]
      );

      //res.json({ fileName: file.name, filePath: `C:/fms/uploads/${file.name}` });
    }); //file
  } //for
  return res.json({ status: "OK", uploaded: req.files.length });
});

module.exports = router;
