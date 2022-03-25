const express = require("express");
const router = express.Router();
const pool = require("../db");

// create employee record
router.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    // format data: convert blank to null values
    Object.keys(req.body).map((key, index) => {
      if (req.body[key] === "") {
        req.body[key] = null;
      }
    });
    const {
      firstName,
      lastName,
      jobTitle,
      licenseNum,
      mobileNum,
      email,
      address,
      city,
      state,
      postcode,
      startDate,
      endDate,
    } = req.body;
    const newEmployee = await pool.query(
      "INSERT INTO employees (first_name, last_name, job_title, license_num, mobile_num, email, address, city, state, postcode, start_date, end_date) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
      [
        firstName,
        lastName,
        jobTitle,
        licenseNum,
        mobileNum,
        email,
        address,
        city,
        state,
        postcode,
        startDate,
        endDate,
      ]
    );
    //  console.log(newEmployee);
    res.json(newEmployee.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update an employee
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
    const {
      firstName,
      lastName,
      jobTitle,
      licenseNum,
      mobileNum,
      email,
      address,
      city,
      state,
      postcode,
      startDate,
      endDate,
    } = req.body;
    const UpdateEmployee = await pool.query(
      "UPDATE employees SET first_name = $2, last_name = $3, job_title = $4, license_num = $5, mobile_num = $6, email = $7, address = $8, city = $9, state = $10, postcode = $11, start_date = $12, end_date = $13 WHERE id = $1",
      [
        id,
        firstName,
        lastName,
        jobTitle,
        licenseNum,
        mobileNum,
        email,
        address,
        city,
        state,
        postcode,
        startDate,
        endDate,
      ]
    );
    res.json("Employee was updated");
  } catch (err) {
    console.error(err.message);
  }
});

//get all employee records
router.get("/", async (req, res) => {
  try {
    const allEmployees = await pool.query(
      `SELECT row_id as "dbId", id, concat('E-',employee_num) as "employeeNum", concat(first_name , ' ' , last_name) as "fullName", job_title as "jobTitle", license_num as "licenseNum" from employees`
    );
    res.json(allEmployees.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get one employee record
router.get("/:id", async (req, res) => {
  try {
    //console.log(req.params);
    const { id } = req.params;
    const employee = await pool.query(
      `SELECT concat('E-',employee_num) as "employeeNum", first_name as "firstName", last_name as "lastName", job_title as "jobTitle", license_num as "licenseNum", mobile_num as "mobileNum", email, address, city, state, postcode, start_date as "startDate", end_date as "endDate" FROM employees WHERE id = $1`,
      [id]
    );

    // format data: convert null to blank values
    Object.keys(employee.rows[0]).map((key, index) => {
      if (employee.rows[0][key] === null) {
        employee.rows[0][key] = "";
      }
    });

    res.json(employee.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// delete employee record
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEmployee = await pool.query(
      "DELETE FROM employees WHERE id = $1",
      [id]
    );
    res.json("Employee was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
