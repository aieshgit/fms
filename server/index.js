const express = require("express");
const app = express();
const cors = require("cors");
//const pool = require("./db");
//const cookieParser = require("cookie-parser");
const authenticateToken = require("./authorization");
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());
//app.use(cookieParser());
//app.use(authenticateToken);

//authentication routes
const loginRoute = require("./routes/login");
const refreshTokenRoute = require("./routes/refresh-token");
const userAuthRoute = require("./routes/user-auth");
app.use("/login", loginRoute);
app.use("/refresh-token", refreshTokenRoute);
app.use("/user-auth", userAuthRoute);

//app.use(authenticateToken);
//SECURED ROUTES//
const vehicleRoute = require("./routes/vehicles");
const serviceRoute = require("./routes/services");
const odoRoute = require("./routes/odoReadings");
const employeeRoute = require("./routes/employees");
const uploadRoute = require("./routes/upload");
const documentRoute = require("./routes/documents");
//const loginRoute = require("./routes/login");
const userRoute = require("./routes/users");
//const userAuthRoute = require("./routes/user-auth");
const downloadRoute = require("./routes/download");
//const refreshTokenRoute = require("./routes/refresh-token");
const fuelRoute = require("./routes/fuel");

app.use("/vehicles", authenticateToken, vehicleRoute);
app.use("/services", authenticateToken, serviceRoute);
app.use("/odoReadings", authenticateToken, odoRoute);
app.use("/employees", authenticateToken, employeeRoute);
app.use("/upload", authenticateToken, uploadRoute);
app.use("/documents", authenticateToken, documentRoute);
//app.use("/login", loginRoute);
app.use("/users", authenticateToken, userRoute);
//app.use("/refresh-token", refreshTokenRoute);
//app.use("/user-auth", userAuthRoute);
app.use("/download", authenticateToken, downloadRoute);
app.use("/fuel", authenticateToken, fuelRoute);

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
