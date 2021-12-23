const express = require("express");
const app = express();
const cors = require("cors");
//const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//
const vehicleRoute = require("./routes/vehicles");
const serviceRoute = require("./routes/services");
const uploadRoute = require("./routes/upload");
const documentRoute = require("./routes/documents");

app.use("/vehicles", vehicleRoute);
app.use("/services", serviceRoute);
app.use("/upload", uploadRoute);
app.use("/documents", documentRoute);

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
