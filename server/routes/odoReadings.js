const express = require("express");
const router = express.Router();
//const cors = require("cors");
const pool = require("../db");

const validateOdometer = require("../data_validation/validate-odometer");

// create odometer record
router.post("/", async (req, res) => {
  try {
    //  console.log(req.body);
    // format data: convert blank to null values
    Object.keys(req.body).map((key, index) => {
      if (req.body[key] === "") {
        req.body[key] = null;
      }
    });

    // validate data
    const valResult = await validateOdometer(pool, "create", req.body);
    // console.log(ValResult);
    // if validation fails send error to client
    if (valResult.isDataValid === false) {
      res.json(valResult);
    }

    // if validation sucessfull then create record
    else {
      const {
        vehicleDbId,
        readingDate,
        initialReading,
        finalReading,
        mileage,
      } = req.body;
      const newOdoReading = await pool.query(
        "INSERT INTO odometer (vehicle_row_id, reading_date, initial_reading, final_reading, mileage) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [vehicleDbId, readingDate, initialReading, finalReading, mileage]
      );
      //  console.log(newOdoReading);
      //  res.json(newOdoReading.rows[0]);
      res.json(valResult);
    }
  } catch (err) {
    console.error(err.message);
  }
});

//get all odometer records
router.get("/", async (req, res) => {
  try {
    const allOdoReadings = await pool.query(
      `select o.id as "id", concat('O-',o.odo_num) as "odoNum", to_char(o.reading_date, 'DD/MM/YYYY') as "readingDate",
      o.initial_reading as "initialReading", o.final_reading as "finalReading", o.mileage, concat('V-',v.vehicle_num) as "vehicleNum", v.reg_num as "regNum" 
        from odometer o
        inner join vehicles v
        on o.vehicle_row_id = v.row_id`
    );

    // console.log(allVehicles.rows);
    res.json(allOdoReadings.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get one odometer record
router.get("/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const odoReading = await pool.query(
      `select concat('O-',o.odo_num) as "odoNum", o.reading_date as "readingDate", o.initial_reading as "initialReading",
        o.final_reading as "finalReading", o.mileage, concat('V-',v.vehicle_num, ' [',v.reg_num, ']') as "vehicleNum",
        v.row_id as "vehicleDbId", v.reg_num as "regNum", o.row_id as "odoReadingDbId" 
        from odometer o
        inner join vehicles v
        on o.vehicle_row_id = v.row_id
        WHERE o.id = $1`,
      [id]
    );
    // console.log(service.rows[0]);

    // format data: convert null to blank values
    Object.keys(odoReading.rows[0]).map((key, index) => {
      if (odoReading.rows[0][key] === null) {
        odoReading.rows[0][key] = "";
      }
    });

    res.json(odoReading.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a odometer
router.put("/:id", async (req, res) => {
  try {
    //console.log(req.params);
    //
    // format data: convert blank to null values
    Object.keys(req.body).map((key, index) => {
      if (req.body[key] === "") {
        req.body[key] = null;
      }
    });
    // console.log(req.body);

    // validate data
    const updatedData = req.body;
    updatedData["id"] = req.params.id;
    const valResult = await validateOdometer(pool, "update", updatedData);
    // console.log(ValResult);
    // if validation fails send error to client
    if (valResult.isDataValid === false) {
      // console.log(valResult);
      res.json(valResult);
    }

    // if validation sucessfull then create record
    else {
      // destructure
      const { id } = req.params;
      const {
        readingDate,
        initialReading,
        finalReading,
        mileage,
        vehicleDbId,
      } = req.body;
      const UpdateOdoReading = await pool.query(
        "UPDATE odometer SET reading_Date = $2, initial_Reading = $3, final_Reading = $4, mileage = $5, vehicle_row_id = $6  WHERE id = $1",
        [id, readingDate, initialReading, finalReading, mileage, vehicleDbId]
      );
      //  res.json("Odometer reading was updated");
      res.json(valResult);
    }
  } catch (err) {
    console.error(err.message);
  }
});

// delete vehicle record
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteService = await pool.query(
      "DELETE FROM services WHERE id = $1",
      [id]
    );
    res.json("Service was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
