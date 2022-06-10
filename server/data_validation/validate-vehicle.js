const validateVehicle = async (pool, regNum) => {
  try {
    const vehicle = await pool.query(
      `SELECT count(*) FROM vehicles WHERE reg_num = $1`,
      [regNum]
    );
    //  console.log(vehicle.rows[0].count);
    if (vehicle.rows[0].count > 0) {
      //  console.log("Duplicate Record");
      /*       res.status(403).send(
        res.json({
          isDataValid: false,
          error: "A vehicle with same Registration number already exists",
        })
      ); */
      return {
        isDataValid: false,
        error: "A vehicle with same Registration number already exists",
      };
    } else {
      return {
        isDataValid: true,
      };
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = validateVehicle;
