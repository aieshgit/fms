const validateEmployee = async (pool, operation, data) => {
  try {
    let employee = "";
    const { licenseNum } = data;
    const { email } = data;
    if (operation === "create") {
      employee = await pool.query(
        `SELECT count(*) FROM employees WHERE license_num = $1 OR email = $2`,
        [licenseNum, email]
      );
    } else if (operation === "update") {
      const { id } = data;
      employee = await pool.query(
        `SELECT count(*) FROM employees WHERE (license_num = $1 OR email = $2) AND id <> $3`,
        [licenseNum, email, id]
      );
    }

    //  console.log(employee.rows[0].count);
    if (employee.rows[0].count > 0) {
      return {
        isDataValid: false,
        error: "An employee with same license number or email already exists",
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

module.exports = validateEmployee;
