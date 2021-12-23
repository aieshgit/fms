const express = require("express");
const router = express.Router();
const multer = require("multer");
const uuid = require("uuid").v4;
const path = require("path");
const pool = require("../db");
let filePath = "";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (res, file, cb) => {
    //const { originalname } = file;
    // cb(null, Date.now() + "_" + file.originalname);
    const ext = path.extname(file.originalname);
    //const id = uuid();
    //const filePath = `docs/${id}${ext}`;
    filePath = `docs/${Date.now()}${ext}`;
    //cb(null, uuid() + "_" + file.originalname);
    cb(null, filePath);
  },
});

const upload = multer({ storage: storage }).array("file");
//app.use(express.static("public"));

router.post("/", async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ status: "500" });
      //  return res.status(500).json(err);
    }
    // console.log(res);
    Object.keys(req.body).map((key, index) => {
      if (req.body[key] === "") {
        req.body[key] = null;
      }
    });

    const { parentDbId, parentObject } = req.body;

    const newattachment = pool.query(
      "INSERT INTO attachments (service_row_id, parent_object, file_path) VALUES($1, $2, $3) RETURNING *",
      [parentDbId, parentObject, filePath]
    );

    return res.json({ status: "OK", uploaded: req.files.length });
    //  return res.status(200).send(req.files);
  });
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
