import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../layouts/Table";

const Services = () => {
  const tableTitle = "Services";
  const entity = "services";
  const addButton = "Add Service";
  const headerItems = [
    "Service#",
    "Vehicle#",
    "Registration",
    "Service Type",
    "Start Date",
    "Completion Date",
    "Repairer",
    "Action",
  ];
  const columnOrder = [
    "serviceNum",
    "vehicleNum",
    "regNum",
    "serviceType",
    "startDate",
    "completionDate",
    "repairer",
  ];

  const [services, setServices] = useState([]);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    const result = await axios.get("http://localhost:5000/services");
    // console.log(result);
    //  result.data.map((item) => delete item.id);
    setServices(result.data);
  };

  const deleteService = async (id) => {
    await axios.delete(`http://localhost:5000/services/${id}`);
    loadServices();
  };

  return (
    <div className="container">
      {/*       <div className="py-4">
        </div> */}
      <Table
        tableTitle={tableTitle}
        entity={entity}
        headerItems={headerItems}
        tableData={services}
        columnOrder={columnOrder}
        deleteRecord={deleteService}
        addButton={addButton}
      />
    </div>
  );
};

export default Services;
