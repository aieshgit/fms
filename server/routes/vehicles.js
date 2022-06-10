const express = require("express");
const router = express.Router();

//const cors = require("cors");
const pool = require("../db");

//const {authenticateToken} = require("../authorization");
//const authenticateToken = require("../authorization");
//router.use(authenticateToken);

const validateVehicle = require("../data_validation/validate-vehicle");

// create vehicle record
router.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    // format data: convert blank to null values
    Object.keys(req.body).map((key, index) => {
      if (req.body[key] === "") {
        req.body[key] = null;
      }
    });

    //destructure
    const {
      regNum,
      vin,
      make,
      model,
      buildDate,
      vehicleType,
      etag,
      gcm,
      gvm,
      tare,
      mainEntry,
      maintExit,
      massEntry,
      massExit,
      nhvasLabelNum,
      regDueDate,
      regState,
      engineNum,
      engineMake,
      engineModel,
      engineCapacity,
      engineGearBox,
      frequency,
    } = req.body;

    // validate data
    const ValResult = await validateVehicle(pool, regNum, res);
    // console.log(ValResult);
    // if validation fails send error to client
    if (ValResult.isDataValid === false) {
      res.json(ValResult);
    }

    // if validation sucessfull then create record
    else {
      const newVehicle = await pool.query(
        "INSERT INTO vehicles (reg_num, vin, make, model, build_date, vehicle_type, etag, gcm, gvm, tare, maint_entry, maint_exit, mass_entry, mass_exit, nhvas_label_num, reg_due_date, reg_state, engine_num , engine_make, engine_model, engine_capacity, engine_gearbox, frequency) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23) RETURNING *",
        [
          regNum,
          vin,
          make,
          model,
          buildDate,
          vehicleType,
          etag,
          gcm,
          gvm,
          tare,
          mainEntry,
          maintExit,
          massEntry,
          massExit,
          nhvasLabelNum,
          regDueDate,
          regState,
          engineNum,
          engineMake,
          engineModel,
          engineCapacity,
          engineGearBox,
          frequency,
        ]
      );
      //  console.log(newVehicle);
      //  res.json(newVehicle.rows[0]);
      res.json(ValResult);
    }
  } catch (err) {
    console.error(err.message);
  }
});

//update a vehicle
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
    const { id } = req.params;
    const {
      regNum,
      vin,
      make,
      model,
      buildDate,
      vehicleType,
      etag,
      gcm,
      gvm,
      tare,
      maintEntry,
      maintExit,
      massEntry,
      massExit,
      nhvasLabelNum,
      regDueDate,
      regState,
      engineNum,
      engineMake,
      engineModel,
      engineCapacity,
      engineGearBox,
      frequency,
    } = req.body;
    const UpdateVehicle = await pool.query(
      "UPDATE vehicles SET reg_num = $2, vin = $3, make = $4, model = $5, build_date = $6, vehicle_type = $7, etag = $8, gcm = $9, gvm = $10, tare = $11, maint_entry = $12, maint_exit = $13, mass_entry = $14, mass_exit = $15, nhvas_Label_Num = $16, reg_due_date = $17, reg_state = $18, engine_num = $19, engine_make = $20, engine_model = $21, engine_capacity = $22, engine_gearbox = $23, frequency = $24  WHERE id = $1",
      [
        id,
        regNum,
        vin,
        make,
        model,
        buildDate,
        vehicleType,
        etag,
        gcm,
        gvm,
        tare,
        maintEntry,
        maintExit,
        massEntry,
        massExit,
        nhvasLabelNum,
        regDueDate,
        regState,
        engineNum,
        engineMake,
        engineModel,
        engineCapacity,
        engineGearBox,
        frequency,
      ]
    );
    res.json("Vehicle was updated");
  } catch (err) {
    console.error(err.message);
  }
});

//get all vehicle records
//router.get("/", authenticateToken, async (req, res) => {
router.get("/", async (req, res) => {
  try {
    const allVehicles = await pool.query(
      `SELECT row_id as "dbId", id, concat('V-',vehicle_num) as "vehicleNum", reg_num as "regNum", vin, make, model, to_char(build_date, 'DD/MM/YYYY') as "buildDate" from vehicles`
    );

    /*     allVehicles.rows.forEach((element, index) => {
        if (element.buildDate !== null) {
          const buildDate = new Date(element.buildDate);
          const formattedDate =
            String(buildDate.getDate()) +
            "/" +
            String(buildDate.getMonth() + 1) +
            "/" +
            String(buildDate.getFullYear());
          // console.log(formattedDate);
          allVehicles.rows[index].buildDate = formattedDate;
        }
        // allVehicles.rows[index].vehicleNum = "V-" + element.vehicleNum;
      }); */

    // console.log(allVehicles.rows);
    res.json(allVehicles.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get one vehicle record
router.get("/:id", async (req, res) => {
  try {
    //console.log(req.params);
    const { id } = req.params;
    const vehicle = await pool.query(
      `SELECT reg_num as "regNum", vin, make, model, build_date as "buildDate", concat('V-',vehicle_num) as "vehicleNum", vehicle_type as "vehicleType", etag, gcm, gvm, tare, maint_entry as "maintEntry", maint_exit as "maintExit", mass_entry as "massEntry", mass_exit as "massExit", nhvas_label_num as "nhvasLabelNum", reg_due_date as "regDueDate", reg_state as "regState", engine_num as "engineNum", engine_make as "engineMake", engine_model as "engineModel", engine_capacity as "engineCapacity", engine_gearbox as "engineGearBox", frequency FROM vehicles WHERE id = $1`,
      [id]
    );
    //  console.log(vehicle);
    //  console.log(vehicle.rows[0]);

    // format data: convert null to blank values
    Object.keys(vehicle.rows[0]).map((key, index) => {
      if (vehicle.rows[0][key] === null) {
        vehicle.rows[0][key] = "";
      }
    });

    res.json(vehicle.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// delete vehicle record
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVehicle = await pool.query(
      "DELETE FROM vehicles WHERE id = $1",
      [id]
    );
    res.json("Vehicle was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
