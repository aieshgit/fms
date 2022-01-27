import React, { useState, useEffect } from "react";
import axios from "axios";
import BsTable from "../layouts/BsTable";
import { textFilter } from "react-bootstrap-table2-filter";

const OdoReadings = () => {
  const columns = [
    {
      dataField: "odoNum",
      text: "Odometer#",
    },
    {
      dataField: "vehicleNum",
      text: "Vehicle#",
      // sort: true,
      filter: textFilter(),
    },
    {
      dataField: "regNum",
      text: "Registration",
    },
    {
      dataField: "readingDate",
      text: "Date",
    },
    {
      dataField: "initialReading",
      text: "Initial Reading",
    },
    {
      dataField: "finalReading",
      text: "Final Reading",
    },
    {
      dataField: "mileage",
      text: "Mileage",
    },
    /*     {
      dataField: "id",
      text: "Actions",
      formatter: action,
    }, */
  ];
  //for bootstrap table

  const [odoReadings, setOdoReadings] = useState([]);

  useEffect(() => {
    loadOdoReadings();
  }, []);

  const loadOdoReadings = async () => {
    const result = await axios.get("http://localhost:5000/odoReadings");
    // console.log(result);
    //  result.data.map((item) => delete item.id);
    setOdoReadings(result.data);
  };

  // delete odo reading
  /*   const deleteOdoReading = async (id) => {
    await axios.delete(`http://localhost:5000/odoReadings/${id}`);
    loadOdometer();
  }; */

  return (
    <BsTable
      sObject="OdoReadings"
      tableTitle="Odometer"
      columns={columns}
      tableData={odoReadings}
      addButton="Add Reading"
    />
  );
};

export default OdoReadings;
