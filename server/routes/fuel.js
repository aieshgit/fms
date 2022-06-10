const express = require("express");
const router = express.Router();
//const cors = require("cors");
const pool = require("../db");

const validateFuel = require("../data_validation/validate-fuel");

// create fuel record
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
    const valResult = await validateFuel(pool, "create", req.body);
    // console.log(valResult);
    // if validation fails send error to client
    if (valResult.isDataValid === false) {
      res.json(valResult);
    }

    // if validation sucessfull then create record
    else {
      const { vehicleDbId, fuelDate, fuelQty, totalFuelCost } = req.body;
      const newFuel = await pool.query(
        "INSERT INTO fuel (vehicle_row_id, fuel_date, fuel_qty, total_fuel_cost) VALUES($1, $2, $3, $4) RETURNING *",
        [vehicleDbId, fuelDate, fuelQty, totalFuelCost]
      );
      //  console.log(newFuel);
      //  res.json(newFuel.rows[0]);
      res.json(valResult);
    }
  } catch (err) {
    console.error(err.message);
  }
});

//get all fuel records
router.get("/", async (req, res) => {
  try {
    const allFuel = await pool.query(
      `select f.id as "id", concat('F-',f.fuel_num) as "fuelNum", to_char(f.fuel_date, 'DD/MM/YYYY') as "fuelDate",
      f.fuel_qty as "fuelQty", f.total_fuel_cost as "totalFuelCost", concat('V-',v.vehicle_num) as "vehicleNum", v.reg_num as "regNum" 
        from fuel f
        inner join vehicles v
        on f.vehicle_row_id = v.row_id`
    );

    // console.log(allVehicles.rows);
    res.json(allFuel.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get one fuel record
router.get("/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const fuel = await pool.query(
      `select concat('O-',f.fuel_num) as "fuelNum", f.fuel_date as "fuelDate", f.fuel_qty as "fuelQty",
        f.total_fuel_cost as "totalFuelCost", concat('V-',v.vehicle_num, ' [',v.reg_num, ']') as "vehicleNum",
        v.row_id as "vehicleDbId", v.reg_num as "regNum", f.row_id as "fuelDbId" 
        from fuel f
        inner join vehicles v
        on f.vehicle_row_id = v.row_id
        WHERE f.id = $1`,
      [id]
    );
    // console.log(fuel.rows[0]);

    // format data: convert null to blank values
    Object.keys(fuel.rows[0]).map((key, index) => {
      if (fuel.rows[0][key] === null) {
        fuel.rows[0][key] = "";
      }
    });

    res.json(fuel.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update fuel
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
    const valResult = await validateFuel(pool, "update", updatedData);
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
      const { fuelDate, fuelQty, totalFuelCost, vehicleDbId } = req.body;
      const updateFuel = await pool.query(
        "UPDATE fuel SET fuel_date = $2, fuel_qty = $3, total_fuel_cost = $4, vehicle_row_id = $5 WHERE id = $1",
        [id, fuelDate, fuelQty, totalFuelCost, vehicleDbId]
      );
      //  res.json("Fuel record was updated");
      res.json(valResult);
    }
  } catch (err) {
    console.error(err.message);
  }
});

// delete fuel record
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFuel = await pool.query("DELETE FROM fuel WHERE id = $1", [id]);
    res.json("Fuel was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
