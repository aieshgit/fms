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

//ROUTES//
const vehicleRoute = require("./routes/vehicles");
const serviceRoute = require("./routes/services");
const odoRoute = require("./routes/odoReadings");
const employeeRoute = require("./routes/employees");
const uploadRoute = require("./routes/upload");
const documentRoute = require("./routes/documents");
const loginRoute = require("./routes/login");
const userRoute = require("./routes/users");
const userAuthRoute = require("./routes/user-auth");
//const refreshTokenRoute = require("./routes/refresh-token");

app.use("/vehicles", vehicleRoute);
app.use("/services", serviceRoute);
app.use("/odoReadings", odoRoute);
app.use("/employees", employeeRoute);
app.use("/upload", uploadRoute);
app.use("/documents", documentRoute);
app.use("/login", loginRoute);
app.use("/users", userRoute);
//app.use("/refresh-token", refreshTokenRoute);
app.use("/user-auth", userAuthRoute);

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
