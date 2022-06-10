const validateOdometer = async (pool, operation, data) => {
  try {
    //  console.log(data);
    let odometer = "";
    const { vehicleDbId } = data;
    const { readingDate } = data;
    if (operation === "create") {
      odometer = await pool.query(
        `SELECT count(*) FROM odometer WHERE vehicle_row_id = $1 and reading_date = $2`,
        [vehicleDbId, readingDate]
      );
    } else if (operation === "update") {
      const { id } = data;
      odometer = await pool.query(
        `SELECT count(*) FROM odometer WHERE (vehicle_row_id = $1 AND reading_date = $2) AND id <> $3`,
        [vehicleDbId, readingDate, id]
      );
    }
    //  console.log(vehicle.rows[0].count);
    if (odometer.rows[0].count > 0) {
      return {
        isDataValid: false,
        error: "A reading with this date already exists for this vehicle.",
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

module.exports = validateOdometer;
