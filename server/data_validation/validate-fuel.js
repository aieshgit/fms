const validateFuel = async (pool, operation, data) => {
  try {
    //  console.log(data);
    let fuel = "";
    const { vehicleDbId } = data;
    const { fuelDate } = data;
    if (operation === "create") {
      fuel = await pool.query(
        `SELECT count(*) FROM fuel WHERE vehicle_row_id = $1 and fuel_date = $2`,
        [vehicleDbId, fuelDate]
      );
    } else if (operation === "update") {
      const { id } = data;
      fuel = await pool.query(
        `SELECT count(*) FROM fuel WHERE (vehicle_row_id = $1 AND fuel_date = $2) AND id <> $3`,
        [vehicleDbId, fuelDate, id]
      );
    }
    //  console.log(vehicle.rows[0].count);
    if (fuel.rows[0].count > 0) {
      return {
        isDataValid: false,
        error: "A fuel entry with this date already exists for this vehicle.",
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

module.exports = validateFuel;
