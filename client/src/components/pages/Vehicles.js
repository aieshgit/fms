import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../layouts/Table";

const Vehicles = () => {
  const tableTitle = "Vehicles";
  const entity = "vehicles";
  const addButton = "Add Vehicle";
  const headerItems = [
    "Vehicle#",
    "Registration",
    "VIN/Chassis",
    "Make",
    "Model",
    "Build Date",
    "Action",
  ];
  const columnOrder = [
    "vehicleNum",
    "regNum",
    "vin",
    "make",
    "model",
    "buildDate",
  ];

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    const result = await axios.get("http://localhost:5000/vehicles");
    // console.log(result);
    //  result.data.map((item) => delete item.id);
    setVehicles(result.data);
  };

  const deleteVehicle = async (id) => {
    await axios.delete(`http://localhost:5000/vehicles/${id}`);
    loadVehicles();
  };

  return (
    <div className="container">
      {/*       <div className="py-4">
        </div> */}
      <Table
        tableTitle={tableTitle}
        entity={entity}
        headerItems={headerItems}
        tableData={vehicles}
        columnOrder={columnOrder}
        deleteRecord={deleteVehicle}
        addButton={addButton}
      />
    </div>
  );
};

export default Vehicles;
