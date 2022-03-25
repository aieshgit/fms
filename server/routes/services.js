const express = require("express");
const router = express.Router();
//const cors = require("cors");
const pool = require("../db");

// create service record
router.post("/", async (req, res) => {
  try {
    //  console.log(req.body);
    // format data: convert blank to null values
    Object.keys(req.body).map((key, index) => {
      if (req.body[key] === "") {
        req.body[key] = null;
      }
    });
    const { vehicleDbId, serviceType, startDate, completionDate, repairer } =
      req.body;
    const newService = await pool.query(
      "INSERT INTO services (vehicle_row_id, service_type, start_date, completion_date, repairer) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [vehicleDbId, serviceType, startDate, completionDate, repairer]
    );
    //  console.log(newService);
    res.json(newService.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all service records
router.get("/", async (req, res) => {
  try {
    const allServices = await pool.query(
      `select s.id as "id", concat('S-',s.service_num) as "serviceNum", s.service_type as "serviceType", to_char(s.start_date, 'DD/MM/YYYY') as "startDate",
      to_char(completion_date, 'DD/MM/YYYY')as "completionDate", repairer, concat('V-',v.vehicle_num) as "vehicleNum", v.reg_num as "regNum" 
        from services s
        inner join vehicles v
        on s.vehicle_row_id = v.row_id`
    );

    // console.log(allVehicles.rows);
    res.json(allServices.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get one service record
router.get("/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const service = await pool.query(
      `select concat('S-',s.service_num) as "serviceNum", s.service_type as "serviceType", s.start_date as "startDate",
        s.completion_date as "completionDate", repairer, concat('V-',v.vehicle_num, ' [',v.reg_num, ']') as "vehicleNum",
        v.reg_num as "regNum", s.row_id as "serviceDbId" 
        from services s
        inner join vehicles v
        on s.vehicle_row_id = v.row_id
        WHERE s.id = $1`,
      [id]
    );
    // console.log(service.rows[0]);

    // format data: convert null to blank values
    Object.keys(service.rows[0]).map((key, index) => {
      if (service.rows[0][key] === null) {
        service.rows[0][key] = "";
      }
    });

    res.json(service.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a service
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
    //  console.log(req.body);
    const { id } = req.params;
    const { serviceType, startDate, completionDate, repairer } = req.body;
    const UpdateService = await pool.query(
      "UPDATE services SET service_type = $2, start_date = $3, completion_date = $4, repairer = $5  WHERE id = $1",
      [id, serviceType, startDate, completionDate, repairer]
    );
    res.json("Service was updated");
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
