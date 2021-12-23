import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "../layouts/DataTable";

const tableTitle = "Services";
const entity = "services";
const addButton = "Add Service";

const columns = [
  /*   {
    Header: "id",
    accessor: "id",
  }, */
  {
    Header: "Service#",
    accessor: "serviceNum",
  },
  {
    Header: "Vehicle#",
    accessor: "vehicleNum",
  },
  {
    Header: "Registration",
    accessor: "regNum",
  },
  {
    Header: "Service Type",
    accessor: "serviceType",
  },
  {
    Header: "Start Date",
    accessor: "startDate",
  },
  {
    Header: "Completion Date",
    accessor: "completionDate",
  },
  {
    Header: "Repairer",
    accessor: "repairer",
  },
];

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    const result = await axios.get("http://localhost:5000/services");
    // console.log(result);
    //  result.data.map((item) => delete item.id);
    setServices(result.data);
    // console.log(result.data);
  };

  const deleteService = async (id) => {
    await axios.delete(`http://localhost:5000/services/${id}`);
    loadServices();
  };

  return (
    <div className="container">
      <DataTable
        tableTitle={tableTitle}
        entity={entity}
        columns={columns}
        tableData={services}
        deleteRecord={deleteService}
        addButton={addButton}
      />
    </div>
  );
};

export default Services;
